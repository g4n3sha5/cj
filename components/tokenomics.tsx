'use client';

import { Toaster } from '@/components/ui/toaster';
import { buttons } from '@/public/constants';
import heroimg from '@/public/images/hero3.webp';
import long from '@/public/images/long.png';
import Image from 'next/image';

export default function Tokenomics() {
  return (
    <section className=" bg-theme relative h-screen overflow-hidden ">
      <div className="  pt-24 pb-44 md:pt-32 md:pb-20 flex flex-col items-center h-screen gap-y-3   px-5 lg:px-2  ">
        <div></div>
        <Image
          src={heroimg}
          width={0}
          height={0}
          className=" absolute inset-0  z-20 bottom-0 w-full h-full object-cover object-left"
          alt="LFG"
        />
        <footer className="flex justify-center py-4  z-30 bottom-20 absolute ">
          <div className="flex md:items-center md:justify-between py-4 justify-center px-20 gap-x-8 rounded-xl">
            {buttons.map((navItem) => {
              return (
                <a
                  className="font-medium hover:underline  bg-themeSecondary flex gap-x-3 p-1 rounded-lg hover:bg-themeThird transition-all uppercase"
                  href={navItem.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={navItem.img} height="35" width="35" alt={navItem.text} />
                </a>
              );
            })}
          </div>
        </footer>
        {/* </div> */}
      </div>
      <Toaster />
    </section>
  );
}
