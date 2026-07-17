export interface LegalSection {
  title: string;
  content: string | string[];
}

export interface LegalDoc {
  title: string;
  subtitle: string;
  effectiveDate: string;
  sections: LegalSection[];
}

export const privacyPolicy: Record<"en" | "es", LegalDoc> = {
  en: {
    title: "Privacy Policy",
    subtitle: "How we collect, use, and protect your information when using ReciList.",
    effectiveDate: "Effective Date: July 17, 2026",
    sections: [
      {
        title: "1. Data Controller",
        content: [
          "The services are operated by an individual developer located in Switzerland. For any questions, requests, or concerns regarding your privacy and data protection rights, please contact us at support@recilist.app.",
          "Our data processing operations are governed by the Swiss Federal Act on Data Protection (FADP) and, where applicable, the General Data Protection Regulation (GDPR)."
        ]
      },
      {
        title: "2. Information We Collect",
        content: [
          "We collect information that you provide to us directly, information collected automatically, and information from third-party services. Specifically, this includes:",
          "• Account Information: Your email address, Firebase Unique Identifier (Firebase UID), and your selected language setting.",
          "• User-Created Content: Recipes, ingredients, shopping lists, customized categories, photographs uploaded to the service, and any other text or content you create or input.",
          "• Share Extension Content: When using our iOS/Android Share Extension, we only receive and process the specific link or text you explicitly choose to share with ReciList to import recipes. We do NOT access, track, or collect your general web browsing history or activity.",
          "• URL Imports: When you import recipes from a website URL, we temporarily retrieve and process the content of that webpage to parse and extract the ingredients and steps.",
          "• Device and Technical Data: System usage events, technical details, app version, device model, operating system version, error and crash logs, and diagnostic information necessary to keep the app functional and secure.",
          "• Subscriptions and Purchase Metadata: We track your subscription status, purchased products, entitlements, and transaction metadata. All financial payments are processed securely by Apple or Google. ReciList does not receive, collect, or store your credit card numbers or full financial payment information."
        ]
      },
      {
        title: "3. Service Providers We Use",
        content: [
          "To provide and improve our services, we share necessary data with trusted third-party providers. We do not sell your personal data. The providers utilized are:",
          "• Google Firebase (Authentication, Firestore, Storage, Analytics, and Crashlytics): Used to authenticate users, store database records, upload images, analyze app usage, track errors, and monitor application stability.",
          "• Google Gemini (AI Processor): Used to process, structure, and estimate nutritional information from raw recipe text, URLs, or user inputs. Data sent to Gemini is limited to the text, links, or contents of the recipe you explicitly ask to structure.",
          "• RevenueCat: Used to manage subscription states, entitlements, and transaction validation.",
          "• Resend: Used to deliver transactional emails, support notifications, or system alerts.",
          "• Unsplash: Used to search and retrieve royalty-free placeholder images for recipes. No personal user data is shared with Unsplash.",
          "• Apple (App Store) & Google (Play Store): Used to process in-app purchases, validate subscriptions, and handle app distribution."
        ]
      },
      {
        title: "4. Purposes of Data Processing",
        content: [
          "We process your personal information for the following purposes:",
          "• To operate, maintain, and provide the core features of ReciList (including saving lists, sharing, and organizing ingredients by category).",
          "• To process and generate structured recipes and nutritional info using Google Gemini AI.",
          "• To process subscriptions and manage premium entitlements via RevenueCat.",
          "• To communicate with you regarding customer support, updates, and service-related notifications.",
          "• To monitor, detect, and troubleshoot technical errors, performance issues, and crashes.",
          "• To comply with legal requirements and enforce our Terms of Use."
        ]
      },
      {
        title: "5. Legal Bases for Processing",
        content: [
          "We process your data under the following legal bases:",
          "• Performance of a Contract: To provide the services you request when creating an account and using the app.",
          "• Consent: For utilizing your camera and photo library (when granted via system prompts) and processing your inputs through AI features.",
          "• Legitimate Interests: To monitor app stability, analyze usage analytics, improve our product, and secure our systems."
        ]
      },
      {
        title: "6. Data Retention and Security",
        content: [
          "We retain your personal data only as long as necessary to operate the service and comply with our legal obligations. When you delete your account, we delete your account credentials, email, and user-generated recipes and lists from our active databases.",
          "Please note that server backups and transaction logs are retained and overwritten periodically in the course of standard operations. We implement industry-standard technical and organizational security measures to protect your data, but no method of transmission over the Internet is 100% secure."
        ]
      },
      {
        title: "7. International Data Transfers",
        content: [
          "Our service providers (such as Google and RevenueCat) operate globally, primarily in the United States. By using ReciList, you acknowledge that your personal data may be transferred to and processed in countries outside of your residence, which may have different data protection laws than your home country."
        ]
      },
      {
        title: "8. Your Data Rights",
        content: [
          "Depending on your jurisdiction (e.g., Swiss FADP, GDPR), you have the right to:",
          "• Access and export your personal data.",
          "• Correct or update inaccurate data.",
          "• Delete your personal data completely.",
          "• Restrict or object to the processing of your data.",
          "To exercise these rights, you can use the account deletion tools within the app (Settings > Delete Account) or request deletion via our website at /account-deletion. For other rights requests, please contact us at support@recilist.app."
        ]
      },
      {
        title: "9. Children's Privacy",
        content: [
          "ReciList is not intended for or directed to children under 13 years of age. We do not knowingly collect personal data from children. If we become aware that we have inadvertently collected personal data from a child under 13, we will take steps to delete that information as quickly as possible."
        ]
      },
      {
        title: "10. Changes to this Policy",
        content: [
          "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. We encourage you to review this page periodically to stay informed about how we protect your information."
        ]
      }
    ]
  },
  es: {
    title: "Política de Privacidad",
    subtitle: "Cómo recopilamos, utilizamos y protegemos tu información al usar ReciList.",
    effectiveDate: "Fecha de Entrada en Vigencia: 17 de julio de 2026",
    sections: [
      {
        title: "1. Responsable del Tratamiento de Datos",
        content: [
          "Los servicios son operados por un desarrollador individual ubicado en Suiza. Si tenés alguna pregunta, solicitud o inquietud sobre tus derechos de privacidad y protección de datos, podés contactarnos en: support@recilist.app.",
          "Nuestras actividades de procesamiento de datos están reguladas por la Ley Federal Suiza de Protección de Datos (LPD/FADP) y, cuando corresponda, por el Reglamento General de Protección de Datos (RGPD/GDPR)."
        ]
      },
      {
        title: "2. Información que Recopilamos",
        content: [
          "Recopilamos información que nos proporcionás directamente, información recopilada automáticamente e información de servicios de terceros. Específicamente, esto incluye:",
          "• Información de la Cuenta: Tu dirección de correo electrónico, Identificador Único de Firebase (Firebase UID) y la configuración de idioma seleccionada.",
          "• Contenido Creado por el Usuario: Recetas, ingredientes, listas de supermercado, categorías personalizadas, fotografías que subas al servicio y cualquier otro texto o contenido que crees o ingreses.",
          "• Extensión para Compartir (Share Extension): Cuando usás nuestra Share Extension de iOS/Android, solo recibimos y procesamos el enlace o texto específico que elegís compartir explícitamente con ReciList para importar recetas. NO accedemos, registramos ni recopilamos tu historial de navegación general ni tu actividad en internet.",
          "• Importación de Recetas desde URLs: Cuando importás recetas desde la URL de un sitio web, recuperamos y procesamos temporalmente el contenido de esa página web para analizar y extraer los ingredientes y pasos.",
          "• Datos Técnicos y de Dispositivo: Eventos de uso del sistema, detalles técnicos, versión de la app, modelo de dispositivo, versión del sistema operativo, registros de errores y fallos, y datos de diagnóstico necesarios para mantener la aplicación segura y operativa.",
          "• Metadatos de Suscripción y Transacciones: Hacemos un seguimiento del estado de tu suscripción, productos adquiridos, beneficios (entitlements) y metadatos de transacciones. Todos los pagos son procesados de forma segura por Apple o Google. ReciList no recibe, recopila ni almacena los números de tus tarjetas de crédito ni información financiera de pago completa."
        ]
      },
      {
        title: "3. Proveedores de Servicios Utilizados",
        content: [
          "Para proporcionar y mejorar nuestros servicios, compartimos datos necesarios con proveedores de servicios de confianza. No vendemos tus datos personales. Los proveedores que utilizamos son:",
          "• Google Firebase (Authentication, Firestore, Storage, Analytics y Crashlytics): Utilizado para autenticar usuarios, almacenar registros de la base de datos, guardar imágenes, analizar el uso de la app, realizar seguimiento de errores y fallos, y monitorear la estabilidad de la aplicación.",
          "• Google Gemini (Procesador de IA): Utilizado para procesar, estructurar y estimar información nutricional a partir de texto libre, URLs o entradas de usuario. Los datos enviados a Gemini se limitan al texto, enlaces o contenido de la receta que solicitás estructurar de manera explícitamente.",
          "• RevenueCat: Utilizado para gestionar el estado de las suscripciones, entitlements y validación de transacciones.",
          "• Resend: Utilizado para enviar correos electrónicos transaccionales, notificaciones de soporte o alertas del sistema.",
          "• Unsplash: Utilizado para buscar y obtener imágenes de marcador de posición libres de derechos para las recetas. No se comparten datos personales del usuario con Unsplash.",
          "• Apple (App Store) y Google (Play Store): Utilizados para procesar compras dentro de la aplicación, validar suscripciones y gestionar la distribución de la app."
        ]
      },
      {
        title: "4. Propósitos del Tratamiento de Datos",
        content: [
          "Procesamos tu información personal para los siguientes fines:",
          "• Operar, mantener y proporcionar las funciones principales de ReciList (incluyendo guardar listas, compartir y organizar ingredientes por categoría).",
          "• Procesar y generar recetas estructuradas e información nutricional utilizando la IA de Google Gemini.",
          "• Procesar suscripciones y gestionar entitlements premium a través de RevenueCat.",
          "• Comunicarnos con vos para ofrecerte soporte técnico, actualizaciones y notificaciones relacionadas con el servicio.",
          "• Monitorear, detectar y resolver errores técnicos, problemas de rendimiento y fallos en la app.",
          "• Cumplir con las obligaciones legales aplicables y hacer cumplir nuestros Términos de Uso."
        ]
      },
      {
        title: "5. Bases Legales para el Tratamiento",
        content: [
          "Tratamos tus datos bajo las siguientes bases legales:",
          "• Ejecución de un Contrato: Para proporcionar los servicios que solicitás al crear una cuenta y usar la aplicación.",
          "• Consentimiento: Para utilizar tu cámara y biblioteca de fotos (cuando otorgás permiso mediante los avisos del sistema) y procesar tus datos a través de las funciones de IA.",
          "• Intereses Legítimos: Para monitorear la estabilidad de la app, analizar estadísticas de uso, mejorar nuestro producto y proteger nuestros sistemas."
        ]
      },
      {
        title: "6. Retención y Seguridad de Datos",
        content: [
          "Retenemos tus datos personales únicamente durante el tiempo que sea necesario para operar el servicio y cumplir con nuestras obligaciones legales. Cuando eliminás tu cuenta, borramos tus credenciales de cuenta, correo electrónico y las recetas y listas generadas por vos de nuestras bases de datos activas.",
          "Tené en cuenta que los respaldos del servidor y los registros de transacciones se conservan y sobrescriben de forma periódica en el transcurso de las operaciones estándar. Implementamos medidas de seguridad técnicas y organizativas estándar de la industria para proteger tus datos, pero ningún método de transmisión por Internet es 100% seguro."
        ]
      },
      {
        title: "7. Transferencias Internacionales de Datos",
        content: [
          "Nuestros proveedores de servicios (como Google y RevenueCat) operan a nivel mundial, principalmente en los Estados Unidos. Al utilizar ReciList, reconocés que tus datos personales pueden ser transferidos y procesados en países fuera de tu residencia, que pueden tener leyes de protección de datos diferentes a las de tu país de origen."
        ]
      },
      {
        title: "8. Tus Derechos sobre los Datos",
        content: [
          "Dependiendo de tu jurisdicción (ej. LPD suiza, RGPD), tenés derecho a:",
          "• Acceder y exportar tus datos personales.",
          "• Corregir o actualizar datos inexactos.",
          "• Eliminar tus datos personales por completo.",
          "• Restringir u oponerte al tratamiento de tus datos.",
          "Para ejercer estos derechos, podés usar las herramientas de eliminación de cuenta dentro de la app (Configuración > Eliminar Cuenta) o solicitar la eliminación a través de nuestro sitio web en /account-deletion. Para otras solicitudes de derechos, podés contactarnos en support@recilist.app."
        ]
      },
      {
        title: "9. Privacidad Infantil",
        content: [
          "ReciList no está dirigido a niños menores de 13 años. No recopilamos a sabiendas datos personales de niños. Si detectamos que hemos recopilado involuntariamente datos personales de un niño menor de 13 años, tomaremos medidas para eliminar esa información lo antes posible."
        ]
      },
      {
        title: "10. Cambios en esta Política",
        content: [
          "Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva versión en esta página y actualizando la fecha de entrada en vigencia. Te recomendamos revisar esta página periódicamente para mantenerte informado sobre cómo protegemos tu información."
        ]
      }
    ]
  }
};

