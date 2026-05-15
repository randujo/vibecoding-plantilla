import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CatalogSection from "@/components/CatalogSection";
import PageCtaStrip from "@/components/PageCtaStrip";

export default function CatalogosPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-[color:var(--color-bg)] pt-8">
        <CatalogSection />
        <PageCtaStrip />
      </main>
      <Footer />
    </>
  );
}
