import { Copy, Search, Download, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Copy className="w-8 h-8" />,
    title: 'Copy Video URL',
    description: 'Copy the link of any video from YouTube, TikTok, Instagram, or 1000+ other platforms',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Paste & Analyze',
    description: 'Paste the URL in our search box and let our AI analyze the video content',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Download className="w-8 h-8" />,
    title: 'Choose Format',
    description: 'Select your preferred format (MP4, MP3, WebM) and quality settings',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Download Instantly',
    description: 'Get your video downloaded instantly with our high-speed servers',
    color: 'from-orange-500 to-red-500'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download any video in just 4 simple steps. Our advanced technology makes 
            video downloading faster and easier than ever before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100">
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400"></div>
                  <div className="absolute -right-1 -top-1 w-3 h-3 bg-gray-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🚀 Pro Tip: Bookmark VideoFlow
            </h3>
            <p className="text-gray-600 text-lg">
              Add VideoFlow to your bookmarks for instant access whenever you need to download videos. 
              Works on all browsers and devices!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}