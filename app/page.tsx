import Hero from "@/components/Hero";
import Booking from "@/components/Booking";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />

      <Booking />

      <Reviews />

      <Gallery />

      <Footer />
    </main>
  );
}