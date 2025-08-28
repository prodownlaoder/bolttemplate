'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Is VideoFlow completely free to use?',
    answer: 'Yes, VideoFlow is 100% free to use. There are no hidden fees, subscriptions, or premium plans. You can download unlimited videos from any supported platform without any cost.'
  },
  {
    question: 'What video platforms and websites are supported?',
    answer: 'VideoFlow supports over 1000+ platforms including YouTube, TikTok, Instagram, Facebook, Twitter, Vimeo, Dailymotion, Twitch, Reddit, LinkedIn, Pinterest, SoundCloud, and many more. We continuously add support for new platforms.'
  },
  {
    question: 'What video and audio formats can I download?',
    answer: 'You can download videos in various formats including MP4, WebM, AVI, MOV, FLV, and more. For audio, we support MP3, AAC, FLAC, WAV, OGG, and other popular formats. Quality options range from 144p to 4K.'
  },
  {
    question: 'Are there any limits on downloads?',
    answer: 'No, there are absolutely no limits on the number of downloads. You can download as many videos as you want, whenever you want. Our servers are optimized to handle high traffic and provide fast downloads.'
  },
  {
    question: 'Do you store my downloaded videos or personal data?',
    answer: 'No, we do not store any videos on our servers. All downloads are processed in real-time and streamed directly to your device. We also don\'t collect or store any personal information. Your privacy is our top priority.'
  },
  {
    question: 'Can I download private or restricted videos?',
    answer: 'No, VideoFlow can only download publicly available videos. We cannot access private, restricted, or copyrighted content that requires special permissions. Please respect content creators\' rights and platform terms of service.'
  },
  {
    question: 'Does VideoFlow work on mobile devices?',
    answer: 'Yes, VideoFlow is fully responsive and works perfectly on all devices including smartphones, tablets, laptops, and desktop computers. No app installation required - just use your web browser.'
  },
  {
    question: 'How fast are the downloads?',
    answer: 'Download speeds depend on your internet connection and the video size. Our servers are optimized with CDN technology to provide the fastest possible download speeds. Most videos download within seconds.'
  },
  {
    question: 'Is it legal to download videos using VideoFlow?',
    answer: 'Downloading videos for personal use is generally legal, but you should always respect copyright laws and platform terms of service. Only download content you have permission to download or that is in the public domain.'
  },
  {
    question: 'What should I do if a download fails?',
    answer: 'If a download fails, try refreshing the page and attempting again. Make sure the video URL is correct and the video is publicly accessible. If problems persist, contact our support team for assistance.'
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about VideoFlow video downloader
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-indigo-600 py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Our support team is here to help you 24/7
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}