export const termsOfUse: Record<"en" | "es", LegalDoc> = {
  en: {
    title: "Terms of Use",
    subtitle: "Terms and conditions governing your use of ReciList.",
    effectiveDate: "Effective Date: July 17, 2026",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: [
          "By downloading, accessing, or using ReciList (the 'App' or 'Service'), you agree to be bound by these Terms of Use ('Terms'). If you do not agree to these Terms, please do not access or use the Service.",
          "These Terms constitute a binding legal agreement between you and the individual developer of ReciList located in Switzerland ('ReciList', 'we', 'us', or 'our')."
        ]
      },
      {
        title: "2. Eligibility and Account Responsibility",
        content: [
          "You must be at least 13 years old to create an account and use the Service. By using ReciList, you represent and warrant that you meet this age requirement.",
          "You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account."
        ]
      },
      {
        title: "3. Content and Use of AI Features",
        content: [
          "ReciList allows you to manually input recipes, import recipes via website URLs using the Share Extension or URL parser, or generate/structure recipes and nutritional macros using Artificial Intelligence (powered by Google Gemini).",
          "• User Content Rights: You retain all ownership rights in the content you create, upload, or share in the App. You represent and warrant that you own or have the necessary rights to use and import any content you submit.",
          "• AI Limitations: Recipe generation and parsing utilize artificial intelligence. You acknowledge that AI technology is subject to errors, inaccuracies, and hallucinations. ReciList does not guarantee the accuracy, completeness, or safety of any AI-generated recipes, instructions, or ingredients. Always use your common sense and kitchen safety standards.",
          "• Nutrition Disclaimer: Nutritional values, macronutrients, and estimations provided by the App (using Google Gemini calculations) are calculations for informational purposes only. They do NOT constitute medical, dietary, or professional nutritional advice. ReciList is not liable for errors in macro calculations.",
          "• Allergies and Food Safety: You are solely responsible for verifying ingredients, potential allergens, food safety, and cooking temperatures. ReciList assumes no responsibility for adverse reactions, illness, or injury resulting from prepared recipes."
        ]
      },
      {
        title: "4. Acceptable Use and Restrictions",
        content: [
          "You agree not to use the Service to:",
          "• Violate any applicable local, national, or international laws.",
          "• Upload or share content that is offensive, harmful, defamatory, or infringes on third-party intellectual property rights.",
          "• Attempt to scrape, reverse engineer, or exploit the App, APIs, or underlying AI systems.",
          "• Create multiple accounts to abuse free tiers or bypass subscription limitations."
        ]
      },
      {
        title: "5. ReciList Plus Subscriptions",
        content: [
          "Some features of the Service require a paid subscription to 'ReciList Plus'.",
          "• Plans and Pricing: We offer monthly and annual subscription plans. Pricing details are displayed within the App and may vary by country and region. All prices are subject to change.",
          "• Billing and Auto-Renewal: Subscriptions are billed through Apple (App Store) or Google (Play Store) using RevenueCat integration. Payment will be charged to your store account upon confirmation of purchase. Subscriptions automatically renew at the end of each billing period unless auto-renew is turned off at least 24 hours before the end of the current period.",
          "• Management and Cancellation: You can manage or cancel your subscription at any time through your Apple App Store or Google Play Store settings.",
          "• In-App Restoration: If you reinstall the App or change devices, you can restore your purchases using the 'Restore Purchases' or 'Restaurar compras' button on the subscription screen inside the App (using the same App Store / Google Play account).",
          "• Free Trials: Free trials, if any, are offered and configured directly inside the App. If a free trial is active, you will be billed only after the trial period expires unless cancelled at least 24 hours prior to expiration.",
          "• Refunds: All payment refunds are managed exclusively by Apple or Google according to their respective store policies. ReciList cannot process refunds directly.",
          "• EULA: These terms complement and do not contradict Apple's standard Licensed Application End User License Agreement (EULA) or Google Play's Terms of Service."
        ]
      },
      {
        title: "6. Intellectual Property",
        content: [
          "All intellectual property rights in the App design, logo, code, and features (excluding User Content) are owned by or licensed to ReciList. You are granted a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes."
        ]
      },
      {
        title: "7. Availability, Modifications, and Termination",
        content: [
          "We reserve the right to modify, suspend, or terminate the Service or your account at any time, with or without notice, if we believe you have violated these Terms. We do not guarantee that the Service will be available uninterrupted or error-free."
        ]
      },
      {
        title: "8. Disclaimer of Warranties and Limitation of Liability",
        content: [
          "THE SERVICE IS PROVIDED ON AN 'AS IS' AND 'AS AVAILABLE' BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, RECILIST DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED. IN NO EVENT SHALL RECILIST BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OF OR INABILITY TO USE THE SERVICE."
        ]
      },
      {
        title: "9. Governing Law and Jurisdiction",
        content: [
          "These Terms and any dispute arising out of them shall be governed by and construed in accordance with the laws of Switzerland. Any legal action arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Switzerland."
        ]
      },
      {
        title: "10. Contact Information",
        content: [
          "For any questions, support requests, or inquiries regarding these Terms, please contact us at support@recilist.app."
        ]
      }
    ]
  },
  es: {
    title: "Términos de Uso",
    subtitle: "Términos y condiciones que rigen el uso de ReciList.",
    effectiveDate: "Fecha de Entrada en Vigencia: 17 de julio de 2026",
    sections: [
      {
        title: "1. Aceptación de los Términos",
        content: [
          "Al descargar, acceder o utilizar ReciList (la 'Aplicación' o el 'Servicio'), aceptás quedar sujeto a estos Términos de Uso ('Términos'). Si no estás de acuerdo con estos Términos, por favor no accedas ni utilices el Servicio.",
          "Estos Términos constituyen un acuerdo legal vinculante entre vos y el desarrollador individual de ReciList ubicado en Suiza ('ReciList', 'nosotros' o 'nuestro')."
        ]
      },
      {
        title: "2. Elegibilidad y Responsabilidad de la Cuenta",
        content: [
          "Debés tener al menos 13 años para crear una cuenta y utilizar el Servicio. Al utilizar ReciList, declarás y garantizás que cumplís con este requisito de edad.",
          "Sos el único responsable de mantener la confidencialidad de tus credenciales de cuenta y de todas las actividades que ocurran bajo tu cuenta. Aceptás notificarnos de inmediato cualquier uso no autorizado de tu cuenta."
        ]
      },
      {
        title: "3. Contenido y Uso de Funciones de IA",
        content: [
          "ReciList te permite ingresar recetas manualmente, importar recetas a través de URLs de sitios web mediante la Share Extension o parser de enlaces, o generar/estructurar recetas y macros nutricionales utilizando Inteligencia Artificial (impulsada por Google Gemini).",
          "• Derechos sobre el Contenido del Usuario: Conservás todos los derechos de propiedad sobre el contenido que creás, subís o compartís en la Aplicación. Declarás y garantizás que poseés o tenés los derechos necesarios para utilizar e importar cualquier contenido que envíes.",
          "• Limitaciones de la IA: La generación y el análisis de recetas utilizan inteligencia artificial. Reconocés que la tecnología de IA está sujeta a errores, imprecisiones y 'alucinaciones'. ReciList no garantiza la precisión, integridad o seguridad de ninguna receta, instrucción o ingrediente generado por IA. Usá siempre el sentido común y las normas de seguridad en la cocina.",
          "• Descargo de Responsabilidad Nutricional: Los valores nutricionales, macronutrientes y estimaciones proporcionados por la Aplicación (mediante cálculos con Google Gemini) son cálculos únicamente con fines informativos. NO constituyen asesoramiento médico, dietético o nutricional profesional. ReciList no es responsable por errores en los cálculos de macros.",
          "• Alergias y Seguridad Alimentaria: Sos el único responsable de verificar los ingredientes, posibles alérgenos, seguridad alimentaria y temperaturas de cocción. ReciList no asume ninguna responsabilidad por reacciones adversas, enfermedades o lesiones resultantes de las recetas preparadas."
        ]
      },
      {
        title: "4. Uso Aceptable y Restricciones",
        content: [
          "Aceptás no utilizar el Servicio para:",
          "• Violar cualquier ley local, nacional o internacional aplicable.",
          "• Subir o compartir contenido que sea ofensivo, dañino, difamatorio o que infrinja los derechos de propiedad intelectual de terceros.",
          "• Intentar realizar scraping, ingeniería inversa o explotar la Aplicación, las APIs o los sistemas de IA subyacentes.",
          "• Crear múltiples cuentas para abusar de los límites gratuitos o eludir las limitaciones de suscripción."
        ]
      },
      {
        title: "5. Suscripciones ReciList Plus",
        content: [
          "Algunas funciones del Servicio requieren una suscripción de pago a 'ReciList Plus'.",
          "• Planes y Precios: Ofrecemos planes de suscripción mensuales y anuales. Los detalles de los precios se muestran dentro de la Aplicación y pueden variar según el país y la región. Todos los precios están sujetos a cambios.",
          "• Facturación y Renovación Automática: Las suscripciones se facturan a través de Apple (App Store) o Google (Play Store) utilizando la integración con RevenueCat. El pago se cargará a tu cuenta de la tienda correspondiente al confirmar la compra. Las suscripciones se renuevan automáticamente al final de cada período de facturación, a menos que la renovación automática se desactive al menos 24 horas antes del final del período actual.",
          "• Gestión y Cancelación: Podés gestionar o cancelar tu suscripción en cualquier momento a través de la configuración de suscripciones de la Apple App Store o de Google Play Store.",
          "• Restauración de Compras: Si reinstalás la Aplicación o cambiás de dispositivo, podés restaurar tus compras utilizando el botón 'Restaurar compras' o 'Restore Purchases' en la pantalla de suscripción dentro de la aplicación (utilizando la misma cuenta de App Store / Google Play).",
          "• Pruebas Gratuitas: Las pruebas gratuitas, si las hubiera, se ofrecen y configuran directamente dentro de la App. Si una prueba gratuita está activa, se te cobrará solo después de que expire el período de prueba a menos que se cancele al menos 24 horas antes de su vencimiento.",
          "• Reembolsos: Todos los reembolsos de pagos son gestionados exclusivamente por Apple o Google de acuerdo con sus respectivas políticas de tienda. ReciList no puede procesar reembolsos directamente.",
          "• EULA: Estos términos complementan y no contradicen el acuerdo estándar de licencia de usuario final (EULA) de la aplicación licenciada de Apple ni los Términos de Servicio de Google Play."
        ]
      },
      {
        title: "6. Propiedad Intelectual",
        content: [
          "Todos los derechos de propiedad intelectual sobre el diseño, logotipo, código y características de la Aplicación (excluyendo el Contenido del Usuario) son propiedad de ReciList o están bajo su licencia. Se te concede una licencia limitada, no exclusiva, intransferible, revocable y personal para usar la Aplicación con fines no comerciales."
        ]
      },
      {
        title: "7. Disponibilidad, Modificaciones y Terminación",
        content: [
          "Nos reservamos el derecho de modificar, suspender o rescindir el Servicio o tu cuenta en cualquier momento, con o sin previo aviso, si consideramos que has violado estos Términos. No garantizamos que el Servicio esté disponible de manera ininterrumpida o libre de errores."
        ]
      },
      {
        title: "8. Descargo de Garantías y Limitación de Responsabilidad",
        content: [
          "EL SERVICIO SE PROPORCIONA 'TAL CUAL' Y 'SEGÚN DISPONIBILIDAD'. EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, RECILIST DESCLAMA TODA GARANTÍA, EXPRESA O IMPLÍCITA. EN NINGÚN CASO RECILIST SERÁ RESPONSABLE POR DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES O CONSECUENTES QUE DERIVEN DEL USO O LA IMPOSIBILIDAD DE USAR EL SERVICIO."
        ]
      },
      {
        title: "9. Ley Aplicable y Jurisdicción",
        content: [
          "Estos Términos y cualquier disputa que surja de ellos se regirán e interpretarán de acuerdo con las leyes de Suiza. Cualquier acción legal que surja en virtud de estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales de Suiza."
        ]
      },
      {
        title: "10. Información de Contacto",
        content: [
          "Para cualquier pregunta, solicitud de soporte o consulta relacionada con estos Términos, podés escribirnos a support@recilist.app."
        ]
      }
    ]
  }
};
