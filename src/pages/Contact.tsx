import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Header title="Contact Me" subtitle="Get in touch with me" />
      <ContactForm />
      <Footer />
    </>
  );
}