import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Package, Tag, Sparkles, Layers, Printer, Lightbulb,
  Award, Users, Briefcase, ArrowRight, Mail, Phone, MapPin,
  Instagram, Linkedin, Facebook, Check, Quote, Menu, X
} from "lucide-react";
import portrait from "@/assets/portrait-sanjiv.jpg";
import packSports from "@/assets/pack-sports.jpg";
import packKalmia from "@/assets/pack-kalmia.jpg";
import packRksh from "@/assets/pack-rksh.jpg";
import packBass from "@/assets/pack-bass.jpg";
import packDressberry from "@/assets/pack-dressberry.jpg";
import packLuxury from "@/assets/pack-luxury.jpg";
import packAddixion from "@/assets/pack-addixion.jpg";
import packHoney from "@/assets/pack-honey.jpg";

import { client, urlFor } from '@/lib/sanity'
import { heroSectionQuery, projectsQuery, servicesSectionQuery } from '@/lib/queries'
import { se } from "date-fns/locale";
import About from "@/components/pages/About";
import Nav from "@/components/pages/Nav";

const services = [
  { icon: Package, title: "Packaging Design", desc: "Structural and graphic packaging that protects products and pulls customers in." },
  { icon: Tag, title: "Label Design", desc: "Print-ready labels with regulatory accuracy and shelf-stopping presence." },
  { icon: Sparkles, title: "Brand Identity", desc: "Logos, palettes and systems that scale across every touchpoint." },
  { icon: Layers, title: "Product Mockups", desc: "Photoreal mockups for pitches, e-commerce and investor decks." },
  { icon: Printer, title: "Print & Advertising", desc: "Catalogues, brochures, posters and outdoor — production-perfect." },
  { icon: Lightbulb, title: "Creative Consultation", desc: "Strategic guidance on category cues, materials and brand architecture." },
];
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};



export const serviceIcons = {
  package: Package,
  tag: Tag,
  sparkles: Sparkles,
  layers: Layers,
  printer: Printer,
  lightbulb: Lightbulb,
};



export default function Services() {
    const [servicesData, setServicesData] = useState<any>(null);

    useEffect(() => {
    client.fetch(servicesSectionQuery).then((data) => {
        setServicesData(data);
        // console.log("Fetched Services Data:", data); // Log the fetched data for debugging
        // console.log("Services Data:", servicesData); // Log the fetched data for debugging
    });
    }, []);
  return (
        <section
    id="services"
    className="py-24 md:py-32 bg-surface/40 border-y border-border/50"
    >
    <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            {servicesData?.sectionLabel}
        </div>

        <h2 className="font-display text-4xl md:text-5xl">
            {servicesData?.heading}
        </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {servicesData?.services.map((service: any, i: number) => {
            const Icon =
            serviceIcons[
                service.icon as keyof typeof serviceIcons
            ];

            return (
            <motion.div
                key={service.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="group relative rounded-2xl border border-border bg-card p-7 hover:border-gold/60 transition overflow-hidden"
            >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-gold/10 to-transparent transition" />

                <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition">
                    {Icon && (
                    <Icon className="w-5 h-5 text-gold group-hover:text-primary-foreground transition" />
                    )}
                </div>

                <h3 className="font-display text-xl mb-2">
                    {service.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                </p>
                </div>
            </motion.div>
            );
        })}
        </div>
    </div>
    </section>
    // <section id="services" className="py-24 md:py-32 bg-surface/40 border-y border-border/50">
    //   <div className="max-w-7xl mx-auto px-6">
    //     <div className="max-w-2xl mb-16">
    //       <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Services</div>
    //       <h2 className="font-display text-4xl md:text-5xl">Everything your product needs to stand out.</h2>
    //     </div>
    //     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    //       {services.map((s, i) => (
    //         <motion.div key={s.title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.05 }}
    //           className="group relative rounded-2xl border border-border bg-card p-7 hover:border-gold/60 transition overflow-hidden">
    //           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-gold/10 to-transparent transition" />
    //           <div className="relative">
    //             <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition">
    //               <s.icon className="w-5 h-5 text-gold group-hover:text-primary-foreground transition" />
    //             </div>
    //             <h3 className="font-display text-xl mb-2">{s.title}</h3>
    //             <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}
