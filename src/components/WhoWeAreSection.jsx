import { siteConfig } from "@/config/site";

export default function WhoWeAreSection() {
  const { heading, paragraphs } = siteConfig.whoWeAre;

  return (
    <section
      id="quienes-somos"
      className="scroll-mt-28 lg:scroll-mt-36 py-16 md:py-20 px-6 bg-black text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.12em] text-white uppercase mb-8 md:mb-10">
          {heading}
        </h2>
        <div className="space-y-5">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base md:text-lg text-white/95 leading-relaxed font-normal"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
