import './css/style.css';

import { Inter } from 'next/font/google';

import Header from '@/components/ui/header';
import Banner from '@/components/banner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Carl Johnsun - $CJ - Stay true to the Grove',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Vampiro+One&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gravitas+One&family=Wellfleet&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Mouse+Memoirs&display=swap" rel="stylesheet"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Wendy+One&display=swap" rel="stylesheet" />\
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,200;0,300;0,400;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Cuprum:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        ></link>
      </head>

      <body className={`${inter.variable} font-diploma antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
