import { siteConfig } from "@/config/site";

export default function FAQ() {
  const { heading, subheading, items } = siteConfig.faq;

  return (
    <section id="faq" className="py-24 px-0 bg-[#eef4fb]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#4c83cf] mb-5">
            {subheading}
          </p>
          <h2 className="title-main-duotone text-[44px] md:text-[56px] font-black tracking-tight mb-4">
            {heading}
          </h2>
        </div>
        <div className="space-y-6">
          {items.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#dbe4ef] rounded-2xl px-6 md:px-8 py-8 shadow-sm"
            >
              <div className="text-[60px] md:text-[68px] leading-none font-black text-[#1f5fae] mb-4">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[32px] md:text-[38px] leading-tight font-extrabold text-[#111827] mb-4">
                {faq.question}
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[#6b7280] max-w-4xl">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
