import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LegalSectionArticle from "@/components/LegalSectionArticle";
import PageCtaStrip from "@/components/PageCtaStrip";
import { siteConfig } from "@/config/site";

export default function PrivacyNoticePage() {
  const { heroEyebrow, heading, subtitle, logo, motto, sections } = siteConfig.privacyNotice;

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
              {heroEyebrow}
            </p>
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
              <div className="max-w-2xl flex-1 text-center lg:text-left">
                {subtitle ? (
                  <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#7eb8e8]">{subtitle}</p>
                ) : null}
                <h1 className="text-4xl font-black tracking-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                  {heading}
                </h1>
                {motto ? (
                  <p className="mt-4 text-base font-medium italic text-white/90 md:text-lg">{motto}</p>
                ) : null}
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
          </div>
        </section>

        <section className="mx-auto max-w-4xl space-y-7 px-6 py-16 md:space-y-8 md:py-20">
          {sections.map((section) => (
            <LegalSectionArticle key={`${section.roman}-${section.title}`} sectionRoman={section.roman}>
              <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-[color:var(--color-text)] md:text-3xl">
                {section.title}
              </h2>

              {section.intro ? (
                <p className="mb-6 border-b border-[color:var(--color-surface-strong)] pb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                  {section.intro}
                </p>
              ) : null}

              {section.paragraphs?.length ? (
                <div className="space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-base leading-relaxed text-[color:var(--color-text-muted)] md:text-lg">
                      {p}
                    </p>
                  ))}
                </div>
              ) : null}

              {section.items?.length ? (
                <ul className="m-0 list-none space-y-6 pl-0">
                  {section.items.map((item) => (
                    <li key={`${section.roman}-${item.heading}`}>
                      <p className="mb-2 text-base font-semibold text-[color:var(--color-text)] md:text-lg">
                        {item.heading}
                      </p>
                      <p className="text-base leading-relaxed text-[color:var(--color-text-muted)] md:text-lg">
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.trailParagraphs?.length ? (
                <div className={`space-y-4 ${section.items?.length ? "mt-6" : ""}`}>
                  {section.trailParagraphs.map((p, i) => (
                    <p
                      key={`trail-${section.roman}-${i}`}
                      className="text-base leading-relaxed text-[color:var(--color-text-muted)] md:text-lg"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              ) : null}
            </LegalSectionArticle>
          ))}
        </section>

        <PageCtaStrip />
      </main>
      <Footer />
    </>
  );
}
