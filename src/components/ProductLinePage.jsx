import Footer from "@/components/Footer";
import GallerySectionsWithLightbox from "@/components/GallerySectionsWithLightbox";
import Header from "@/components/Header";
import PageCtaStrip from "@/components/PageCtaStrip";
import { siteConfig } from "@/config/site";

export default function ProductLinePage({ line, imageGroups }) {
  const {
    galleryLinkLabel,
    galleryHref,
    backToLinesLabel,
    backToLinesHref,
    emptyMessage,
  } = siteConfig.productLines;

  const sections = [
    {
      id: line.id,
      title: line.name,
      description: line.description,
      imageGroups,
    },
  ];

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="min-h-screen bg-gradient-to-b from-[#eef4fb] via-white to-[color:var(--color-bg)]"
      >
        <section className="relative overflow-hidden bg-[color:var(--color-primary)] px-6 pb-14 pt-10 text-white md:pb-20 md:pt-14">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-0 size-[min(100vw,32rem)] rounded-bl-[40%] bg-gradient-to-bl from-[#2d5b88]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 h-40 w-64 rounded-tr-full bg-[#4c83cf]/20 blur-2xl" />
          </div>
          <div className="relative mx-auto max-w-6xl">
            <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.42em] text-[#9ec9ef] lg:text-left">
              Líneas de producto
            </p>
            <h1 className="text-center text-4xl font-black tracking-tight md:text-5xl lg:text-left lg:text-[3.25rem] lg:leading-[1.08]">
              {line.name}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-white/90 md:text-lg lg:mx-0 lg:text-left">
              {line.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href={backToLinesHref}
                className="inline-flex items-center rounded-full border border-white/40 bg-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-primary)]"
              >
                {backToLinesLabel}
              </a>
              <a
                href={galleryHref}
                className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-primary)]"
              >
                {galleryLinkLabel}
              </a>
            </div>
          </div>
        </section>

        <GallerySectionsWithLightbox sections={sections} emptyMessage={emptyMessage} />

        <PageCtaStrip />
      </main>
      <Footer />
    </>
  );
}
