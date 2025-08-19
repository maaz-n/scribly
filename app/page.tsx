import FAQ from "@/components/homepage/faq";
import Features from "@/components/homepage/features";
import Footer from "@/components/footer";
import Hero from "@/components/homepage/hero";
import HowItWorks from "@/components/homepage/how-it-works";
import Navbar from "@/components/navbar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  return (
    <>
      <Navbar isAuthenticated={!!session}/>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <FAQ/>
      <Footer/>
    </>
  );
}
