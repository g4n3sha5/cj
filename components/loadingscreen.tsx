'use client';

import loading1 from '@/public/images/loading1.png';
import loading2 from '@/public/images/loading2.png';
import loading3 from '@/public/images/loading3.png';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const LoadingScreen = () => {
  const loadingScreens = [loading1, loading2, loading3];
  const [randomScreenNumber, setRandomScreenNumber] = useState(1);
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    setRandomScreenNumber(Math.floor(Math.random() * 3));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(progress + 1), 85);
    return () => clearTimeout(timer);
  }, [progress]);

  if (progress === 100) {
    return redirect('/about');
  }
  return (
    <section className=" bg-white z-50 absolute inset-0  pb-[30vh] xl:pb-[30px] min-h-screen overflow-hidden xl:h-screen flex pt-0 font-bankgothic ">
      {/* Hero content */}

      <div className="flex flex-wrap w-full pb-44 md:pb-20  items-center h-full gap-y-3  xl:justify-between px-5 lg:px-20 justify-center ">
        <Image
          src={loadingScreens[randomScreenNumber]}
          width={0}
          height={0}
          className="absolute inset-0  z-20  w-full h-full  object-cover lg:object-fill"
          alt="Background"
        />
        <Progress value={progress} className="lg:w-96 z-30 absolute lg:left-48 lg:bottom-16 bottom-1/2 w-2/3" />
      </div>
    </section>
  );
};
