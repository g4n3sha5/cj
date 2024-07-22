'use client';

import heroimg from '@/public/images/hero.webp';
// import caption from '@/public/images/memes-caption.png';
import meme1 from '@/public/images/meme1.webp';
import meme2 from '@/public/images/meme2.webp';
import meme3 from '@/public/images/meme3.webp';
import meme4 from '@/public/images/meme4.webp';
import meme5 from '@/public/images/meme5.webp';
import meme6 from '@/public/images/meme6.webp';
import meme7 from '@/public/images/meme7.webp';
import meme8 from '@/public/images/about.webp';

import Image from 'next/image';

const memes = [meme1, meme2, meme3, meme5, meme4, meme6, meme7, meme8];

export default function Memes() {
  return (
    <section className=" bg-theme relative min-h-screen overflow-hidden ">
      <div className="pt-24 pb-44 md:pt-32 md:pb-20 flex flex-col items-center h-full gap-y-3  lg:px-2 ">
        <div className="flex flex-col items-center justify-start 2xl:px-26">
          {/* <Image
            data-aos="flip-left"
            data-aos-duration="1000"
            src={caption}
            width={0}
            height={0}
            className="caption"
            alt="LFG"
          /> */}

          <div className="w-full flex justify-center gap-x-5 flex-wrap pt-12 ">
            {memes.map((meme) => (
              <div
                data-aos="flip-left"
                data-aos-duration="1500"
                className="relative z-30 flex basis-4/5 lg:basis-1/5 items-center justify-center lg:pt-10 lg:px-4 lg:pb-4 pb-10 overflow-hidden"
              >
                <Image src={meme} width={0} height={0} className="w-full h-full inset-0 object-fit " alt="Meme" />
              </div>
            ))}
          </div>
        </div>
        {/* <Image src={logo2} width={0} height={0} className="w-2/5 lg:w-40 h-auto z-30 mb-8 " alt="LFG" /> */}

        <Image
          src={heroimg}
          width={0}
          height={0}
          className=" absolute inset-0  z-20 bottom-0 w-full h-full object-cover object-left-bottom"
          alt="LFG"
        />
      </div>
    </section>
  );
}
