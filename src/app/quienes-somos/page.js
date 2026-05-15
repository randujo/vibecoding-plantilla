import QuienesSomosPage from "@/components/QuienesSomosPage";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: siteConfig.quienesSomosPage.metadata.title,
  description: siteConfig.quienesSomosPage.metadata.description,
};

export default function QuienesSomosRoute() {
  return <QuienesSomosPage />;
}
