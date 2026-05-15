import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LegalSectionArticle from "@/components/LegalSectionArticle";
import PageCtaStrip from "@/components/PageCtaStrip";
import { siteConfig } from "@/config/site";

export default function QuienesSomosPage() {
  const page = siteConfig.quienesSomosPage;
  const { heading, paragraphs } = siteConfig.whoWeAre;

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-[#eef4fb] via-white to-[color:var(--color-bg)]">
        <section className="relative overflow-hidden bg-[color:var(--color-primary)] px-6 pb-16 pt-10 text-white md:pb-20 md:pt-14">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-0 size-[min(100vw,32rem)] rounded-bl-[40%] bg-gradient-to-bl from-[#2d5b88]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 h-40 w-64 rounded-tr-full bg-[#4c83cf]/20 blur-2xl" />
          </div>
          <div className="relative mx-auto max-w-6xl">
            <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.42em] text-[#9ec9ef]">
              {page.eyebrow}
            </p>
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
              <div className="max-w-2xl flex-1 text-center lg:text-left">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#7eb8e8]">{siteConfig.tagline}</p>
                <h1 className="text-4xl font-black tracking-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                  {heading}
                </h1>
                <p className="mt-4 text-base font-medium italic text-white/90 md:text-lg">{siteConfig.footer.tagline}</p>
              </div>
              <div className="shrink-0">
                <div className="rounded-[2rem] bg-white p-7 shadow-2xl shadow-black/25 ring-4 ring-white/20 sm:p-9">
                  <img
                    src={page.logo}
                    alt={siteConfig.name}
                    className="mx-auto h-auto w-[min(100%,16rem)] object-contain sm:w-72"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl space-y-7 px-6 py-16 md:space-y-8 md:py-20">
          {paragraphs.map((paragraph, index) => (
            <LegalSectionArticle key={index} sectionRoman={String(index + 1).padStart(2, "0")}>
              <p className="text-base leading-relaxed text-[color:var(--color-text-muted)] md:text-lg">{paragraph}</p>
            </LegalSectionArticle>
          ))}
        </section>

        <PageCtaStrip />
      </main>
      <Footer />
    </>
  );
}
