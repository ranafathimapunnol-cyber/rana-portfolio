import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import About from "@/components/about/About";
import Stack from "@/components/stack/Stack";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Education from "@/components/education/Education";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Education />

      <About />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}