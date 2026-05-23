import Hero from "@/components/Hero";
import Booking from "@/components/Booking";
import Reviews from "@/components/Reviews";
import Socials from "@/components/Socials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Hero />

      <Booking />

      <Reviews />

      <Socials />

      <Gallery />

      <Footer />

    </main>
  );
}