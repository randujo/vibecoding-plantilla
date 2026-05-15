import { siteConfig } from "@/config/site";

export default function Hero() {
  const {
    badge,
    title,
    titleHighlight,
    subtitle,
    ctaPrimary,
    ctaSecondary,
    ctaTertiary,
    ctaPrimaryUrl,
    ctaSecondaryUrl,
    ctaTertiaryUrl,
  } = siteConfig.hero;

  return (
    <section id="hero" className="pt-36 pb-22 px-6 bg-gradient-to-b from-[color:var(--color-surface)] to-[color:var(--color-bg)]">
      <div className="max-w-4xl mx-auto text-center">
        {badge && (
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-[color:var(--color-primary)] bg-[color:var(--color-surface)] rounded-full border border-[color:var(--color-surface-strong)]">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[color:var(--color-text)] leading-tight mb-6">
          {title}
          <span className="text-[color:var(--color-accent)]"> {titleHighlight}</span>
        </h1>
        <div className="mt-12 rounded-3xl overflow-hidden border border-[color:var(--color-surface-strong)] shadow-lg shadow-slate-300/50">
          <img
            src="/Imagenes/arditec%20portada.png"
            alt="Portada de ARDITEC con ejemplo de trabajo personalizado"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="max-w-3xl mx-auto mt-7 text-left">
          {subtitle && (
            <p className="text-base text-[color:var(--color-text-muted)] leading-relaxed mb-5">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
            {/* Orden visual: Ver nuestro trabajo → Catálogos → Cotiza (textos y URLs en site.js hero.cta*) */}
            <a
              href={ctaSecondaryUrl}
              className="group relative inline-flex w-full min-w-[15rem] max-w-sm shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1f5fae] via-[#2d5b88] to-[#2565a8] px-9 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#1f5fae]/35 ring-4 ring-[#4c83cf]/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#1f5fae]/45 hover:brightness-[1.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg)] sm:w-auto sm:py-4"
            >
              <svg className="size-5 shrink-0 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {ctaSecondary}
            </a>
            <a
              href={ctaTertiaryUrl}
              className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#eef4fb] to-white px-8 py-3.5 text-sm font-bold text-[color:var(--color-primary)] shadow-md shadow-slate-200/90 ring-1 ring-[#c5d9ed] transition duration-300 hover:-translate-y-0.5 hover:from-white hover:to-[#e8f0fa] hover:shadow-xl hover:ring-[#4c83cf]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 sm:w-auto sm:py-4"
            >
              <svg className="size-5 shrink-0 text-[#2d5b88]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {ctaTertiary}
            </a>
            <a
              href={ctaPrimaryUrl}
              className="group inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full border-2 border-[color:var(--color-surface-strong)] bg-white px-8 py-3.5 text-sm font-bold text-[color:var(--color-primary)] shadow-md shadow-slate-300/45 transition duration-300 hover:-translate-y-0.5 hover:border-[#4c83cf] hover:bg-[#f8fafc] hover:shadow-xl hover:shadow-[#4c83cf]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 sm:w-auto sm:py-4"
            >
              <svg className="size-5 shrink-0 text-[color:var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {ctaPrimary}
              <svg className="size-4 shrink-0 text-[color:var(--color-primary)] transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
