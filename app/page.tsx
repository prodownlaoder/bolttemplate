import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import PlatformSupport from '@/components/PlatformSupport';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
        
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Download Videos
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Instantly & Free
              </span>
            </h1>
            
        

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <span className="text-green-500 font-bold">✓</span>
                <span className="font-semibold text-gray-700">100% Free Forever</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <span className="text-green-500 font-bold">✓</span>
                <span className="font-semibold text-gray-700">No Registration</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <span className="text-green-500 font-bold">✓</span>
                <span className="font-semibold text-gray-700">Unlimited Downloads</span>
              </div>
            </div>
          </div>
          
          <SearchBox />

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-3xl font-black text-purple-600 mb-2">10M+</div>
              <div className="text-gray-600 font-semibold">Happy Users</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-3xl font-black text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600 font-semibold">Platforms Supported</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-3xl font-black text-indigo-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-semibold">Uptime</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-3xl font-black text-green-600 mb-2">24/7</div>
              <div className="text-gray-600 font-semibold">Support</div>
            </div>
          </div>
        </div>
      </section>

      <PlatformSupport />
      <Features />
      <HowItWorks />
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Downloading?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join millions of users who trust VideoFlow for fast, secure, and unlimited video downloads.
          </p>
          <a 
            href="#search" 
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Start Downloading Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-3 rounded-2xl">
                  <span className="text-2xl">🎥</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">VideoFlow</h3>
                  <p className="text-gray-400">Pro Video Downloader</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The world's most trusted video downloading platform. Download from 1000+ platforms 
                instantly and securely.
              </p>
              <div className="flex space-x-4">
                <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                <span className="text-gray-400">Rated 4.9/5 by users</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/mp3" className="hover:text-white transition-colors">MP3 Converter</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Popular Platforms</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">YouTube Downloader</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TikTok Downloader</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram Downloader</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook Downloader</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 VideoFlow. All rights reserved. Made with ❤️ for video enthusiasts worldwide.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}