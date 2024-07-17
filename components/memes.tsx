'use client';

import heroimg from '@/public/images/hero.webp';
// import caption from '@/public/images/memes-caption.png';
import meme3 from '@/public/images/meme3.webp';
import meme4 from '@/public/images/meme4.webp';
import meme5 from '@/public/images/meme5.webp';
import meme6 from '@/public/images/meme6.webp';
import meme7 from '@/public/images/meme7.webp';
import meme8 from '@/public/images/meme8.webp';
import meme9 from '@/public/images/meme9.webp';
// import meme10 from '@/public/images/meme10.webp';
// import meme11 from '@/public/images/meme11.webp';
// import meme12 from '@/public/images/meme12.webp';
import Image from 'next/image';

const memes = [meme3, meme4, meme5, meme6, meme7, meme8, meme9];

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

          <div className="w-full flex justify-center gap-x-5 flex-wrap">
            {memes.map((meme) => (
              <div
                data-aos="flip-left"
                data-aos-duration="1500"
                className="relative z-30 flex basis-3/4 lg:basis-1/4 items-center justify-center pt-32 lg:pt-10 px-7 lg:px-4 lg:pb-4 pb-10 overflow-hidden"
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
          className="mt-[6.5rem] absolute inset-0  z-20 bottom-0 w-full h-full object-cover object-left-bottom"
          alt="LFG"
        />
      </div>
    </section>
  );
}
