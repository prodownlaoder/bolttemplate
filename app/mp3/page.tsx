'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ClipboardPaste, Download, Loader2, Music, Headphones, Volume2, Clock } from 'lucide-react';

interface AudioInfo {
  thumbnail: string;
  title: string;
  uploader: string;
  platform: string;
  duration: string;
  downloadUrl: string;
}

export default function MP3Page() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [audioInfo, setAudioInfo] = useState<AudioInfo | null>(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      console.error('Failed to read clipboard:', err);
    }
  };

  const handleDownload = async () => {
    if (!url.trim()) return;
    
    setIsLoading(true);
    setAudioInfo(null);

    // Simulate API call
    setTimeout(() => {
      setAudioInfo({
        thumbnail: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=480&h=270',
        title: 'Amazing Song Title - Artist Name',
        uploader: 'Music Channel',
        platform: 'YouTube',
        duration: '3:45',
        downloadUrl: '#'
      });
      setIsLoading(false);
    }, 2000);
  };

  const features = [
    {
      icon: <Music className="w-6 h-6" />,
      title: 'High Quality MP3',
      description: 'Download audio in the highest quality available'
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'Multiple Formats',
      description: 'MP3, AAC, FLAC, and more audio formats'
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: 'Crystal Clear',
      description: 'Preserve original audio quality and clarity'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
              <Music className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Download Audio
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                in MP3
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Extract high-quality audio from any video. Perfect for music, podcasts, 
              and audio content from your favorite platforms.
            </p>
          </div>
          
          {/* Search Box */}
          <div className="w-full max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Input
                    type="text"
                    placeholder="Paste video URL to extract audio..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="h-12 pl-4 pr-12 text-base border-2 border-gray-200 focus:border-purple-500 rounded-xl"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={handlePaste}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-100"
                  >
                    <ClipboardPaste className="w-4 h-4" />
                  </Button>
                </div>
                <Button
                  onClick={handleDownload}
                  disabled={!url.trim() || isLoading}
                  className="h-12 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-xl transition-all duration-200"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Extracting...
                    </>
                  ) : (
                    <>
                      <Music className="w-4 h-4 mr-2" />
                      Extract MP3
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="bg-white rounded-2xl shadow-lg p-8 animate-pulse">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-48 h-32 bg-gray-300 rounded-xl"></div>
                  <div className="flex-1 space-y-4">
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-10 bg-gray-300 rounded w-32"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Audio Info Display */}
            {audioInfo && !isLoading && (
              <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-48 flex-shrink-0">
                    <img
                      src={audioInfo.thumbnail}
                      alt={audioInfo.title}
                      className="w-full h-32 object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {audioInfo.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">By:</span> {audioInfo.uploader}
                    </p>
                    <div className="flex items-center gap-4 text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <span className="font-medium">Platform:</span> {audioInfo.platform}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {audioInfo.duration}
                      </span>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Download MP3
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1"
              >
                <div className="text-purple-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">VideoFlow</h3>
            <p className="text-gray-400">
              High-quality audio extraction made simple
            </p>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400">
              © 2025 VideoFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}