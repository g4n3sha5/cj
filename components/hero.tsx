'use client';

import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { buttons } from '@/public/constants';
import heroimg from '@/public/images/hero.webp';
import content from '@/public/images/logo.png';
import Image from 'next/image';

export default function Hero() {
  const { toast } = useToast();

  return (
    <section className=" bg-white relative pb-[30vh] xl:pb-[30px] min-h-screen overflow-hidden xl:h-screen flex pt-32 lg:pt-10">
      {/* Hero content */}
      <div className="flex flex-wrap w-full pb-44 md:pb-20  items-center h-full gap-y-3  xl:justify-between px-5 lg:px-20 justify-center ">
        <div className="basis-full xl:basis-1/2 py-10 z-30 flex flex-col items-center ">
          <div className="bg-theme w-full xl:px-16 py-10 pb-14 text-center lg:text-left my-6  text-white  self-start">
            <h2 className=" text-4xl font-semibold tracking-tight">Oh shit, here we go again</h2>

            {/* <h2 className="text-white text-3xl tracking-tight">Let's cook!</h2> */}

            <button className="bg-themeSecondary text-black p-3 rounded-lg font-light hover:scale-105 text-3xl px-6 mt-4">
              Chart
            </button>
          </div>
          <div className="flex mt-10">
            {buttons.map(({ url, img, text }) => (
              <Button className="w-46" href={url} text={text} img={img} />
            ))}
          </div>
        </div>

        <div className="xl:basis-1/2 z-30 flex justify-center  ">
          <Image src={content} width={0} height={0} className="xl:w-1/2  -mt-5 lg:-mt-14  " alt="Romi portrait" />
        </div>

        <Image
          src={heroimg}
          width={0}
          height={0}
          className="absolute inset-0  z-20 bottom-0 w-full h-full object-fill"
          alt="Background"
        />
      </div>
      <Toaster />
    </section>
  );
}
