'use client';

import heroimg from '@/public/images/menu.webp';
import cross from '@/public/images/cross.png';
import Image from 'next/image';
import useSound from 'use-sound';
import buttonHoverSound from '@/public/sound.mp3';
import { Toast } from '@radix-ui/react-toast';
import { useState } from 'react';

const menuItems = [
  { label: 'start', link: '/' },
  { label: 'telegram', link: '/about' },
  { label: 'twitter', link: '/contact' },
  { label: 'chart', link: '/contact' },
];

export const StartMenu = () => {
  const soundUrl = buttonHoverSound;
  const [play] = useSound(soundUrl);
  const [clicked, setClicked] = useState(false);

  return (
    <section className=" bg-white relative pb-[30vh] xl:pb-[30px] min-h-screen overflow-hidden xl:h-screen flex pt-0 font-bankgothic">
      {/* Hero content */}
      <div className="flex flex-wrap w-full pb-44 md:pb-20  items-center h-full gap-y-3  xl:justify-between px-5 lg:px-20 justify-center ">
        <div className="basis-full  py-10 z-30 flex flex-col items-center  text-4xl uppercase font-normal text-[#b5c0d5] tracking-[6px]  ">
          {menuItems.map((item) => (
            <button
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => play()}
              className="flex group relative w-92 uppercase scale-y-95"
            >
              <Image
                src={cross}
                alt="cross"
                className=" w-20 h-auto group-hover:block hidden absolute -left-20 "
                width={0}
                height={0}
              />
              {item.label}
            </button>
          ))}
        </div>`react-app-env.
        <Image
          src={heroimg}
          width={0}
          height={0}
          className="absolute inset-0  z-20 bottom-0 w-full h-full object-fill"
          alt="Background"
        />

        <div
          onClick={() => setClicked(true)}
          className={`${
            clicked ? '' : 'lg:flex'
          } absolute inset-0 bg-[rgba(0,0,0,0.8)] z-30 text-center items-center justify-center  hidden  `}
        >
          <div className="text-white text-5xl relative font-cuprum">Click anywhere for sound </div>
        </div>
      </div>
    </section>
  );
};
