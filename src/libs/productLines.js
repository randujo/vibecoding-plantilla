import { siteConfig } from "@/config/site";

function findGallerySection(sectionId) {
  return siteConfig.gallery.sections.find((section) => section.id === sectionId);
}

function dedupeImages(images, seenSrc) {
  return images.filter((image) => {
    if (seenSrc.has(image.src)) return false;
    seenSrc.add(image.src);
    return true;
  });
}

/**
 * Resuelve las imágenes de una línea de producto leyendo picks desde gallery.sections.
 * @returns {{ line: object, imageGroups: { title: string, images: { src: string, alt: string }[] }[] } | null}
 */
export function resolveProductLine(lineId) {
  const line = siteConfig.productLines.lines.find((entry) => entry.id === lineId);
  if (!line) return null;

  const seenSrc = new Set();
  const imageGroups = [];

  for (const pick of line.picks) {
    const section = findGallerySection(pick.sectionId);
    if (!section) continue;

    let images = [];
    let title = pick.displayTitle;

    if (pick.groupTitle && Array.isArray(section.imageGroups)) {
      const group = section.imageGroups.find((entry) => entry.title === pick.groupTitle);
      if (!group?.images?.length) continue;
      images = group.images;
      title = title ?? group.title;
    } else if (Array.isArray(pick.imageSrcs) && Array.isArray(section.images)) {
      images = section.images.filter((image) => pick.imageSrcs.includes(image.src));
      title = title ?? "Galería";
    } else if (Array.isArray(section.images) && section.images.length > 0) {
      images = section.images;
      title = title ?? section.navLabel ?? section.title;
    }

    images = dedupeImages(images, seenSrc);
    if (images.length > 0) {
      imageGroups.push({ title, images });
    }
  }

  return { line, imageGroups };
}

export function getAllProductLineIds() {
  return siteConfig.productLines.lines.map((line) => line.id);
}

export function getProductLineById(lineId) {
  return siteConfig.productLines.lines.find((line) => line.id === lineId) ?? null;
}
