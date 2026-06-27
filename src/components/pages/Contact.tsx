import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Package, Tag, Sparkles, Layers, Printer, Lightbulb,
  Award, Users, Briefcase, ArrowRight, Mail, Phone, MapPin,
  Instagram, Linkedin, Facebook, Check, Quote, Menu, X
} from "lucide-react";
import { client } from "@/lib/sanity";
import { CONTACT_QUERY } from "@/lib/queries";
import {submitContactForm} from "@/services/contact-submit"

export interface ContactSection {
  sectionLabel: string;
  heading: string;
  description: string;
  phone: string;
  email: string;
  location: string;

  socialLinks: {
    instagram: string;
    linkedin: string;
    facebook: string;
  };

  form: {
    namePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    messagePlaceholder: string;
    submitButtonText: string;
  };
}





export interface ContactFormRequest {
  name: string;
  email: string;
  company?: string;
  message: string;
}
function getContactSection() {
  return client.fetch<ContactSection>(
    CONTACT_QUERY
  );
}

export default function Contact() {
  const [contact, setContactData] = useState<ContactSection | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    hidden: ""
  });
  

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      if(form.hidden){
        console.log("form.hidder",form);
        return
      }

      // await client.create({
      //   _type: "contactSubmission",
      //   name: form.name,
      //   email: form.email,
      //   company: form.company,
      //   message: form.message,
      //   submittedAt: new Date().toISOString(),
      // });
      await submitContactForm(form);

      alert(
        "Thanks — I'll be in touch shortly."
      );

      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
        hidden: ""
      });

    } catch {
      alert(
        "Something went wrong."
      );
  }
};


  useEffect(() => {
    getContactSection().then((data) => {
      setContactData(data);
      console.log("Fetched Contact Data:", data); // Log the fetched data for debugging
      console.log("Contact Data State:", contact); // Log the state after setting it for debugging
    });
  }, []);

  if (!contact) {
    return null;
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface/40 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          {/* <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Let's Create</div>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Something extraordinary.</h2>
          <p className="text-muted-foreground mb-10 max-w-md">Your product deserves the best first impression. Tell me about your brand and I'll be in touch within 24 hours.</p> */}
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            {contact.sectionLabel}
            </div>

            <h2 className="font-display text-4xl md:text-5xl mb-6">
            {contact.heading}
            </h2>

            <p className="text-muted-foreground mb-10 max-w-md">
            {contact.description}
            </p>
          <ul className="space-y-4 text-foreground/90">
            <li className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gold" />
            {contact.phone}
            </li>

            <li className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gold" />
            {contact.email}
            </li>

            <li className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-gold" />
            {contact.location}
            </li>
            {/* <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-gold" /> +91 9868 309 639</li>
            <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-gold" /> creation.sanjiv@gmail.com</li>
            <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-gold" /> Delhi, India</li> */}
          </ul>
          {/* <div className="flex gap-3 mt-8">
            {[Instagram, Linkedin, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div> */}
          <div className="flex gap-3 mt-8">
            <a
                href={contact.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition"
            >
                <Instagram className="w-4 h-4" />
            </a>

            <a
                href={contact.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition"
            >
                <Linkedin className="w-4 h-4" />
            </a>

            <a
                href={contact.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition"
            >
                <Facebook className="w-4 h-4" />
            </a>
            </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e); alert("Thanks — I'll be in touch shortly."); }}
          className="rounded-3xl border border-border bg-card p-8 shadow-card space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  } placeholder={contact.form.namePlaceholder} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-gold outline-none transition" />
            <input required type="email" 
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  } 
                  placeholder={contact.form.emailPlaceholder} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-gold outline-none transition" />
            <input
              type="text"
              name="website"
              value={form.hidden}
              onChange={(e) =>
                setForm({
                  ...form,
                  hidden: e.target.value,
                })
              }
              className="hidden"
            />
          </div>
          <input placeholder={contact.form.companyPlaceholder}  value={form.company}
            onChange={(e) =>
              setForm({
                ...form,
                company: e.target.value,
              })
            } className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-gold outline-none transition" />
          <textarea required rows={5} value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  } placeholder={contact.form.messagePlaceholder} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-gold outline-none transition resize-none" />
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-gold text-primary-foreground font-medium shadow-glow hover:scale-[1.01] transition">
            {contact.form.submitButtonText} <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}