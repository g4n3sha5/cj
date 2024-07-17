import Link from 'next/link';
import logoimg from '@/public/images/logo.png';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/">
      <div className="overflow-hidden rounded-full flex items-center justify-center">
        <Image className="h-20 w-20 lg:w-20 lg:h-20" width="65" src={logoimg} alt="Logo" />
      </div>
    </Link>
  );
}
