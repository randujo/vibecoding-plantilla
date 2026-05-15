import PrivacyNoticePage from "@/components/PrivacyNoticePage";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: siteConfig.privacyNotice.metadata.title,
  description: siteConfig.privacyNotice.metadata.description,
};

export default function AvisoPrivacidadPage() {
  return <PrivacyNoticePage />;
}
