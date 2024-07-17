'use client';

import art from '@/public/images/about.webp';
import Image from 'next/image';
import heroimg from '@/public/images/hero2.webp';

export default function About() {
  return (
    <section className=" bg-theme relative min-h-screen overflow-hidden  font-pricedow">
      {/* Hero content */}
      <div className="pt-24 pb-44 md:pt-32 md:pb-20 flex flex-col items-center  h-full gap-y-3   px-5 lg:px-2 ">
        <div className="flex flex-col z-30 w-full items-center justify-start">
          <div
            className="flex gap-x-20 items-start justify-around flex-col lg:flex-row gap-y-10 bg-[rgba(255,255,255,0.90)] bbg-[#e2e2e2] border-2 border-neutral-300 shadow-xl shadow-neutral-400 rounded-lg
           w-full xl:w-4/5 p-10 "
          >
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="relative   flex basis-full lg:basis-2/5 justify-center rounded-xl mt-10 shadow-xl shadow-green-600"
            >
              <Image src={art} width={0} height={0} className="w-full h-auto   bottom-0" alt="LFG" />
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className="basis-full lg:basis-1/2 text-2xl ">
              <h1 className="text-4xl font-semibold  tracking-wider font-diploma">Family over everything!</h1>

              <p className=" text-4xl font-normal  text-green-900 leading-12">
                Meet CJ, the ultimate Grove Street OG!
                <br /> When he's not dodging cops or dealing with family drama, he's busy running the streets of San
                Andreas with style. Armed with a BMX bike, a killer sense of humor, and an endless supply of green
                hoodies, CJ's here to prove that you can take the man out of the hood, but you can't take the hood out
                of the man. Join him on his wild ride, because in CJ's world, there's never a dull moment!
              </p>
            </div>
          </div>
        </div>

        <Image
          src={heroimg}
          width={0}
          height={0}
          className="mt-[6.5rem] absolute inset-0  z-20 bottom-0 w-full h-full object-cover object-right-top"
          alt="LFG"
        />
      </div>
    </section>
  );
}
