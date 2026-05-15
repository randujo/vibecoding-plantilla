import { siteConfig } from "@/config/site";

function SocialIcon({ type }) {
  if (type === "facebook") {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.03 3.66 9.2 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.92 3.78-3.92 1.1 0 2.25.2 2.25.2v2.47H15.2c-1.24 0-1.63.78-1.63 1.58v1.9h2.78l-.44 2.9h-2.34V22c4.78-.73 8.43-4.9 8.43-9.93z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7.75 2h8.5C19.98 2 22 4.02 22 7.75v8.5C22 19.98 19.98 22 16.25 22h-8.5C4.02 22 2 19.98 2 16.25v-8.5C2 4.02 4.02 2 7.75 2zm-.2 2A3.55 3.55 0 004 7.55v8.9A3.55 3.55 0 007.55 20h8.9A3.55 3.55 0 0020 16.45v-8.9A3.55 3.55 0 0016.45 4h-8.9zm9.7 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.82 11.82 0 0012.05 0C5.55 0 .24 5.3.24 11.82c0 2.08.54 4.11 1.56 5.9L0 24l6.45-1.7a11.78 11.78 0 005.6 1.42h.01c6.5 0 11.82-5.3 11.82-11.82 0-3.16-1.23-6.13-3.36-8.42zM12.06 21.7h-.01a9.8 9.8 0 01-4.99-1.37l-.36-.21-3.83 1.01 1.02-3.73-.24-.38a9.77 9.77 0 01-1.5-5.2c0-5.41 4.4-9.82 9.82-9.82 2.62 0 5.09 1.02 6.94 2.88a9.72 9.72 0 012.88 6.94c0 5.41-4.4 9.82-9.82 9.82zm5.38-7.35c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.66.15-.2.3-.76.98-.93 1.18-.17.2-.35.22-.65.07a8.02 8.02 0 01-2.36-1.46 8.81 8.81 0 01-1.63-2.03c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.5.08-.76.38-.27.3-1.03 1-1.03 2.44s1.06 2.84 1.2 3.03c.15.2 2.08 3.18 5.03 4.46.7.3 1.26.48 1.69.62.71.22 1.35.19 1.86.11.57-.09 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.44-.07-.12-.27-.2-.57-.35z" />
      </svg>
    );
  }

  return null;
}

function getSocialBadgeClasses(type) {
  if (type === "facebook") return "bg-[#e7f0ff] text-[#1877F2]";
  if (type === "instagram") return "bg-[#fff0f7] text-[#E1306C]";
  if (type === "whatsapp") return "bg-[#e8f9ef] text-[#25D366]";
  return "bg-[#e2ecfb] text-[#2f80ed]";
}

export default function Footer() {
  const { name } = siteConfig;
  const { tagline, sections, copyright } = siteConfig.footer;

  return (
    <footer className="border-t border-[color:var(--color-surface-strong)] py-14 px-6 bg-[#f1f5f9]">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid md:grid-cols-3 gap-10">
          {(sections || []).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-black tracking-[0.28em] text-[#111827] mb-5">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {(section.links || []).map((link) => (
                  <li key={`${section.title}-${link.label}`}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-lg leading-tight text-[#111827] hover:text-[color:var(--color-accent)] transition-colors"
                    >
                      {link.icon ? (
                        <span className="inline-flex items-center gap-2">
                          <span
                            className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${getSocialBadgeClasses(link.icon)}`}
                          >
                            <SocialIcon type={link.icon} />
                          </span>
                          {link.label}
                        </span>
                      ) : (
                        link.label
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-sm text-slate-500 border-t border-[color:var(--color-surface-strong)] pt-5">
          &copy; {new Date().getFullYear()} {name}. {tagline}. {copyright}
        </p>
      </div>
    </footer>
  );
}
