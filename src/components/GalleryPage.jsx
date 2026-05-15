import Footer from "@/components/Footer";
import { gallerySubgroupAnchorId } from "@/components/galleryAnchors";
import GallerySectionsWithLightbox from "@/components/GallerySectionsWithLightbox";
import Header from "@/components/Header";
import PageCtaStrip from "@/components/PageCtaStrip";
import { siteConfig } from "@/config/site";

export default function GalleryPage() {
  const gallery = siteConfig.gallery;
  const {
    heroEyebrow,
    heading,
    subheading,
    logo,
    jumpNavIntro,
    navAllLabel,
    emptyMessage,
    sections,
  } = gallery;
  const allNavLabel = navAllLabel ?? "Todo";

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-[#eef4fb] via-white to-[color:var(--color-bg)]">
        <section className="relative overflow-hidden bg-[color:var(--color-primary)] px-6 pb-14 pt-10 text-white md:pb-20 md:pt-14">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-0 size-[min(100vw,32rem)] rounded-bl-[40%] bg-gradient-to-bl from-[#2d5b88]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 h-40 w-64 rounded-tr-full bg-[#4c83cf]/20 blur-2xl" />
          </div>
          <div className="relative mx-auto max-w-6xl">
            <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.42em] text-[#9ec9ef]">
              {heroEyebrow}
            </p>
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
              <div className="max-w-2xl flex-1 text-center lg:text-left">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#7eb8e8]">{subheading}</p>
                <h1 className="text-4xl font-black tracking-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                  {heading}
                </h1>
              </div>
              <div className="shrink-0">
                <div className="rounded-[2rem] bg-white p-7 shadow-2xl shadow-black/25 ring-4 ring-white/20 sm:p-9">
                  <img
                    src={logo}
                    alt={siteConfig.name}
                    className="mx-auto h-auto w-[min(100%,16rem)] object-contain sm:w-72"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm md:px-6">
              <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/85 md:text-left">
                {jumpNavIntro}
              </p>
              <nav aria-label="Secciones de la galería" className="space-y-4">
                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                  <a
                    href="#main-content"
                    className="inline-flex items-center rounded-full border border-white/40 bg-white/20 px-3.5 py-2 text-xs font-semibold text-white shadow-sm ring-1 ring-white/30 transition hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-primary)] sm:text-sm"
                  >
                    {allNavLabel}
                  </a>
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white transition hover:border-white/50 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-primary)] sm:text-sm"
                    >
                      {section.navLabel ?? section.title}
                    </a>
                  ))}
                </div>

                {sections.some((s) =>
                  Array.isArray(s.imageGroups) ? s.imageGroups.some((g) => g.images?.length > 0) : false,
                ) ? (
                  <div className="space-y-4 border-t border-white/15 pt-4">
                    {sections.map((section) => {
                      const groups =
                        Array.isArray(section.imageGroups) && section.imageGroups.length > 0
                          ? section.imageGroups.filter((g) => g.images?.length > 0)
                          : [];
                      if (!groups.length) return null;
                      return (
                        <div key={`jump-${section.id}`}>
                          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9ec9ef]">
                            {section.navLabel ?? section.title}
                          </p>
                          <div className="flex flex-wrap justify-center gap-1.5 md:justify-start">
                            {groups.map((g) => (
                              <a
                                key={`${section.id}-${g.title}`}
                                href={`#${gallerySubgroupAnchorId(section.id, g.title)}`}
                                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/95 transition hover:border-white/35 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-primary)] sm:text-xs"
                              >
                                {g.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </nav>
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
