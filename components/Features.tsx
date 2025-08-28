import { Zap, Shield, Globe, FileVideo, Download, Clock, Smartphone, Headphones } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Lightning Fast Downloads',
    description: 'Download videos in seconds with our optimized servers and CDN network',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: '1000+ Platforms Supported',
    description: 'YouTube, TikTok, Instagram, Facebook, Twitter, Vimeo and many more',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: <FileVideo className="w-8 h-8" />,
    title: 'Multiple Formats',
    description: 'Download in MP4, WebM, AVI, MP3, AAC, FLAC and other popular formats',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Secure & Private',
    description: 'No registration required. Your privacy is protected with SSL encryption',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Download className="w-8 h-8" />,
    title: 'Unlimited Downloads',
    description: 'No limits on downloads. Download as many videos as you want for free',
    color: 'from-red-500 to-rose-500'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: '24/7 Availability',
    description: 'Our service is available round the clock with 99.9% uptime guarantee',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile Friendly',
    description: 'Works perfectly on all devices - desktop, tablet, and mobile phones',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: 'Audio Extraction',
    description: 'Extract high-quality audio from videos in MP3, AAC, and other formats',
    color: 'from-pink-500 to-red-500'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              VideoFlow?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most advanced video downloading platform with cutting-edge features 
            designed for speed, security, and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join millions of users who trust VideoFlow for their video downloading needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐⭐⭐⭐⭐</span>
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span className="font-semibold">10M+ Happy Users</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📱</span>
              <span className="font-semibold">All Devices Supported</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}