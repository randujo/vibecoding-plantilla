import { siteConfig } from "@/config/site";

/**
 * Tres acciones fijas al pie del contenido principal (orden en site.js pageCtaBar).
 */
export default function PageCtaStrip() {
  const { cotizaLabel, cotizaHref, hablemosLabel, hablemosHref, homeLabel, homeHref } = siteConfig.pageCtaBar;

  const gradient =
    "inline-flex min-w-[12rem] items-center justify-center rounded-full bg-gradient-to-r from-[#1f5fae] to-[#2d5b88] px-9 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1f5fae]/35 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2";
  const outlineAccent =
    "inline-flex min-w-[12rem] items-center justify-center rounded-full border-2 border-[color:var(--color-primary)] bg-white px-8 py-3.5 text-sm font-semibold text-[color:var(--color-primary)] transition hover:bg-[#eef4fb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2";
  const outlineMuted =
    "inline-flex min-w-[12rem] items-center justify-center rounded-full border-2 border-[#dbe4ef] bg-white px-8 py-3.5 text-sm font-semibold text-[color:var(--color-text)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2";

  return (
    <section aria-label="Acciones rápidas" className="border-t border-[color:var(--color-surface-strong)] bg-[#f8fafc] px-6 py-14">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
        <a href={cotizaHref} className={gradient}>
          {cotizaLabel}
        </a>
        <a href={hablemosHref} className={outlineAccent}>
          {hablemosLabel}
        </a>
        <a href={homeHref} className={outlineMuted}>
          {homeLabel}
        </a>
      </div>
    </section>
  );
}
