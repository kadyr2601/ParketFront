import MainBanner from "@/components/MainBanner";
import Services from "@/components/Services";
import Counter from "@/components/Counter";
import AboutUs from "@/components/AboutUs";
import Gallery from "@/components/Gallery";
import VideoBanner from "@/components/VideoBanner";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <div>
      <MainBanner/>
      <Services/>
      <Counter/>
      <AboutUs/>
      <Gallery/>
      <VideoBanner/>
      <Partners/>
    </div>
  );
}
