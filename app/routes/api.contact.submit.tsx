import type { Route } from "./+types/api.contact.submit";
import nodemailer from "nodemailer";

export async function action({ request }: Route.ActionArgs) {
  // Parse the JSON body
  const body = await request.json();
  const { fullName, email, message } = body;

  // Basic validation
  if (!fullName || !email || !message) {
    return Response.json(
      { ok: false, error: "Alle Felder sind erforderlich." },
      { status: 400 }
    );
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json(
      { ok: false, error: "Ungültige E-Mail-Adresse." },
      { status: 400 }
    );
  }

  // Get SMTP config from environment
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || "kontakt@byteserv.it";
  const smtpTo = process.env.SMTP_TO || "hello@byteserv.it";

  // Check if SMTP is configured
  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.error("SMTP configuration is incomplete in environment variables");
    console.log("Contact Form Submission (Email not sent - no SMTP config):", {
      fullName,
      email,
      message,
      timestamp: new Date().toISOString(),
    });
    return Response.json(
      { ok: true, message: "Ihre Anfrage wurde erfolgreich übermittelt." },
      { status: 200 }
    );
  }

  try {
    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: parseInt(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      // Für selbst-signierte Zertifikate (optional):
      // tls: {
      //   rejectUnauthorized: false
      // }
    });

    // HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="de">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background: white;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 600;
            }
            .header p {
              margin: 8px 0 0 0;
              opacity: 0.95;
              font-size: 14px;
            }
            .content {
              padding: 30px;
            }
            .info-row {
              margin: 15px 0;
              padding: 15px;
              background: #f8f9fa;
              border-radius: 8px;
              border-left: 4px solid #667eea;
            }
            .label {
              font-weight: 600;
              color: #667eea;
              display: block;
              margin-bottom: 5px;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .value {
              color: #333;
              font-size: 15px;
            }
            .message-box {
              background: #f8f9fa;
              padding: 20px;
              border-left: 4px solid #667eea;
              margin-top: 20px;
              border-radius: 8px;
            }
            .footer {
              padding: 20px 30px;
              background: #f8f9fa;
              text-align: center;
              font-size: 12px;
              color: #666;
            }
            a {
              color: #667eea;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 Neue Kontaktanfrage</h1>
              <p>ByteServ Website</p>
            </div>
            <div class="content">
              <div class="info-row">
                <span class="label">Name</span>
                <div class="value">${fullName}</div>
              </div>
              <div class="info-row">
                <span class="label">E-Mail</span>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="info-row">
                <span class="label">Zeitstempel</span>
                <div class="value">${new Date().toLocaleString("de-DE", {
                  dateStyle: "full",
                  timeStyle: "short",
                })}</div>
              </div>
              <div class="message-box">
                <span class="label">Nachricht</span>
                <div class="value" style="margin-top: 10px; white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>Diese E-Mail wurde automatisch über das Kontaktformular auf byteserv.it generiert.</p>
              <p>Sie können direkt auf diese E-Mail antworten, um mit ${fullName} in Kontakt zu treten.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Plain text fallback
    const textContent = `
Neue Kontaktanfrage - ByteServ

Name: ${fullName}
E-Mail: ${email}
Zeitstempel: ${new Date().toLocaleString("de-DE")}

Nachricht:
${message}

---
Diese E-Mail wurde über das Kontaktformular auf byteserv.it generiert.
Sie können direkt auf diese E-Mail antworten, um mit ${fullName} in Kontakt zu treten.
    `.trim();

    // Send email
    const info = await transporter.sendMail({
      from: `"ByteServ Kontaktformular" <${smtpFrom}>`,
      to: smtpTo,
      replyTo: email,
      subject: `Ihre Anfrage an ByteServ, ${fullName}`,
      text: textContent,
      html: htmlContent,
    });

    console.log("✅ Email sent successfully:", {
      messageId: info.messageId,
      from: fullName,
      email: email,
      timestamp: new Date().toISOString(),
    });

    return Response.json(
      { ok: true, message: "Ihre Anfrage wurde erfolgreich übermittelt." },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error sending email:", error);

    // Log the submission even if email fails
    console.log("Contact Form Submission (Email failed):", {
      fullName,
      email,
      message,
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString(),
    });

    // Return error to user if email fails
    return Response.json(
      {
        ok: false,
        error: "Es gab ein Problem beim Versenden Ihrer Nachricht. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.",
      },
      { status: 500 }
    );
  }
}
