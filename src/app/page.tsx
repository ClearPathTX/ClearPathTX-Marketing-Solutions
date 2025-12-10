import {
  Navbar,
  Hero,
  Partners,
  Services,
  WhyChooseUs,
  Testimonials,
  Process,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e14]">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
