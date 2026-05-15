"use client";

import { useEffect, useState } from "react";
import { gallerySubgroupAnchorId } from "@/components/galleryAnchors";

/**
 * Lista de secciones de la galería + lightbox al hacer clic en cada miniatura.
 */
export default function GallerySectionsWithLightbox({ sections, emptyMessage }) {
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    if (zoom) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [zoom]);

  useEffect(() => {
    if (!zoom) return undefined;
    const onEscape = (e) => {
      if (e.key === "Escape") setZoom(null);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [zoom]);

  return (
    <>
      {sections.map((section) => {
        const groups =
          Array.isArray(section.imageGroups) && section.imageGroups.length > 0
            ? section.imageGroups.filter((g) => g.images?.length > 0)
            : null;
        const flatImages = section.images ?? [];
        const hasImages = groups?.length
          ? groups.length > 0
          : flatImages.length > 0;

        const renderImageGrid = (images, keyPrefix) => (
          <ul className="mt-6 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <li key={`${section.id}-${keyPrefix}-${image.src}`}>
                <button
                  type="button"
                  onClick={() => setZoom({ src: image.src, alt: image.alt })}
                  className="group w-full overflow-hidden rounded-2xl border border-[#dbe4ef] bg-white text-left shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2"
                  aria-label={`Ver imagen grande: ${image.alt}`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[color:var(--color-surface)]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                </button>
              </li>
            ))}
          </ul>
        );

        return (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 border-b border-[#dbe4ef]/80 px-6 py-14 md:scroll-mt-32 md:py-16 lg:scroll-mt-36"
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="gallery-section-title text-3xl md:text-4xl">
                {section.title}
              </h2>
              {section.description ? (
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-[color:var(--color-text-muted)] md:text-lg">
                  {section.description}
                </p>
              ) : null}

              {!hasImages ? (
                <p className="mt-8 rounded-2xl border border-dashed border-[#c5d9ed] bg-[#f8fafc] px-6 py-10 text-center text-[color:var(--color-text-muted)]">
                  {emptyMessage}
                </p>
              ) : groups ? (
                <div className="mt-10 space-y-14">
                  {groups.map((group) => (
                    <div
                      key={`${section.id}-${group.title}`}
                      id={gallerySubgroupAnchorId(section.id, group.title)}
                      className="scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-36"
                    >
                      <h3 className="text-xl md:text-2xl">
                        <span className="gallery-group-title border-b-2 border-[#bfdbfe]/90 pb-1">
                          {group.title}
                        </span>
                      </h3>
                      {renderImageGrid(group.images, group.title)}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-10">{renderImageGrid(flatImages, "flat")}</div>
              )}
            </div>
          </section>
        );
      })}

      {zoom ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={zoom.alt || "Imagen ampliada"}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
          onClick={() => setZoom(null)}
        >
          <div
            role="presentation"
            className="flex max-h-full w-full max-w-[min(100vw-2rem,1200px)] flex-col items-stretch gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 justify-end">
              <button
                type="button"
                onClick={() => setZoom(null)}
                className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[color:var(--color-text)] shadow-lg transition hover:bg-[#eef4fb] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Cerrar"
              >
                Cerrar
              </button>
            </div>
            <img
              src={zoom.src}
              alt={zoom.alt}
              className="max-h-[min(82vh,calc(100vh-9rem))] w-full rounded-xl object-contain object-center shadow-2xl"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
