import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VideoFlow - Download Videos Instantly',
  description: 'The fastest and easiest way to download videos from 1000+ platforms. Just paste a link and get your video in seconds.',
  keywords: 'video download, youtube download, mp3 download, video converter',
  openGraph: {
    title: 'VideoFlow - Download Videos Instantly',
    description: 'The fastest and easiest way to download videos from 1000+ platforms.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}