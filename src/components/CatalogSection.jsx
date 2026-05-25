"use client";

import { useEffect, useState } from "react";
import { catalogAnchorId } from "@/components/catalogAnchors";
import { siteConfig } from "@/config/site";

const catalogScrollMt = "scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-36";

function CatalogCard({ item, labelPrefix, onZoom }) {
  const label = labelPrefix ? `${labelPrefix}: ${item.title}` : `Catálogo: ${item.title}`;
  const hasPdf = Boolean(item.pdf);
  const hasImage = Boolean(item.image);
  const showPdfPlaceholder = hasPdf && !hasImage;

  return (
    <article className="overflow-hidden rounded-2xl border border-[color:var(--color-surface-strong)] bg-white shadow-sm transition hover:shadow-md">
      <button
        type="button"
        onClick={() =>
          onZoom(hasPdf ? { pdf: item.pdf, alt: label } : { src: item.image, alt: label })
        }
        className="group block w-full overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2"
        aria-label={hasPdf ? `Ver catálogo PDF: ${item.title}` : `Ver imagen grande: ${item.title}`}
      >
        {showPdfPlaceholder ? (
          <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#eef4fb] to-[#dbe4ef] px-6 transition duration-300 group-hover:from-[#e0ecf8] group-hover:to-[#cfd9e8]">
            <span
              aria-hidden
              className="flex size-16 items-center justify-center rounded-2xl bg-[#1f5fae] text-sm font-black uppercase tracking-wider text-white shadow-lg"
            >
              PDF
            </span>
            <span className="text-center text-sm font-semibold text-[#1f5fae]">Ver catálogo</span>
          </div>
        ) : (
          <img
            src={item.image}
            alt={label}
            className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        )}
      </button>
      <div className="px-5 py-4">
        <h3 className="text-lg font-semibold text-[color:var(--color-text)] md:text-xl">{item.title}</h3>
      </div>
    </article>
  );
}

export default function CatalogSection() {
  const { badge, heading, thumbnailHint, items, groups = [] } = siteConfig.catalog;
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
      <section id="catalogos" className="bg-[color:var(--color-bg)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#4c83cf]">{badge}</p>
            <h2 className="title-main-duotone text-3xl font-bold tracking-tight md:text-4xl">
              {heading}
            </h2>
            {thumbnailHint ? (
              <p className="mt-3 text-sm text-[color:var(--color-text-muted)]">{thumbnailHint}</p>
            ) : null}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item.id} id={catalogAnchorId(item.id)} className={catalogScrollMt}>
                <CatalogCard item={item} onZoom={setZoom} />
              </div>
            ))}
          </div>

          {groups.map((group) => (
            <div
              key={group.id}
              id={catalogAnchorId(group.id)}
              className={`mt-16 border-t border-[#dbe4ef] pt-14 ${catalogScrollMt}`}
            >
              <h3 className="title-main-duotone mb-8 text-center text-2xl font-bold tracking-tight md:text-3xl">
                {group.title}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {group.items.map((item) => (
                  <div key={item.id} id={catalogAnchorId(item.id)} className={catalogScrollMt}>
                    <CatalogCard
                      item={item}
                      labelPrefix={group.title}
                      onZoom={setZoom}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {zoom ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={zoom.alt || "Vista ampliada"}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
          onClick={() => setZoom(null)}
        >
          <div
            role="presentation"
            className="flex max-h-full w-full max-w-[min(100vw-2rem,1200px)] flex-col items-stretch gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 justify-end gap-3">
              {zoom.pdf ? (
                <a
                  href={zoom.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#4c83cf] px-4 py-2 text-sm font-bold text-white shadow-lg transition hover:bg-[#1f5fae] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Abrir en pestaña nueva
                </a>
              ) : null}
              <button
                type="button"
                onClick={() => setZoom(null)}
                className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[color:var(--color-text)] shadow-lg transition hover:bg-[#eef4fb] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Cerrar"
              >
                Cerrar
              </button>
            </div>
            {zoom.pdf ? (
              <iframe
                title={zoom.alt}
                src={zoom.pdf}
                className="h-[min(82vh,calc(100vh-9rem))] w-full rounded-xl border-0 bg-white shadow-2xl"
              />
            ) : (
              <img
                src={zoom.src}
                alt={zoom.alt}
                className="max-h-[min(82vh,calc(100vh-9rem))] w-full rounded-xl object-contain object-center shadow-2xl"
              />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
