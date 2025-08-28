'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 via-purple-600 to-blue-600 p-3 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Play className="w-7 h-7 text-white fill-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse">
                <Sparkles className="w-3 h-3 text-white p-0.5" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent">
                VideoFlow
              </span>
              <span className="text-xs text-gray-500 font-medium -mt-1">Pro Downloader</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 font-semibold"
            >
              Home
            </Link>
            <Link
              href="/mp3"
              className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 font-semibold"
            >
              MP3 Converter
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 font-semibold"
            >
              Contact
            </Link>
            <Button className="ml-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-xl"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-2xl shadow-lg">
              <Link
                href="/"
                className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/mp3"
                className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                MP3 Converter
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl font-semibold">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}