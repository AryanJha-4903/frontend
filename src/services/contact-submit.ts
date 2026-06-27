import { ContactFormRequest } from "@/types/contact";
import emailjs from "@emailjs/browser";

declare global {
  interface ImportMetaEnv {
    readonly VITE_EMAILJS_SERVICE_ID: string;
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    readonly VITE_EMAILJS_PUBLIC_KEY: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export async function submitContactForm(
  payload: ContactFormRequest
) {
  console.log("payload =>", payload);
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      "from_name": payload.name,
      "reply_to": payload.email,
      "company": payload.company,
      "message": payload.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}