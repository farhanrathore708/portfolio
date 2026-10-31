import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BackgroundFX from "@/components/BackgroundFX";
import Work from "@/components/Work";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  // Compute in the Server Component — `new Date()` is flagged by
  // cacheComponents when read directly inside a Client Component.
  const year = new Date().getFullYear();

  return (
    <div className="relative overflow-x-clip">
      <BackgroundFX />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Work />
        <About />
        <Footer year={year} />
      </main>
    </div>
  );
}
