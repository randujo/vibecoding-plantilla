"use client";

import { useEffect, useState } from "react";
import { featureAnchorId } from "@/components/featureAnchors";
import { siteConfig } from "@/config/site";

const featureScrollMt = "scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-36";

const iconMap = {
  lightning: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  mobile: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  settings: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
};

export default function Features() {
  const { heading, subheading, items, galleryLinkLabel } = siteConfig.features;
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
      <section id="features" className="py-20 px-6 bg-[color:var(--color-bg)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="title-main-duotone text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {heading}
            </h2>
            <p className="text-lg text-[color:var(--color-text-muted)] max-w-3xl mx-auto">
              {subheading}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((feature, index) => {
              const imgAlt = `Técnica: ${feature.title}`;
              return (
                <div
                  key={feature.title ?? index}
                  id={feature.gallerySectionId ? featureAnchorId(feature.gallerySectionId) : undefined}
                  className={`bg-[color:var(--color-bg)] p-8 rounded-2xl border border-[color:var(--color-surface-strong)] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all ${feature.gallerySectionId ? featureScrollMt : ""}`}
                >
                  {feature.image ? (
                    <div className="mb-5 overflow-hidden rounded-xl border border-[color:var(--color-surface-strong)] bg-[color:var(--color-surface)]">
                      <button
                        type="button"
                        onClick={() => setZoom({ src: feature.image, alt: imgAlt })}
                        className="group block w-full overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2"
                        aria-label={`Ver imagen grande: ${feature.title}`}
                      >
                        <img
                          src={feature.image}
                          alt={imgAlt}
                          className="w-full h-auto object-cover aspect-[4/3] transition duration-300 group-hover:scale-[1.02]"
                        />
                      </button>
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-[color:var(--color-surface)] text-[color:var(--color-accent)] rounded-xl flex items-center justify-center mb-5">
                      {iconMap[feature.icon] ?? iconMap.settings}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-[color:var(--color-text)] mb-3">
                    {feature.title}
                  </h3>
                  {"descriptionBlocks" in feature && feature.descriptionBlocks ? (
                    <div className="space-y-3 text-[color:var(--color-text-muted)] leading-relaxed">
                      {feature.descriptionBlocks.map((block, i) => (
                        <p key={i}>
                          <span className="font-semibold text-[color:var(--color-text)]">
                            {block.label}
                          </span>{" "}
                          {block.text}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[color:var(--color-text-muted)] leading-relaxed">{feature.description}</p>
                  )}
                  {feature.gallerySectionId && galleryLinkLabel ? (
                    <p className="mt-6">
                      <a
                        href={`/galeria#${feature.gallerySectionId}`}
                        className="text-sm font-semibold text-[color:var(--color-accent)] underline decoration-2 underline-offset-4 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2"
                        aria-label={`${galleryLinkLabel}: ${feature.title}`}
                      >
                        {galleryLinkLabel}
                      </a>
                    </p>
                  ) : null}
                </div>
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
