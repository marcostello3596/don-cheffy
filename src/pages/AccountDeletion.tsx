import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trash2, Mail, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const accountDeletionContent = {
  en: {
    title: "Delete Account & Data",
    subtitle: "We respect your privacy and provide simple options to delete your account and associated data.",
    inAppTitle: "Option 1: Delete Instantly In-App (Recommended)",
    inAppSteps: [
      "Open the ReciList app on your mobile device.",
      "Go to the Settings screen (the gear icon).",
      "Tap on \"Delete Account\" or \"Eliminar Cuenta\".",
      "Confirm the deletion. Your account, credentials, lists, and recipes will be immediately and permanently deleted from our active databases."
    ],
    emailTitle: "Option 2: Request Deletion via Support",
    emailDescription: "If you cannot access the app or wish to request deletion manually, please send an email to our support team:",
    emailInstruction: "Send an email to support@recilist.app from your registered email address with the subject \"Account Deletion Request\". If possible, include your Firebase UID.",
    policyTitle: "What happens to my data?",
    policyDescription: "When you delete your account, your profile metadata (email, Firebase UID) and all user-generated content (recipes, categories, shopping lists) are immediately removed from our active database. Please note that server backups and transaction logs are retained and overwritten periodically in the course of standard operations. We do not retain active copies of your data once your account is deleted."
  },
  es: {
    title: "Eliminar Cuenta y Datos",
    subtitle: "Respetamos tu privacidad y te ofrecemos opciones sencillas para eliminar tu cuenta y los datos asociados.",
    inAppTitle: "Opción 1: Eliminar al instante desde la App (Recomendado)",
    inAppSteps: [
      "Abrí la app ReciList en tu dispositivo móvil.",
      "Navegá a la pantalla de Configuración (ícono de engranaje).",
      "Tocá en “Eliminar cuenta” o “Delete Account”.",
      "Confirmá la acción. Tu cuenta, credenciales, recetas y listas se borrarán de forma inmediata y definitiva de nuestras bases de datos activas."
    ],
    emailTitle: "Opción 2: Solicitar eliminación por correo electrónico",
    emailDescription: "Si no tenés acceso a la app o preferís solicitar la eliminación de forma manual, podés escribir a nuestro equipo de soporte:",
    emailInstruction: "Enviá un correo a support@recilist.app desde tu email registrado con el asunto “Solicitud de Eliminación de Cuenta”. Si lo tenés a mano, incluí tu Firebase UID.",
    policyTitle: "¿Qué sucede con mis datos?",
    policyDescription: "Al eliminar la cuenta, tu perfil (email, Firebase UID) y todo el contenido creado (recetas, categorías, listas de compras) se borran de inmediato de la base de datos activa. Tené en cuenta que los respaldos del servidor y los registros de transacciones se conservan y sobrescriben de forma periódica en el transcurso de las operaciones estándar. No conservamos copias activas de tus datos una vez que se elimina tu cuenta."
  }
};

const AccountDeletion = ({ lang }: { lang: "en" | "es" }) => {
  const { setLang } = useLanguage();

  // Sync language context with route lang
  useEffect(() => {
    setLang(lang);
  }, [lang, setLang]);

  const doc = accountDeletionContent[lang];
  const pageTitle = lang === "es" ? "Eliminar Cuenta | ReciList" : "Delete Account | ReciList";
  const pageDescription = lang === "es"
    ? "Instrucciones detalladas sobre cómo eliminar tu cuenta de ReciList y todos tus datos personales."
    : "Detailed instructions on how to delete your ReciList account and all your personal data.";
  const canonicalUrl = `https://recilist.app${lang === "es" ? "/es" : ""}/account-deletion`;

  useSEO({
    title: pageTitle,
    description: pageDescription,
    canonicalUrl,
    lang,
    path: "account-deletion",
  });

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {lang === "es" ? "Volver al Inicio" : "Back to Home"}
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              {doc.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {doc.subtitle}
            </p>
          </div>

          <div className="grid gap-8">
            {/* Option 1: In-App */}
            <div className="bg-background border border-border rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#5FD38D]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-6">
                <Trash2 className="h-6 w-6 text-primary shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  {doc.inAppTitle}
                </h2>
              </div>
              <ol className="space-y-3.5 text-muted-foreground text-sm sm:text-base leading-relaxed pl-4 list-decimal marker:text-primary marker:font-bold">
                {doc.inAppSteps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>

            {/* Option 2: Email */}
            <div className="bg-background border border-border rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#5FD38D]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-primary shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  {doc.emailTitle}
                </h2>
              </div>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                {doc.emailDescription}
              </p>
              <div className="bg-muted/40 border border-border rounded-2xl p-5 mb-4 text-sm sm:text-base text-foreground font-medium">
                {doc.emailInstruction}
              </div>
              <a
                href="mailto:support@recilist.app?subject=Account%20Deletion%20Request"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:bg-primary/95 shadow-md shadow-primary/10 active:scale-95 transition-all text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>{lang === "es" ? "Enviar Correo" : "Send Email"}</span>
              </a>
            </div>

            {/* Data Policy */}
            <div className="bg-background border border-border rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="h-6 w-6 text-amber-500 shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  {doc.policyTitle}
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {doc.policyDescription}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AccountDeletion;
