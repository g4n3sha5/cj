import DefaultLayout from "@/app/(default)/layout";
import About from "@/components/about";
import Hero from "@/components/hero";
import { StartMenu } from "@/components/startmenu";
import Tokenomics from "@/components/tokenomics";



export default function Start() {
  return (
    <DefaultLayout>
      <Hero />
      <About />
       <Tokenomics />
      {/* <Memes />  */}
    </DefaultLayout>
  );
}
