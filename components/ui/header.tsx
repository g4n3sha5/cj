'use client';

import { dex, telegram, twitter } from '@/public/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import caption from '@/public/images/caption.png';
import Logo from '@/components/ui/logo';
import { List, ListIcon, Menu } from 'lucide-react';

const navItems = [
  { label: 'Telegram', url: telegram },
  { label: 'Twitter', url: twitter },
  // { label: 'PumpFun', url: pump },
  { label: 'Chart', url: dex },
];

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(0);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 150) {
        setScrolled(0);
      } else {
        setScrolled(1);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`${scrolled ? '' : ''}
        fixed  w-full z-40 flex bg-theme  lg:justify-center items-center h-navHeight md:h-navHeight  lg:overflow-hidden tracking-wider  md:bg-opacity-90 font-pricedow transition duration-300 ease-in-out    `}
    >
      <nav className="w-full lg:w-3/4 mx-auto h-full flex items-center justify-around">
        <Link className="shrink-0 h-3/4 mr-4  flex items-center gap-x-3 lg:gap-x-7 " href="/">
          <Logo />
          <Image src={caption} priority={true} width={0} height={0} className="h-1/2 lg:h-2/3 w-auto" alt="LFG" />
        </Link>

        <button
          type="button"
          className="lg:hidden"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShown(!shown)}
        >
          <Menu className="w-10 h-10 text-white" />
        </button>

        <div
          ref={navRef}
          className={`${
            shown ? 'block bg-theme' : 'hidden'
          } lg:block absolute top-[100px] lg:top-0 lg:relative z-50   flex-col md:flex-row md:flex md:items-center w-full md:w-auto`}
          id="navigation"
        >
          <ul className="pb-5 lg:pb-0 lg:max-w-6xl flex flex-col  justify-end md:flex-row md:items-center w-full md:w-auto text-xl ">
            {navItems.map((navItem) => {
              return (
                <a
                  className="text-white hover:text-green-600   text-3xl  font-wider gap-x-3 p-3 rounded-xl   flex items-center justify-center px-5  hover:no-underline transition-all cursor-pointer text-nowrap"
                  href={navItem.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {navItem.label}
                </a>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
