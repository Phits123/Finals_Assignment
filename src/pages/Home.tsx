import Navbar from "../components/Navbar";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header title="Home" subtitle="Welcome to my personal website" />
      <HeroSection />
      <Footer />
    </>
  );
}