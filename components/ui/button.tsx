import Btn from '@/public/images/button.png';
import Image from 'next/image';

interface Props {
  href: string;
  text: string;
  img: any;
  className: string;
}

export const Button = ({ href, text, img, className }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`relative h-28 z-20 hover:scale-105 ${className}`}>
      <Image className="w-auto h-full" alt="Button" src={Btn} width={0} height={0} />
      <div className="absolute text-white inset-0 gap-x-2 w-full flex items-end justify-center text-xl  pb-8">
        <Image className="h-2/3 w-auto bg-white rounded-lg" src={img} alt="Logo" height={0} width={0} />
      </div>
    </a>
  );
};
