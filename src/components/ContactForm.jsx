"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");

  const {
    heading,
    subheading,
    form: formConfig,
    schedulingUrl,
    schedulingCta,
    whatsappNumber,
    callCta,
    whatsappHelper,
    callHelper,
    whatsappCta,
  } = siteConfig.contact;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Limpia el error del campo cuando el usuario empieza a corregirlo
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Por favor escribe tu nombre.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Por favor escribe tu correo electrónico.";
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Ese correo electrónico no parece válido. Ejemplo: nombre@correo.com";
    }
    if (formConfig.phoneRequired && !form.phone.trim()) {
      newErrors.phone = "Por favor escribe tu teléfono.";
    }
    if (!form.service.trim()) {
      newErrors.service = "Por favor selecciona un tipo de servicio.";
    }
    if (!form.message.trim()) {
      newErrors.message = "Por favor describe tu proyecto.";
    }
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      service: form.service,
      message: form.message,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || formConfig.errorMessage);
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      setErrors({});
    } catch {
      setServerError(formConfig.errorMessage);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-[color:var(--color-surface)]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="title-main-duotone text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {heading}
          </h2>
          <p className="text-lg text-[color:var(--color-text-muted)]">
            {subheading}
          </p>
          {schedulingUrl && (
            <a
              href={schedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2.5 border border-[color:var(--color-primary)] text-[color:var(--color-primary)] font-semibold rounded-full hover:bg-slate-100 transition-colors text-sm"
            >
              {schedulingCta}
            </a>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-[color:var(--color-bg)] border border-[color:var(--color-surface-strong)] rounded-2xl p-6 md:p-8 space-y-5 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-[color:var(--color-text)] mb-2">
                {formConfig.nameLabel ?? "Nombre completo"}
                <span className="text-red-500" aria-hidden="true">
                  {" "}
                  *
                </span>
                {formConfig.fieldRequiredNote && (
                  <span className="sr-only"> ({formConfig.fieldRequiredNote})</span>
                )}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder={formConfig.namePlaceholder}
                autoComplete="name"
                aria-required="true"
                className={`w-full px-3.5 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)] focus:border-transparent transition ${
                  errors.name ? "border-red-400 bg-red-50" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Correo electrónico */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[color:var(--color-text)] mb-2">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder={formConfig.emailPlaceholder}
                className={`w-full px-3.5 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)] focus:border-transparent transition ${
                  errors.email ? "border-red-400 bg-red-50" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Teléfono / WhatsApp */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[color:var(--color-text)] mb-2">
                {formConfig.phoneLabel ?? "Teléfono / WhatsApp"}
                {formConfig.phoneRequired && (
                  <>
                    <span className="text-red-500" aria-hidden="true">
                      {" "}
                      *
                    </span>
                    {formConfig.fieldRequiredNote && (
                      <span className="sr-only"> ({formConfig.fieldRequiredNote})</span>
                    )}
                  </>
                )}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder={formConfig.phonePlaceholder}
                autoComplete="tel"
                aria-required={formConfig.phoneRequired ? "true" : "false"}
                className={`w-full px-3.5 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)] focus:border-transparent transition ${
                  errors.phone ? "border-red-400 bg-red-50" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* Tipo de servicio */}
            <div>
              <label htmlFor="service" className="block text-xs font-semibold text-[color:var(--color-text)] mb-2">
                Tipo de servicio
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)] focus:border-transparent transition ${
                  errors.service ? "border-red-400 bg-red-50" : "border-gray-300"
                }`}
              >
                <option value="">{formConfig.servicePlaceholder}</option>
                {(formConfig.serviceOptions || []).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1.5 text-sm text-red-600">{errors.service}</p>
              )}
            </div>
          </div>

          {/* Descripción del proyecto */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[color:var(--color-text)] mb-2">
              Descripción de tu proyecto
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder={formConfig.messagePlaceholder}
              className={`w-full px-3.5 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)] focus:border-transparent transition resize-none ${
                errors.message ? "border-red-400 bg-red-50" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 bg-[#2f80ed] text-white font-semibold rounded-xl hover:bg-[color:var(--color-primary-soft)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? formConfig.sendingButton : formConfig.submitButton}
          </button>

          {whatsappNumber && (
            <div className="grid gap-5 pt-1 sm:grid-cols-2">
              <div className="flex flex-col items-center text-center">
                <p className="mb-2 text-xs font-semibold text-slate-400">{whatsappHelper}</p>
                <a
                  href={`https://wa.me/52${whatsappNumber.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-[#b9e6cb] bg-[#e9f8ef] px-4 py-2 text-sm font-semibold text-[#2f9e62] transition-colors hover:bg-[#dff3e7]"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#28c76f]" />
                  {whatsappCta}
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <p className="mb-2 text-xs font-semibold text-slate-400">{callHelper}</p>
                <a
                  href={`tel:+52${whatsappNumber.replace(/\D/g, "")}`}
                  className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-[#c5d9ed] bg-[#eef4fb] px-4 py-2 text-sm font-semibold text-[color:var(--color-primary)] transition-colors hover:bg-[#e2ecf8]"
                >
                  <svg className="size-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {callCta}{" "}
                  <span className="font-normal opacity-90">
                    ({whatsappNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3")})
                  </span>
                </a>
              </div>
            </div>
          )}

          {status === "success" && (
            <p className="text-center text-green-600 font-medium">
              {formConfig.successMessage}
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-600 font-medium">
              {serverError || formConfig.errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
