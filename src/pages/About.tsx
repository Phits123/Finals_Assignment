import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BioContent from "../components/BioContent";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <Header title="About Me" subtitle="Know more about me" />
      <BioContent />
      <Footer />
    </>
  );
}