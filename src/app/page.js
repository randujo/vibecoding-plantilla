import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import PageCtaStrip from "@/components/PageCtaStrip";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <ContactForm />
        <PageCtaStrip />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
