import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, message } = body;

    // Validation des champs obligatoires
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format email invalide" },
        { status: 400 }
      );
    }

    // Validation longueur
    if (name.length < 2) {
      return NextResponse.json(
        { error: "Le nom doit contenir au moins 2 caractères" },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Le message doit contenir au moins 10 caractères" },
        { status: 400 }
      );
    }

    // Configuration iCloud Mail
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.me.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
    });

    // Vérification de la connexion SMTP
    await transporter.verify();

    // Mapping des types de projet pour l'affichage
    const projectTypeLabels: Record<string, string> = {
      "site-vitrine": "Site Vitrine",
      "application-web": "Application Web",
      "e-commerce": "E-commerce",
      devops: "DevOps / Infrastructure",
      autre: "Autre",
    };

    const projectTypeDisplay = projectTypeLabels[projectType] || projectType;

    // Configuration de l'email
    const mailOptions = {
      from: `"Portfolio Amin MITO" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `🚀 Nouveau contact Portfolio - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

            <!-- Header -->
            <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">
                📬 Nouveau message
              </h1>
              <p style="color: #bfdbfe; margin: 10px 0 0 0; font-size: 16px;">
                Depuis ton portfolio professionnel
              </p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">

              <!-- Info client -->
              <div style="background-color: #f1f5f9; border-left: 4px solid #2563eb; padding: 24px; margin-bottom: 24px; border-radius: 0 12px 12px 0;">
                <h2 style="color: #1e293b; margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">
                  👤 Informations du contact
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 120px;">Nom</td>
                    <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 500;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td>
                    <td style="padding: 8px 0;">
                      <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-size: 14px; font-weight: 500;">${email}</a>
                    </td>
                  </tr>
                  ${
                    phone
                      ? `
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Téléphone</td>
                    <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 500;">
                      <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                    </td>
                  </tr>
                  `
                      : ""
                  }
                  ${
                    projectType
                      ? `
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Type de projet</td>
                    <td style="padding: 8px 0;">
                      <span style="background-color: #dbeafe; color: #1e40af; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 500;">${projectTypeDisplay}</span>
                    </td>
                  </tr>
                  `
                      : ""
                  }
                </table>
              </div>

              <!-- Message -->
              <div style="margin-bottom: 32px;">
                <h3 style="color: #1e293b; margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">
                  💬 Message
                </h3>
                <div style="background-color: #ffffff; border: 1px solid #e2e8f0; padding: 24px; border-radius: 12px; line-height: 1.7; color: #334155; font-size: 15px;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </div>

              <!-- Action button -->
              <div style="text-align: center; margin: 32px 0;">
                <a href="mailto:${email}?subject=Re: Votre message sur mon portfolio" style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: 600; font-size: 15px; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);">
                  ✉️ Répondre directement
                </a>
              </div>

            </div>

            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 24px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 13px; margin: 0 0 8px 0;">
                Message envoyé depuis <strong>aminmito.dev</strong>
              </p>
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                ${new Date().toLocaleDateString("fr-FR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email envoyé avec succès !" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("❌ Erreur Nodemailer:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Erreur inconnue";

    return NextResponse.json(
      {
        error: "Erreur lors de l'envoi du message.",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
