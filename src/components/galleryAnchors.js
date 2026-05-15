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
