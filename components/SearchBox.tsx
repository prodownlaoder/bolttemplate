'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ClipboardPaste,
  Download,
  Loader2,
  Play,
  Eye,
  ThumbsUp,
} from 'lucide-react';

interface VideoInfo {
  thumbnail: string;
  title: string;
  uploader: string;
  platform: string;
  description: string;
  duration: string;
  views: string;
  likes: string;
  downloadUrl: string;
  websocketId?: string;
  fileName?: string;
}

const qualityOptions = [
  '144p',
  '240p',
  '360p',
  '480p',
  '720p',
  '1080p',
  '1440p',
  '2k',
  '4k',
];

const baseUrl = 'https://prodl.site';
const wsBaseUrl = 'wss://prodl.site/ws';

export default function SearchBox() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [selectedQuality, setSelectedQuality] = useState('720p'); // default 720p
  const [downloadText, setDownloadText] = useState('Download Now');
  const [progressPercent, setProgressPercent] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const wsRef = useRef<WebSocket | null>(null);
  const requestIdRef = useRef<string | null>(null);
  const downloadUrlRef = useRef<string | null>(null);
  const fileNameRef = useRef<string | null>('video.mp4');

  // Clipboard paste
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      console.error('Failed to read clipboard:', err);
    }
  };

  // Initiate download process and handle WebSocket
  const handleDownloadRequest = async () => {
    if (!url.trim()) return;

    setIsLoading(true);
    setVideoInfo(null);
    setErrorMessage(null);
    setDownloadText('Preparing For Download');
    setShowProgress(false);
    setProgressPercent(0);
    setDownloadReady(false);

    const requestId = Date.now().toString();
    requestIdRef.current = requestId;

    // Close previous socket
    wsRef.current?.close();

    try {
      // POST to get video info and websocket id
      const response = await fetch(`${baseUrl}/getvideo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url,
          quality: selectedQuality,
          request_id: requestId,
        }),
      });

      const data = await response.json();

      setVideoInfo({
        thumbnail: data.thumbnail,
        title: data.title,
        uploader: data.uploader,
        platform: data.platform,
        description: data.description,
        duration: data.duration || 'N/A',
        views: data.views || 'N/A',
        likes: data.like_count || 'N/A',
        downloadUrl: '', // Will come from websocket
        websocketId: data.websocket_id,
      });

      // Connect WebSocket for progress
      const socket = new WebSocket(
        `${wsBaseUrl}/${data.websocket_id || requestId}`
      );

      socket.onopen = () => {
        console.log('✅ WebSocket connected');
        setShowProgress(true);
        setDownloadText('Preparing For Download');
        setProgressPercent(0);
        setDownloadReady(false);
      };

      socket.onmessage = (event) => {
        console.log('📩 WebSocket message:', event.data);

        let msgData: any;
        try {
          msgData =
            typeof event.data === 'string'
              ? JSON.parse(event.data)
              : event.data;
        } catch {
          msgData = event.data;
        }

        if (typeof msgData === 'object') {
          if (msgData.status === 'error') {
            setDownloadText('Error');
            setErrorMessage(msgData.message || 'An error occurred.');
            setShowProgress(false);
            setDownloadReady(false);
            return;
          }

          if (
            msgData.status === 'completed' ||
            (msgData.message &&
              msgData.message.toLowerCase().includes('complete'))
          ) {
            setProgressPercent(100);
            setDownloadText('Download Ready');
            setShowProgress(false);
            setDownloadReady(true);
            return;
          }

          if (
            msgData.event === 'download_result' &&
            msgData.payload?.download_url
          ) {
            downloadUrlRef.current = `${baseUrl}${msgData.payload.download_url}`;
            fileNameRef.current = msgData.payload.file_name || 'video.mp4';
            setDownloadText('Save To Device');
            setShowProgress(false);
            setDownloadReady(true);
            setVideoInfo((prev) =>
              prev
                ? {
                    ...prev,
                    downloadUrl: downloadUrlRef.current!,
                    fileName: fileNameRef.current!,
                  }
                : prev
            );
            return;
          }

          if (typeof msgData.progress === 'number') {
            setProgressPercent(msgData.progress);
            setDownloadText(
              `${msgData.message || 'Downloading'} ${Math.floor(
                msgData.progress
              )}%`
            );
            setShowProgress(true);
          }
        } else if (typeof msgData === 'string') {
          if (msgData.startsWith('progress:')) {
            const percent = parseInt(msgData.split(':')[1]);
            setProgressPercent(percent);
            setDownloadText(`Downloading ${percent}%`);
            setShowProgress(true);
          } else if (msgData === 'completed') {
            setProgressPercent(100);
            setDownloadText('Download Ready');
            setShowProgress(false);
            setDownloadReady(true);
          } else if (msgData === 'error') {
            setDownloadText('Error');
            setErrorMessage('Download Failed');
            setShowProgress(false);
            setDownloadReady(false);
          }
        }
      };

      socket.onerror = (err) => {
        console.error('❌ WebSocket error:', err);
        setDownloadText('Error');
        setErrorMessage('WebSocket connection failed.');
        setShowProgress(false);
        setDownloadReady(false);
      };

      socket.onclose = () => {
        console.warn('⚠️ WebSocket closed');
        if (progressPercent < 100 && !downloadReady) {
          setDownloadText('Disconnected');
          setErrorMessage('WebSocket closed before completion.');
        }
      };

      wsRef.current = socket;
    } catch (err) {
      console.error('❌ Fetch error:', err);
      setDownloadText('Download Failed');
      setErrorMessage('Failed to fetch video info.');
      setShowProgress(false);
      setDownloadReady(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Download the file when ready
  const handleDownloadFile = () => {
    if (!downloadUrlRef.current) {
      setErrorMessage('Download URL is missing.');
      return;
    }
    const anchor = document.createElement('a');
    anchor.href = downloadUrlRef.current;
    anchor.download = fileNameRef.current || 'video.mp4';
    anchor.target = '_blank';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  // Cleanup websocket on unmount
  useEffect(() => {
    return () => {
      wsRef.current?.close();
    };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Search Input & Quality */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-gray-100">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Paste Your Video URL
          </h2>
          <p className="text-gray-600">
            Support for 1000+ platforms including YouTube, TikTok, Instagram,
            Facebook & more
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 relative group">
            <Input
              type="text"
              placeholder="https://www.youtube.com/watch?v=example"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="h-16 pl-6 pr-16 text-lg border-2 border-gray-200 focus:border-purple-500 rounded-2xl bg-gray-50 focus:bg-white transition-all duration-300 group-hover:border-purple-300"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handlePaste}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-10 w-10 p-0 hover:bg-purple-100 rounded-xl transition-all duration-200"
              title="Paste from clipboard"
            >
              <ClipboardPaste className="w-5 h-5 text-gray-500" />
            </Button>
          </div>
          {/* Quality Dropdown */}
          <div className="min-w-[140px]">
            <select
              value={selectedQuality}
              onChange={(e) => setSelectedQuality(e.target.value)}
              className="h-16 px-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 bg-gray-50 text-lg transition-all duration-300 w-full"
            >
              {qualityOptions.map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>
          <Button
            onClick={handleDownloadRequest}
            disabled={isLoading}
            className="h-16 px-10 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Download className="w-5 h-5 mr-3" />
                Get Video Info
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Video Info Display */}
      {videoInfo && (
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 animate-fade-in border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="relative group">
                <img
                  src={videoInfo.thumbnail}
                  alt={videoInfo.title}
                  className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white fill-white" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                {videoInfo.title}
              </h3>
              <div className="flex flex-wrap items-center gap-6 mb-4 text-gray-600">
                <span className="flex items-center gap-2 font-semibold">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                  {videoInfo.uploader}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {videoInfo.views} views
                </span>
                <span className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  {videoInfo.likes} likes
                </span>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {videoInfo.description}
                </p>
              </div>

              {/* Progress + Download */}
              {(showProgress || errorMessage || downloadReady) && (
                <div className="mb-6">
                  {showProgress && (
                    <div className="mb-2">
                      <div className="w-full max-w-lg h-4 bg-gray-200 rounded-full overflow-hidden mb-2">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                      <span className="text-gray-700 font-semibold">
                        {downloadText}
                      </span>
                    </div>
                  )}
                  {errorMessage && (
                    <div className="text-red-600 text-center font-semibold mb-2">
                      {errorMessage}
                    </div>
                  )}
                  {downloadReady && (
                    <Button
                      onClick={handleDownloadFile}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Save To Device
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
