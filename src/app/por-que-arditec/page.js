import PorQueArditecPage from "@/components/PorQueArditecPage";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: siteConfig.porQueArditecPage.metadata.title,
  description: siteConfig.porQueArditecPage.metadata.description,
};

export default function PorQueArditecRoute() {
  return <PorQueArditecPage />;
}
