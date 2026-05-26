import PaymentButton from "@/components/PaymentButton";
import { pricingAnchorId } from "@/components/pricingAnchors";
import { siteConfig } from "@/config/site";

export default function Pricing() {
  const { heading, subheading, plans } = siteConfig.pricing;

  return (
    <section id="pricing" className="py-20 px-6 bg-[color:var(--color-surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="title-main-duotone text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {heading}
          </h2>
          <p className="text-lg text-[color:var(--color-text-muted)] max-w-3xl mx-auto">
            {subheading}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.id ?? index}
              id={plan.id ? pricingAnchorId(plan.id) : undefined}
              className={`scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-36 flex w-full max-w-[24rem] flex-col rounded-2xl border p-8 sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] ${
                plan.highlighted
                  ? "border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white shadow-xl"
                  : "border-[color:var(--color-surface-strong)] bg-[color:var(--color-bg)] shadow-sm"
              }`}
            >
              <h3
                className={`mb-1 text-lg font-semibold leading-tight break-words ${
                  plan.highlighted ? "text-slate-100" : "text-[color:var(--color-text)]"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? "text-slate-300" : "text-[color:var(--color-text-muted)]"
                }`}
              >
                {plan.description}
              </p>
              <div className="mb-6">
                <span
                  className={`block font-bold leading-tight break-words ${
                    plan.price.length > 14 ? "text-3xl md:text-[2rem]" : "text-4xl"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`mt-1 block text-sm ${
                    plan.highlighted ? "text-slate-300" : "text-[color:var(--color-text-muted)]"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <svg
                      className={`w-5 h-5 shrink-0 ${
                        plan.highlighted ? "text-slate-300" : "text-[color:var(--color-accent)]"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={plan.ctaHref ?? "#contact"}
                className={`mt-auto block w-full py-3 text-center rounded-full font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-white text-[color:var(--color-primary)] hover:bg-slate-100"
                    : "bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary-soft)]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <PaymentButton />
        </div>
      </div>
    </section>
  );
}
