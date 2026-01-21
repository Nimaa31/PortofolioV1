import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  try {
    // Vérification des variables d'environnement
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        {
          success: false,
          error: "Variables d'environnement EMAIL_USER ou EMAIL_PASS manquantes",
          hint: "Configure ton fichier .env.local avec les identifiants iCloud",
        },
        { status: 500 }
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

    // Test de la connexion SMTP
    await transporter.verify();

    return NextResponse.json({
      success: true,
      message: "Configuration iCloud Mail OK ✅",
      email: process.env.EMAIL_USER,
      smtp: "smtp.mail.me.com:587",
    });
  } catch (error: unknown) {
    console.error("❌ Erreur test email:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Erreur inconnue";

    // Messages d'aide selon l'erreur
    let hint = "";
    if (errorMessage.includes("Invalid login")) {
      hint =
        "Vérifie ton mot de passe d'application iCloud. Génère-en un nouveau sur appleid.apple.com";
    } else if (errorMessage.includes("ECONNREFUSED")) {
      hint = "Impossible de se connecter au serveur SMTP. Vérifie ta connexion internet.";
    } else if (errorMessage.includes("self signed certificate")) {
      hint = "Problème de certificat SSL. La configuration TLS devrait le gérer.";
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        hint: hint || "Vérifie ta configuration iCloud et le mot de passe d'application",
      },
      { status: 500 }
    );
  }
}
