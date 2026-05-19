import PreguntasFrecuentesPage from "@/components/PreguntasFrecuentesPage";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: siteConfig.preguntasFrecuentesPage.metadata.title,
  description: siteConfig.preguntasFrecuentesPage.metadata.description,
};

export default function PreguntasFrecuentesRoute() {
  return (
    <>
      <PreguntasFrecuentesPage />
      <FloatingWhatsApp />
    </>
  );
}
