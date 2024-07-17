'use client';

import Image from 'next/image';
import illustration from '@/public/images/illustration1.png';
// import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function FeaturesBlocks() {
  return (
    <section className="relative text-center p-5 text-black font-rajdhani h-[110vh]  bg-themeThird pt-20 flex justify-center flex-col items-center gap-y-10">
      <div className="w-[80%] z-20  py-5 bg-themeSecondary  text-cyan-400 tracking-tighter rounded-lg">
        <h1 className="text-3xl">
          CA:&nbsp;&nbsp;
          <button
            onClick={() => {
              navigator.clipboard.writeText('8wpeqnTNsqSCxfSsXp7a7o7oQePqs9MgEff915gAmNUR');
              alert('Copied!');
            }}
            className="cursor-copy text-cyan-100"
          >
            8wpeqnTNsqSCxfSsXp7a7o7oQePqs9MgEff915gAmNUR
          </button>
          {/* </CopyToClipboard> */}
        </h1>
        <h1 className="text-6xl textShadow">Tokenomics</h1>
        <h2 className="text-4xl">1 Billion Supply 0% tax</h2>
      </div>

      <div className="h-72 w-auto margin-top-[20%]">
        <Image
          src={illustration}
          priority={true}
          width={0}
          height={0}
          className="w-full h-full blur-[1px] object-fill"
          alt="LFG"
        />
      </div>
    </section>
  );
}
