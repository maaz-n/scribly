import FAQ from "@/components/homepage/faq";
import Features from "@/components/homepage/features";
import Hero from "@/components/homepage/hero";
import HowItWorks from "@/components/homepage/how-it-works";

export default async function Home() {
  return (
    <>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <FAQ/>
    </>
  );
}
