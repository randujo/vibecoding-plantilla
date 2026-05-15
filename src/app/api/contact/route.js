import { NextResponse } from "next/server";
import { resend } from "@/libs/resend";
import { addRowToSheet } from "@/libs/google-sheets";
import { siteConfig } from "@/config/site";

// Escapa caracteres especiales de HTML para evitar inyeccion en el email
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Valida que el email tenga formato correcto
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  // 1. Leer y validar los datos del formulario
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "El formulario enviado no tiene el formato correcto." },
      { status: 400 }
    );
  }

  const { name, email, phone, message, service } = body;

  if (!name?.trim()) {
    return NextResponse.json(
      { error: "El nombre es requerido." },
      { status: 400 }
    );
  }
  if (!email?.trim()) {
    return NextResponse.json(
      { error: "El email es requerido." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "El email no tiene un formato valido." },
      { status: 400 }
    );
  }
  if (!message?.trim()) {
    return NextResponse.json(
      { error: "El mensaje es requerido." },
      { status: 400 }
    );
  }
  if (!service?.trim()) {
    return NextResponse.json(
      { error: "El tipo de servicio es requerido." },
      { status: 400 }
    );
  }

  // 2. Guardar en Google Sheets
  try {
    await addRowToSheet({ name, email, phone, service, message });
  } catch (error) {
    console.error("Error al guardar en Google Sheets:", error);
    return NextResponse.json(
      { error: "No pudimos guardar tu mensaje. Intentalo de nuevo en unos minutos." },
      { status: 500 }
    );
  }

  const fechaFormulario = new Date().toLocaleString("es-MX");
  const fromAddr = process.env.RESEND_FROM_EMAIL || siteConfig.email.from;

  const internalTo =
    process.env.NOTIFICATION_TO || siteConfig.email.notificationTo;

  const teamHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <p style="margin: 0 0 16px; line-height: 1.5;">
            Hola ARDITEC, <strong>${escapeHtml(name)}</strong> se ha comunicado contigo y solicita lo siguiente:
          </p>
          <p style="color: #333; line-height: 1.65; margin: 0;">
            ${escapeHtml(fechaFormulario)}<br/>
            ${escapeHtml(email)}<br/>
            ${escapeHtml(phone || "—")}<br/>
            ${escapeHtml(service)}<br/>
            ${escapeHtml(message).replace(/\n/g, "<br/>")}
          </p>
        </div>
      `;

  const teamText = `Hola ARDITEC, ${name} se ha comunicado contigo y solicita lo siguiente:\n\n${fechaFormulario}\n${email}\n${phone || "—"}\n${service}\n${message}`;

  // Remitente legible solo si fromAddr es un email simple (sin ya venir como "Nombre <email>")
  const fromTeam =
    fromAddr.includes("<") && fromAddr.includes(">")
      ? fromAddr
      : `ARDITEC — nuevo contacto <${fromAddr}>`;

  // 3. Confirmacion al visitante primero (si falla, el lead ya quedo guardado)
  try {
    await resend.emails.send({
      from: fromAddr.includes("<") ? fromAddr : `ARDITEC <${fromAddr}>`,
      to: email,
      subject: siteConfig.email.subject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <h2 style="color: #4f46e5;">Hola ${escapeHtml(name)},</h2>
          <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
          ${phone ? `<p style="color: #666;">Tu telefono: <strong>${escapeHtml(phone)}</strong></p>` : ""}
          ${service ? `<p style="color: #666;">Tipo de servicio: <strong>${escapeHtml(service)}</strong></p>` : ""}
          <p style="color: #666; margin-top: 24px;">Tu mensaje:</p>
          <blockquote style="border-left: 3px solid #4f46e5; padding-left: 16px; color: #444; margin: 8px 0;">
            ${escapeHtml(message)}
          </blockquote>
          <p style="color: #999; font-size: 14px; margin-top: 32px;">
            — ${escapeHtml(siteConfig.email.teamSignature)}
          </p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Error al enviar email de confirmacion:", error);
  }

  // 4. Aviso interno al equipo (último envío = suele aparecer arriba en Gmail si comparten bandeja)
  if (!internalTo?.trim()) {
    console.warn("contact/route: falta notificationTo / NOTIFICATION_TO; no se envia aviso interno.");
  } else {
    try {
      await resend.emails.send({
        from: fromTeam,
        to: internalTo.trim(),
        replyTo: email,
        subject: siteConfig.email.notificationSubject,
        text: teamText,
        html: teamHtml,
      });
      console.log("Aviso interno enviado a", internalTo.trim());
    } catch (error) {
      console.error("Error al enviar email de aviso interno:", error);
    }
  }

  return NextResponse.json({ success: true });
}
