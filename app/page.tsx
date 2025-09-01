import HeroSection from "./components/home/hero";
import TrustBar from "./components/home/trustbar";
import ServicesSnapshot from "./components/home/servicessnapshot";
import ResultsHighlight from "./components/home/resulthighlight";
import Testimonial from "./components/home/testimonial";
import FinalCTA from "./components/common/cta";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <ServicesSnapshot />
      <ResultsHighlight />
      <Testimonial />
      <FinalCTA />
    </div>
  );
}
