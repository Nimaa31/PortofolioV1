import {
  Header,
  Hero,
  About,
  Services,
  Skills,
  Experience,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
