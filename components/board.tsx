'use client';
import Image, { StaticImageData } from 'next/image';
import board from '@/public/images/grass.webp';
import { useState } from 'react';

interface Props {}

export const Board = ({}: Props) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-screen h-screen ">
      <Image alt="board" width={0} height={0} className="w-full h-full z-30" src={board} />
    </div>
  );
};
