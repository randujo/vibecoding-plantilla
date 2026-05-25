"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { catalogAnchorId } from "@/components/catalogAnchors";
import { featureAnchorId } from "@/components/featureAnchors";
import { gallerySubgroupAnchorId } from "@/components/galleryAnchors";
import { siteConfig } from "@/config/site";

/**
 * Panel de la galería: todas las técnicas al mismo nivel.
 * Las que tienen subgrupos (p. ej. grabado láser) usan un bloque expandible;
 * al abrirlo aparecen “Todo” y cada subsección.
 */
function GalleryNavPanel({
  galleryBaseHref,
  onNavigate,
  sectionLinkClassName,
  subLinkClassName,
  rootClassName,
}) {
  const gallery = siteConfig.gallery;
  const sections = gallery.sections ?? [];
  const allLabel = gallery.navAllLabel ?? "Todo";

  return (
    <div className={rootClassName ?? "flex flex-col gap-0"}>
      {sections.map((section) => {
        const groups =
          Array.isArray(section.imageGroups) && section.imageGroups.length > 0
            ? section.imageGroups.filter((g) => g.images?.length > 0)
            : [];
        const parentLabel = section.galleryNavParentLabel ?? section.title;

        if (groups.length > 0) {
          return (
            <details
              key={section.id}
              className="border-b border-[color:var(--color-surface-strong)]/80 last:border-b-0 [&[open]]:bg-slate-50/60 [&[open]>summary_.grabsec-chevron]:rotate-180"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2 text-sm font-semibold text-[color:var(--color-text)] marker:hidden [&::-webkit-details-marker]:hidden hover:bg-slate-50">
                <span className="min-w-0 flex-1 text-left">{parentLabel}</span>
                <svg
                  className="grabsec-chevron size-4 shrink-0 text-[color:var(--color-text-muted)] transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-[color:var(--color-surface-strong)]/70 pb-2 pt-1">
                <ul className="ml-3 space-y-0.5 border-l-2 border-[color:var(--color-surface-strong)] pl-3">
                  <li>
                    <a
                      href={`${galleryBaseHref}#${section.id}`}
                      className={subLinkClassName}
                      onClick={onNavigate}
                    >
                      {allLabel}
                    </a>
                  </li>
                  {groups.map((g) => (
                    <li key={`${section.id}-${g.title}`}>
                      <a
                        href={`${galleryBaseHref}#${gallerySubgroupAnchorId(section.id, g.title)}`}
                        className={subLinkClassName}
                        onClick={onNavigate}
                      >
                        {g.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          );
        }

        return (
          <div
            key={section.id}
            className="border-b border-[color:var(--color-surface-strong)]/80 last:border-b-0"
          >
            <a
              href={`${galleryBaseHref}#${section.id}`}
              className={sectionLinkClassName}
              onClick={onNavigate}
            >
              {parentLabel}
            </a>
          </div>
        );
      })}
    </div>
  );
}

function FeaturesNavPanel({ onNavigate, itemLinkClassName }) {
  const { items } = siteConfig.features;

  return (
    <div className="flex flex-col gap-0">
      {(items ?? []).map((item) => {
        const anchor = featureAnchorId(item.gallerySectionId);
        if (!anchor) return null;
        return (
          <div
            key={anchor}
            className="border-b border-[color:var(--color-surface-strong)]/80 last:border-b-0"
          >
            <a href={`/#${anchor}`} className={itemLinkClassName} onClick={onNavigate}>
              {item.title}
            </a>
          </div>
        );
      })}
    </div>
  );
}

function CatalogNavPanel({ catalogBaseHref, onNavigate, itemLinkClassName, subLinkClassName }) {
  const { items, groups, navSectionLabel } = siteConfig.catalog;
  const sectionLabel = navSectionLabel ?? "Todo";

  return (
    <div className="flex flex-col gap-0">
      {items.map((item) => (
        <div
          key={item.id}
          className="border-b border-[color:var(--color-surface-strong)]/80 last:border-b-0"
        >
          <a
            href={`${catalogBaseHref}#${catalogAnchorId(item.id)}`}
            className={itemLinkClassName}
            onClick={onNavigate}
          >
            {item.title}
          </a>
        </div>
      ))}
      {groups.map((group) => (
        <details
          key={group.id}
          className="border-b border-[color:var(--color-surface-strong)]/80 last:border-b-0 [&[open]]:bg-slate-50/60 [&[open]>summary_.catalog-chevron]:rotate-180"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2 text-sm font-semibold text-[color:var(--color-text)] marker:hidden [&::-webkit-details-marker]:hidden hover:bg-slate-50">
            <span className="min-w-0 flex-1 text-left">{group.title}</span>
            <svg
              className="catalog-chevron size-4 shrink-0 text-[color:var(--color-text-muted)] transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="border-t border-[color:var(--color-surface-strong)]/70 pb-2 pt-1">
            <ul className="ml-3 space-y-0.5 border-l-2 border-[color:var(--color-surface-strong)] pl-3">
              <li>
                <a
                  href={`${catalogBaseHref}#${catalogAnchorId(group.id)}`}
                  className={subLinkClassName}
                  onClick={onNavigate}
                >
                  {sectionLabel}
                </a>
              </li>
              {group.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`${catalogBaseHref}#${catalogAnchorId(item.id)}`}
                    className={subLinkClassName}
                    onClick={onNavigate}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function levenshteinDistance(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const previousRow = Array.from({ length: b.length + 1 }, (_, index) => index);

  for (let i = 0; i < a.length; i += 1) {
    let current = i + 1;
    for (let j = 0; j < b.length; j += 1) {
      const insertCost = current + 1;
      const deleteCost = previousRow[j + 1] + 1;
      const replaceCost = previousRow[j] + (a[i] === b[j] ? 0 : 1);
      const next = Math.min(insertCost, deleteCost, replaceCost);
      previousRow[j] = current;
      current = next;
    }
    previousRow[b.length] = current;
  }

  return previousRow[b.length];
}

function isFuzzyWordMatch(queryWord, token) {
  if (!queryWord || !token) return false;
  if (token.includes(queryWord) || queryWord.includes(token)) return true;

  const maxDistance = queryWord.length >= 6 ? 2 : 1;
  return levenshteinDistance(queryWord, token) <= maxDistance;
}

/**
 * Mayor puntaje = más relevante: texto visible del resultado (label) gana sobre palabras clave;
 * la coincidencia aproximada (plumas ≈ placas) queda al final y puede filtrarse.
 */
function searchRelevanceScore(item, queryWords) {
  const label = normalizeText(item.label);
  const keywords = (item.keywords || []).map((w) => normalizeText(w));
  const haystack = [label, ...keywords].join(" ");
  const tokens = [...new Set([label, ...keywords].join(" ").split(/\s+/).filter(Boolean))];

  let total = 0;
  for (const word of queryWords) {
    if (!word) continue;
    if (label.includes(word)) {
      total += 100;
    } else if (haystack.includes(word)) {
      total += 40;
    } else if (tokens.some((t) => isFuzzyWordMatch(word, t))) {
      total += 8;
    } else {
      return -1;
    }
  }
  return total;
}

/** Si hay resultados muy buenos (título), no mezclar con aciertos solo por palabras clave o fuzzy. */
function filterSearchByRelevance(scoredRows) {
  if (!scoredRows.length) return scoredRows;
  const maxScore = scoredRows[0].score;
  if (maxScore >= 100) {
    return scoredRows.filter((row) => row.score >= 100);
  }
  if (maxScore >= 40) {
    return scoredRows.filter((row) => row.score >= 40);
  }
  return scoredRows;
}

function renderHighlightedLabel(label, queryWords) {
  const cleanWords = queryWords
    .map((word) => word.trim())
    .filter((word) => word.length >= 2);

  if (!cleanWords.length) return label;

  const lowerLabel = normalizeText(label);
  const firstMatch = cleanWords.find((word) => lowerLabel.includes(word));

  if (!firstMatch) return label;

  const rawLowerLabel = label.toLowerCase();
  let matchIndex = rawLowerLabel.indexOf(firstMatch.toLowerCase());

  // Fallback when query is without accents and label contains accents.
  if (matchIndex < 0) {
    const shortWord = firstMatch.slice(0, Math.min(firstMatch.length, 4));
    if (shortWord.length >= 2) {
      matchIndex = rawLowerLabel.indexOf(shortWord.toLowerCase());
    }
  }

  if (matchIndex < 0) return label;

  const matchEnd = matchIndex + Math.max(firstMatch.length, 2);

  return (
    <>
      {label.slice(0, matchIndex)}
      <mark className="bg-slate-200/70 text-[color:var(--color-primary)] rounded px-0.5">
        {label.slice(matchIndex, matchEnd)}
      </mark>
      {label.slice(matchEnd)}
    </>
  );
}

/** Une `search.items`, enlaces del menú principal y secciones/subsecciones de la galería para la caja de búsqueda. */
function buildExtendedSearchCatalog(siteConfig) {
  const base = siteConfig.search.items.map((item) => ({
    ...item,
    keywords: item.keywords ? [...item.keywords] : [],
  }));
  const seen = new Set(base.map((i) => `${i.href}|${i.label}`));

  function addItem(entry) {
    const key = `${entry.href}|${entry.label}`;
    if (seen.has(key)) return;
    seen.add(key);
    const kw = entry.keywords || [];
    const labelPieces = normalizeText(entry.label)
      .split(/\s+/)
      .filter((t) => t.length >= 2);
    base.push({
      label: entry.label,
      href: entry.href,
      keywords: [...new Set([...kw, ...labelPieces])],
    });
  }

  for (const link of siteConfig.nav.links) {
    addItem({
      label: link.label,
      href: link.href,
      keywords: [link.label],
    });
  }

  for (const item of siteConfig.features?.items ?? []) {
    const anchor = featureAnchorId(item.gallerySectionId);
    if (!anchor) continue;
    addItem({
      label: item.title,
      href: `/#${anchor}`,
      keywords: [item.title, "técnica", "tecnica", "productos"],
    });
  }

  const galleryHref = "/galeria";
  for (const section of siteConfig.gallery?.sections ?? []) {
    const secTitle = section.galleryNavParentLabel ?? section.title;
    const navShort = section.navLabel ?? section.title;
    addItem({
      label: secTitle,
      href: `${galleryHref}#${section.id}`,
      keywords: [secTitle, navShort, section.title].filter(Boolean),
    });

    const groups = Array.isArray(section.imageGroups)
      ? section.imageGroups.filter((g) => g.images?.length > 0)
      : [];
    for (const g of groups) {
      const anchorId = gallerySubgroupAnchorId(section.id, g.title);
      addItem({
        label: `${g.title} · ${navShort}`,
        href: `${galleryHref}#${anchorId}`,
        keywords: [g.title, navShort, secTitle],
      });
    }
  }

  const catalogHref = "/catalogos";
  const catalog = siteConfig.catalog;
  if (catalog) {
    addItem({
      label: catalog.navAllLabel ?? "Ver todos los catálogos",
      href: catalogHref,
      keywords: ["catálogos", "catalogos"],
    });
    for (const item of catalog.items ?? []) {
      addItem({
        label: item.title,
        href: `${catalogHref}#${catalogAnchorId(item.id)}`,
        keywords: [item.title, "catálogo", "catalogo"],
      });
    }
    for (const group of catalog.groups ?? []) {
      addItem({
        label: group.title,
        href: `${catalogHref}#${catalogAnchorId(group.id)}`,
        keywords: [group.title, "catálogo", "catalogo"],
      });
      for (const item of group.items ?? []) {
        addItem({
          label: `${item.title} · ${group.title}`,
          href: `${catalogHref}#${catalogAnchorId(item.id)}`,
          keywords: [item.title, group.title, "catálogo"],
        });
      }
    }
  }

  return base;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const [catalogDropdownOpen, setCatalogDropdownOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const galleryNavRef = useRef(null);
  const catalogNavRef = useRef(null);
  const featuresNavRef = useRef(null);
  const { links } = siteConfig.nav;
  const { search } = siteConfig;
  const catalogNavAllLabel = siteConfig.catalog?.navAllLabel ?? "Ver todos los catálogos";
  const featuresNavAllLabel = siteConfig.features?.navAllLabel ?? "Ver todas las técnicas";

  const allSearchItems = useMemo(() => buildExtendedSearchCatalog(siteConfig), []);

  useEffect(() => {
    if (!galleryDropdownOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setGalleryDropdownOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [galleryDropdownOpen]);

  useEffect(() => {
    if (!catalogDropdownOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setCatalogDropdownOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [catalogDropdownOpen]);

  useEffect(() => {
    if (!featuresDropdownOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setFeaturesDropdownOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [featuresDropdownOpen]);

  useEffect(() => {
    if (!galleryDropdownOpen) return undefined;
    const onDown = (e) => {
      if (galleryNavRef.current && !galleryNavRef.current.contains(e.target)) {
        setGalleryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [galleryDropdownOpen]);

  useEffect(() => {
    if (!catalogDropdownOpen) return undefined;
    const onDown = (e) => {
      if (catalogNavRef.current && !catalogNavRef.current.contains(e.target)) {
        setCatalogDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [catalogDropdownOpen]);

  useEffect(() => {
    if (!featuresDropdownOpen) return undefined;
    const onDown = (e) => {
      if (featuresNavRef.current && !featuresNavRef.current.contains(e.target)) {
        setFeaturesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [featuresDropdownOpen]);

  const normalizedQuery = normalizeText(query);
  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);
  const searchResults = normalizedQuery
    ? filterSearchByRelevance(
        allSearchItems
          .map((item) => ({ item, score: searchRelevanceScore(item, queryWords) }))
          .filter((row) => row.score >= 0)
          .sort((a, b) => b.score - a.score),
      )
        .map((row) => row.item)
        .slice(0, 12)
    : [];

  function handleResultClick() {
    setMenuOpen(false);
    setQuery("");
  }

  const desktopNavLinkClass =
    "nav-link-text inline-flex shrink-0 whitespace-nowrap items-center text-[color:var(--color-primary)] px-1.5 xl:px-2 py-1.5 rounded-lg hover:bg-[color:var(--color-surface)] hover:text-[#4c83cf] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg)]";
  const mobileNavLinkClass =
    "nav-link-text block text-[color:var(--color-primary)] px-3 py-2 rounded-lg hover:bg-[color:var(--color-surface)] hover:text-[#4c83cf] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[color:var(--color-bg)]/95 backdrop-blur-md border-b border-[color:var(--color-surface-strong)] shadow-sm">
      <nav className="max-w-7xl mx-auto pl-3 pr-4 sm:pl-4 sm:pr-5 lg:pl-4 lg:pr-6 min-h-18 py-3 flex items-center gap-2 sm:gap-3 lg:gap-4 min-w-0">
        <a href="/" className="shrink-0 -ml-1 sm:-ml-2 lg:-ml-2">
          <img
            src="/Imagenes/ARDITEC%20logo%20principal.jpeg"
            alt="Logo ARDITEC"
            className="h-11 lg:h-12 w-auto"
          />
        </a>

        {/* Desktop: overflow-visible para no recortar el submenú; galería abre/cierra con clic */}
        <ul className="hidden lg:flex flex-1 min-w-0 justify-center items-center gap-0 xl:gap-0.5 overflow-visible px-0.5 sm:px-1">
          {links.map((link) => {
            if (link.featuresNav) {
              return (
                <li key={`${link.href}-${link.label}-features`} className="relative shrink-0">
                  <div ref={featuresNavRef} className="relative">
                    <button
                      type="button"
                      id="features-nav-trigger"
                      aria-expanded={featuresDropdownOpen}
                      aria-haspopup="menu"
                      aria-controls="features-nav-menu"
                      className={`${desktopNavLinkClass} cursor-pointer gap-1 border border-transparent`}
                      onClick={() => {
                        setGalleryDropdownOpen(false);
                        setCatalogDropdownOpen(false);
                        setFeaturesDropdownOpen((open) => !open);
                      }}
                    >
                      {link.label}
                      <svg
                        className={`size-3.5 shrink-0 opacity-60 transition-transform duration-200 ${featuresDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      id="features-nav-menu"
                      role="menu"
                      aria-labelledby="features-nav-trigger"
                      hidden={!featuresDropdownOpen}
                      className={`absolute left-0 top-full z-[60] pt-2 transition-[opacity,visibility] duration-150 ${
                        featuresDropdownOpen
                          ? "visible opacity-100"
                          : "pointer-events-none invisible opacity-0"
                      }`}
                    >
                      <div className="max-h-[min(78vh,32rem)] min-w-[min(17rem,calc(100vw-2rem))] max-w-[24rem] overflow-y-auto overscroll-contain rounded-lg border border-[color:var(--color-surface-strong)] bg-white py-1 shadow-xl ring-1 ring-black/5">
                        <a
                          href={link.href}
                          role="menuitem"
                          className="block border-b border-[color:var(--color-surface-strong)] px-3 py-2 text-sm font-semibold text-[color:var(--color-accent)] transition-colors hover:bg-slate-50"
                          onClick={() => setFeaturesDropdownOpen(false)}
                        >
                          {featuresNavAllLabel}
                        </a>
                        <FeaturesNavPanel
                          onNavigate={() => setFeaturesDropdownOpen(false)}
                          itemLinkClassName="block px-3 py-1.5 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:bg-slate-50 hover:text-[color:var(--color-accent)]"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              );
            }

            if (link.galleryNav) {
              return (
                <li key={`${link.href}-${link.label}-gallery`} className="relative shrink-0">
                  <div ref={galleryNavRef} className="relative">
                    <button
                      type="button"
                      id="gallery-nav-trigger"
                      aria-expanded={galleryDropdownOpen}
                      aria-haspopup="menu"
                      aria-controls="gallery-nav-menu"
                      className={`${desktopNavLinkClass} cursor-pointer gap-1 border border-transparent`}
                      onClick={() => {
                        setCatalogDropdownOpen(false);
                        setFeaturesDropdownOpen(false);
                        setGalleryDropdownOpen((open) => !open);
                      }}
                    >
                      {link.label}
                      <svg
                        className={`size-3.5 shrink-0 opacity-60 transition-transform duration-200 ${galleryDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      id="gallery-nav-menu"
                      role="menu"
                      aria-labelledby="gallery-nav-trigger"
                      hidden={!galleryDropdownOpen}
                      className={`absolute left-0 top-full z-[60] pt-2 transition-[opacity,visibility] duration-150 ${
                        galleryDropdownOpen
                          ? "visible opacity-100"
                          : "pointer-events-none invisible opacity-0"
                      }`}
                    >
                      <div className="max-h-[min(78vh,32rem)] min-w-[min(19rem,calc(100vw-2rem))] max-w-[26rem] overflow-y-auto overscroll-contain rounded-lg border border-[color:var(--color-surface-strong)] bg-white py-1 shadow-xl ring-1 ring-black/5">
                        <a
                          href={link.href}
                          role="menuitem"
                          className="block border-b border-[color:var(--color-surface-strong)] px-3 py-2 text-sm font-semibold text-[color:var(--color-accent)] transition-colors hover:bg-slate-50"
                          onClick={() => setGalleryDropdownOpen(false)}
                        >
                          Ver galería completa
                        </a>
                        <GalleryNavPanel
                          galleryBaseHref={link.href}
                          onNavigate={() => setGalleryDropdownOpen(false)}
                          sectionLinkClassName="block px-3 py-1.5 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:bg-slate-50 hover:text-[color:var(--color-accent)]"
                          subLinkClassName="block py-1 text-sm font-normal text-[color:var(--color-text-muted)] transition-colors hover:bg-slate-50 hover:text-[color:var(--color-accent)]"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              );
            }

            if (link.catalogNav) {
              return (
                <li key={`${link.href}-${link.label}-catalog`} className="relative shrink-0">
                  <div ref={catalogNavRef} className="relative">
                    <button
                      type="button"
                      id="catalog-nav-trigger"
                      aria-expanded={catalogDropdownOpen}
                      aria-haspopup="menu"
                      aria-controls="catalog-nav-menu"
                      className={`${desktopNavLinkClass} cursor-pointer gap-1 border border-transparent`}
                      onClick={() => {
                        setGalleryDropdownOpen(false);
                        setFeaturesDropdownOpen(false);
                        setCatalogDropdownOpen((open) => !open);
                      }}
                    >
                      {link.label}
                      <svg
                        className={`size-3.5 shrink-0 opacity-60 transition-transform duration-200 ${catalogDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      id="catalog-nav-menu"
                      role="menu"
                      aria-labelledby="catalog-nav-trigger"
                      hidden={!catalogDropdownOpen}
                      className={`absolute left-0 top-full z-[60] pt-2 transition-[opacity,visibility] duration-150 ${
                        catalogDropdownOpen
                          ? "visible opacity-100"
                          : "pointer-events-none invisible opacity-0"
                      }`}
                    >
                      <div className="max-h-[min(78vh,32rem)] min-w-[min(19rem,calc(100vw-2rem))] max-w-[26rem] overflow-y-auto overscroll-contain rounded-lg border border-[color:var(--color-surface-strong)] bg-white py-1 shadow-xl ring-1 ring-black/5">
                        <a
                          href={link.href}
                          role="menuitem"
                          className="block border-b border-[color:var(--color-surface-strong)] px-3 py-2 text-sm font-semibold text-[color:var(--color-accent)] transition-colors hover:bg-slate-50"
                          onClick={() => setCatalogDropdownOpen(false)}
                        >
                          {catalogNavAllLabel}
                        </a>
                        <CatalogNavPanel
                          catalogBaseHref={link.href}
                          onNavigate={() => setCatalogDropdownOpen(false)}
                          itemLinkClassName="block px-3 py-1.5 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:bg-slate-50 hover:text-[color:var(--color-accent)]"
                          subLinkClassName="block py-1 text-sm font-normal text-[color:var(--color-text-muted)] transition-colors hover:bg-slate-50 hover:text-[color:var(--color-accent)]"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li key={`${link.href}-${link.label}`}>
                <a href={link.href} className={desktopNavLinkClass}>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

                {/* Búsqueda a la derecha; en tablet (sin menú desktop) ocupa el espacio y alinea la caja a la derecha */}
        <div
          id="busqueda"
          className="hidden md:flex relative min-w-0 flex-1 justify-end lg:flex-none lg:flex-shrink-0"
        >
          <div className="relative w-full max-w-[min(100%,17rem)] sm:max-w-[18.5rem] lg:w-[min(14.75rem,calc(100vw-12rem))] xl:w-[min(16.5rem,calc(100vw-14rem))]">
            <div className="flex items-center gap-1.5 rounded-full border border-[color:var(--color-surface-strong)] bg-[color:var(--color-bg)] px-2.5 py-2 focus-within:border-[color:var(--color-accent)]">
              <svg className="w-3.5 h-3.5 shrink-0 text-[color:var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={search.placeholder}
                className="w-full min-w-0 bg-transparent text-xs sm:text-sm text-[color:var(--color-text)] placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            {normalizedQuery && (
              <div className="absolute top-[calc(100%+0.4rem)] left-0 right-0 z-50 rounded-2xl border border-[color:var(--color-surface-strong)] bg-white shadow-lg p-2">
                {searchResults.length > 0 ? (
                  <ul className="space-y-1">
                    {searchResults.map((item) => (
                      <li key={`${item.href}-${item.label}`}>
                        <a
                          href={item.href}
                          onClick={handleResultClick}
                          className="block rounded-xl px-3 py-2 text-sm text-[color:var(--color-text-muted)] hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-accent)] transition-colors"
                        >
                          {renderHighlightedLabel(item.label, queryWords)}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-3 py-2 text-sm text-slate-500">{search.emptyMessage}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[color:var(--color-text-muted)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir o cerrar menú"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[color:var(--color-bg)] border-b border-[color:var(--color-surface-strong)] px-6 pb-5 space-y-4">
          <div className="relative">
            <div className="flex items-center gap-2 rounded-full border border-[color:var(--color-surface-strong)] bg-[color:var(--color-bg)] px-3 py-2 focus-within:border-[color:var(--color-accent)]">
              <svg className="w-4 h-4 text-[color:var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={search.placeholder}
                className="w-full bg-transparent text-sm text-[color:var(--color-text)] placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            {normalizedQuery && (
              <div className="mt-2 rounded-2xl border border-[color:var(--color-surface-strong)] bg-white shadow-sm p-2">
                {searchResults.length > 0 ? (
                  <ul className="space-y-1">
                    {searchResults.map((item) => (
                      <li key={`mobile-${item.href}-${item.label}`}>
                        <a
                          href={item.href}
                          onClick={handleResultClick}
                          className="block rounded-xl px-3 py-2 text-sm text-[color:var(--color-text-muted)] hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-accent)] transition-colors"
                        >
                          {renderHighlightedLabel(item.label, queryWords)}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-3 py-2 text-sm text-slate-500">{search.emptyMessage}</p>
                )}
              </div>
            )}
          </div>

          <ul className="space-y-1">
            {links.map((link) => {
              if (link.featuresNav) {
                return (
                  <li key={`${link.href}-${link.label}-features-mobile`}>
                    <details className="group rounded-xl border border-transparent open:border-[color:var(--color-surface-strong)] open:bg-[color:var(--color-surface)]/40">
                      <summary className="nav-link-text cursor-pointer list-none px-3 py-2 text-[color:var(--color-primary)] marker:hidden [&::-webkit-details-marker]:hidden">
                        <span className="flex items-center justify-between gap-2">
                          {link.label}
                          <svg
                            className="size-4 shrink-0 opacity-60 transition-transform group-open:rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="border-t border-[color:var(--color-surface-strong)] px-2 pb-3 pt-2">
                        <a
                          href={link.href}
                          className="mb-2 block rounded-md px-3 py-1.5 text-sm font-semibold text-[color:var(--color-accent)] transition-colors hover:bg-[color:var(--color-surface)]"
                          onClick={() => setMenuOpen(false)}
                        >
                          {featuresNavAllLabel}
                        </a>
                        <FeaturesNavPanel
                          onNavigate={() => setMenuOpen(false)}
                          itemLinkClassName="block rounded-md px-3 py-1.5 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-accent)]"
                        />
                      </div>
                    </details>
                  </li>
                );
              }

              if (link.galleryNav) {
                return (
                  <li key={`${link.href}-${link.label}-gallery-mobile`}>
                    <details className="group rounded-xl border border-transparent open:border-[color:var(--color-surface-strong)] open:bg-[color:var(--color-surface)]/40">
                      <summary className="nav-link-text cursor-pointer list-none px-3 py-2 text-[color:var(--color-primary)] marker:hidden [&::-webkit-details-marker]:hidden">
                        <span className="flex items-center justify-between gap-2">
                          {link.label}
                          <svg
                            className="size-4 shrink-0 opacity-60 transition-transform group-open:rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="border-t border-[color:var(--color-surface-strong)] px-2 pb-3 pt-2">
                        <a
                          href={link.href}
                          className="mb-2 block rounded-md px-3 py-1.5 text-sm font-semibold text-[color:var(--color-accent)] transition-colors hover:bg-[color:var(--color-surface)]"
                          onClick={() => setMenuOpen(false)}
                        >
                          Ver galería completa
                        </a>
                        <GalleryNavPanel
                          galleryBaseHref={link.href}
                          onNavigate={() => setMenuOpen(false)}
                          sectionLinkClassName="block rounded-md px-3 py-1.5 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-accent)]"
                          subLinkClassName="block rounded-md px-2 py-1 text-sm font-normal text-[color:var(--color-text-muted)] transition-colors hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-accent)]"
                        />
                      </div>
                    </details>
                  </li>
                );
              }

              if (link.catalogNav) {
                return (
                  <li key={`${link.href}-${link.label}-catalog-mobile`}>
                    <details className="group rounded-xl border border-transparent open:border-[color:var(--color-surface-strong)] open:bg-[color:var(--color-surface)]/40">
                      <summary className="nav-link-text cursor-pointer list-none px-3 py-2 text-[color:var(--color-primary)] marker:hidden [&::-webkit-details-marker]:hidden">
                        <span className="flex items-center justify-between gap-2">
                          {link.label}
                          <svg
                            className="size-4 shrink-0 opacity-60 transition-transform group-open:rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="border-t border-[color:var(--color-surface-strong)] px-2 pb-3 pt-2">
                        <a
                          href={link.href}
                          className="mb-2 block rounded-md px-3 py-1.5 text-sm font-semibold text-[color:var(--color-accent)] transition-colors hover:bg-[color:var(--color-surface)]"
                          onClick={() => setMenuOpen(false)}
                        >
                          {catalogNavAllLabel}
                        </a>
                        <CatalogNavPanel
                          catalogBaseHref={link.href}
                          onNavigate={() => setMenuOpen(false)}
                          itemLinkClassName="block rounded-md px-3 py-1.5 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-accent)]"
                          subLinkClassName="block rounded-md px-2 py-1 text-sm font-normal text-[color:var(--color-text-muted)] transition-colors hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-accent)]"
                        />
                      </div>
                    </details>
                  </li>
                );
              }

              return (
                <li key={`${link.href}-${link.label}`}>
                  <a
                    href={link.href}
                    className={mobileNavLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}