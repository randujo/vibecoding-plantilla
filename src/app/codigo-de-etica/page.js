import EthicsCodePage from "@/components/EthicsCodePage";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: siteConfig.ethicsCode.metadata.title,
  description: siteConfig.ethicsCode.metadata.description,
};

export default function CodigoEticaPage() {
  return <EthicsCodePage />;
}
