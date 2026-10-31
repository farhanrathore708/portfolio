import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BackgroundFX from "@/components/BackgroundFX";
import Work from "@/components/Work";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <BackgroundFX />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Work />
        <About />
        <Footer />
      </main>
    </div>
  );
}
