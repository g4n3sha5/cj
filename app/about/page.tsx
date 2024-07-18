import DefaultLayout from '@/app/(default)/layout';
import About from '@/components/about';
import Hero from '@/components/hero';
import Memes from '@/components/memes';
import { StartMenu } from '@/components/startmenu';
import Tokenomics from '@/components/tokenomics';
import Header from '@/components/ui/header';

export default function Start() {
  return (
    <DefaultLayout>
      <Header />
      <Hero />
      <About />
      {/* <Tokenomics /> */}
      <Memes />
    </DefaultLayout>
  );
}
