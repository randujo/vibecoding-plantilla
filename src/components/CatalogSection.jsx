"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export default function CatalogSection() {
  const { badge, heading, thumbnailHint, items } = siteConfig.catalog;
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
            {items.map((item) => {
              const imgAlt = `Catálogo: ${item.title}`;
              return (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-[color:var(--color-surface-strong)] bg-white shadow-sm transition hover:shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => setZoom({ src: item.image, alt: imgAlt })}
                    className="group block w-full overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2"
                    aria-label={`Ver imagen grande: ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt={imgAlt}
                      className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </button>
                  <div className="px-5 py-4">
                    <h3 className="text-lg font-semibold text-[color:var(--color-text)] md:text-xl">{item.title}</h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

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
