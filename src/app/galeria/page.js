import GalleryPage from "@/components/GalleryPage";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { siteConfig } from "@/config/site";

/** Evita que la galería quede «congelada» con listas viejas tras cambiar `site.js` (hosting / caché). */
export const dynamic = "force-dynamic";

export const metadata = {
  title: siteConfig.gallery.metadata.title,
  description: siteConfig.gallery.metadata.description,
};

export default function GaleriaRoute() {
  return (
    <>
      <GalleryPage />
      <FloatingWhatsApp />
    </>
  );
}
