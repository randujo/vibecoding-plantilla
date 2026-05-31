/**
 * ID estable para anclas de subgrupo en /galeria (Header + página deben usar la misma función).
 */
export function gallerySubgroupAnchorId(sectionId, groupTitle) {
  const slug = String(groupTitle)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${sectionId}--${slug}`;
}

/** Subgrupos visibles en menú y salto rápido de la galería (respeta `galleryNavSubgroups` si existe). */
export function galleryNavGroups(section) {
  const groupsRaw = Array.isArray(section.imageGroups)
    ? section.imageGroups.filter((g) => g.images?.length > 0)
    : [];

  if (Array.isArray(section.galleryNavSubgroups) && section.galleryNavSubgroups.length > 0) {
    return section.galleryNavSubgroups
      .map((title) => groupsRaw.find((g) => g.title === title))
      .filter(Boolean);
  }

  return groupsRaw;
}
