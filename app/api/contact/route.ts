import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
  consent?: boolean;
};

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    if (!body.name || !body.email || !body.message || !body.consent) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // If SENDGRID_API_KEY is supplied, use SendGrid
    const sendgridKey = process.env.SENDGRID_API_KEY;
    const toEmail = process.env.TO_EMAIL || "info@coarse-co.com";
    const fromEmail = process.env.FROM_EMAIL || "no-reply@coarse-co.com";

    if (sendgridKey) {
      // Send email via SendGrid
      const payload = {
        personalizations: [{ to: [{ email: toEmail }] }],
        from: { email: fromEmail },
        subject: `New contact from ${body.name} (CCSL website)`,
        content: [
          {
            type: "text/plain",
            value: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone || "-"}\nCompany: ${body.company || "-"}\nService: ${body.service || "-"}\n\nMessage:\n${body.message}`,
          },
        ],
      };

      const sgRes = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${sendgridKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!sgRes.ok) {
        const text = await sgRes.text();
        return NextResponse.json({ error: `SendGrid error: ${text}` }, { status: 502 });
      }

      return NextResponse.json({ ok: true });
    }

    // If SMTP is configured (e.g., Zoho), send via SMTP using nodemailer
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : undefined;
    const smtpSecure = process.env.SMTP_SECURE === "true";
    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort || 587,
        secure: smtpSecure, // true for 465, false for STARTTLS
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: process.env.FROM_EMAIL || smtpUser,
        to: process.env.TO_EMAIL || smtpUser,
        replyTo: body.email,
        subject: `New contact from ${body.name} (CCSL website)`,
        text: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone || "-"}\nCompany: ${body.company || "-"}\nService: ${body.service || "-"}\n\nMessage:\n${body.message}`,
      };

      try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ ok: true });
      } catch (err) {
        return NextResponse.json({ error: `SMTP error: ${String(err)}` }, { status: 502 });
      }
    }

    // If FORMSPREE_ENDPOINT is provided, forward the form to Formspree
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (formspreeEndpoint) {
      const fsRes = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: body.name,
          email: body.email,
          _replyto: body.email,
          phone: body.phone,
          company: body.company,
          service: body.service,
          message: body.message,
        }),
      });
      if (!fsRes.ok) {
        const text = await fsRes.text();
        return NextResponse.json({ error: `Formspree error: ${text}` }, { status: 502 });
      }
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { error: "No email provider configured. Set SENDGRID_API_KEY or FORMSPREE_ENDPOINT." },
      { status: 500 }
    );
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


