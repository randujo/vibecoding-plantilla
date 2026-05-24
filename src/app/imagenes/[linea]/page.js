import ProductLinePage from "@/components/ProductLinePage";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { siteConfig } from "@/config/site";
import { getAllProductLineIds, resolveProductLine } from "@/libs/productLines";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return getAllProductLineIds().map((linea) => ({ linea }));
}

export async function generateMetadata({ params }) {
  const { linea } = await params;
  const resolved = resolveProductLine(linea);

  if (!resolved) {
    return { title: siteConfig.productLines.metadata.titleSuffix };
  }

  return {
    title: `${resolved.line.name} | ${siteConfig.productLines.metadata.titleSuffix}`,
    description: resolved.line.description,
  };
}

export default async function ImagenesLineaRoute({ params }) {
  const { linea } = await params;
  const resolved = resolveProductLine(linea);

  if (!resolved) notFound();

  return (
    <>
      <ProductLinePage line={resolved.line} imageGroups={resolved.imageGroups} />
      <FloatingWhatsApp />
    </>
  );
}
