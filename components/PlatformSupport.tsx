import Image from 'next/image';

const platforms = [
  { name: 'YouTube', logo: '🎥', color: 'from-red-500 to-red-600', users: '2B+' },
  { name: 'TikTok', logo: '🎵', color: 'from-black to-gray-800', users: '1B+' },
  { name: 'Instagram', logo: '📸', color: 'from-pink-500 to-purple-600', users: '2B+' },
  { name: 'Facebook', logo: '👥', color: 'from-blue-600 to-blue-700', users: '3B+' },
  { name: 'Twitter', logo: '🐦', color: 'from-blue-400 to-blue-500', users: '450M+' },
  { name: 'Vimeo', logo: '🎬', color: 'from-blue-500 to-indigo-600', users: '200M+' },
  { name: 'Dailymotion', logo: '📺', color: 'from-blue-600 to-blue-800', users: '300M+' },
  { name: 'Twitch', logo: '🎮', color: 'from-purple-600 to-purple-700', users: '140M+' },
];

export default function PlatformSupport() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Download from
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              1000+ Platforms
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            VideoFlow supports all major video platforms and social media sites. 
            Download videos, audio, and content from anywhere on the internet.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {platform.logo}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {platform.name}
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                {platform.users} users
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              And 1000+ More Platforms
            </h3>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
              <span className="bg-gray-100 px-4 py-2 rounded-full">Reddit</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">LinkedIn</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Pinterest</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Snapchat</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">WeChat</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Telegram</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Discord</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Tumblr</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">SoundCloud</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Spotify</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">And Many More...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}