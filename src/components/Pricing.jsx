import PaymentButton from "@/components/PaymentButton";
import { siteConfig } from "@/config/site";

export default function Pricing() {
  const { heading, subheading, plans } = siteConfig.pricing;

  return (
    <section id="pricing" className="py-20 px-6 bg-[color:var(--color-surface)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="title-main-duotone text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {heading}
          </h2>
          <p className="text-lg text-[color:var(--color-text-muted)] max-w-3xl mx-auto">
            {subheading}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border ${
                plan.highlighted
                  ? "border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white shadow-xl scale-105"
                  : "border-[color:var(--color-surface-strong)] bg-[color:var(--color-bg)] shadow-sm"
              }`}
            >
              <h3
                className={`text-lg font-semibold mb-1 ${
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
                <span className="text-4xl font-bold">{plan.price}</span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-slate-300" : "text-[color:var(--color-text-muted)]"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
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
                href="#contact"
                className={`block w-full py-3 text-center rounded-full font-medium transition-colors ${
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
