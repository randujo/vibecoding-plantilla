import CatalogosPage from "@/components/CatalogosPage";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: siteConfig.catalog.metadata.title,
  description: siteConfig.catalog.metadata.description,
};

export default function CatalogosRoute() {
  return (
    <>
      <CatalogosPage />
      <FloatingWhatsApp />
    </>
  );
}
