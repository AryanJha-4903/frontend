import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Package, Tag, Sparkles, Layers, Printer, Lightbulb,
  Award, Users, Briefcase, ArrowRight, Mail, Phone, MapPin,
  Instagram, Linkedin, Facebook, Check, Quote, Menu, X
} from "lucide-react";
// import { useEffect, useState } from "react";
import { client } from "@/lib/sanity";
import { whySectionQuery } from "@/lib/queries";


const why = [
  "20 years of category-tested expertise",
  "Unique creative concepts, never templated",
  "Print-ready files trusted by Indian printers",
  "Fast turnaround without compromise",
  "Client-focused, transparent process",
  "End-to-end — from concept to dieline",
];

export default function Why() {
    const [whyData, setWhyData] = useState<any>(null);

    useEffect(() => {
    client.fetch(whySectionQuery).then((data) => {
        setWhyData(data);
    });
    }, []);
  return (
            <section
        id="why"
        className="py-24 md:py-32 bg-surface/40 border-y border-border/50"
        >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
                {whyData?.sectionLabel}
            </div>

            <h2 className="font-display text-4xl md:text-5xl mb-6">
                {whyData?.heading}
            </h2>

            <p className="text-muted-foreground leading-relaxed">
                {whyData?.description}
            </p>
            </div>

            <ul className="space-y-3">
            {whyData?.points.map((item: any, i: number) => (
                <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-gold/50 transition"
                >
                <span className="w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" />
                </span>

                <span className="text-foreground/90">
                    {item.text}
                </span>
                </motion.li>
            ))}
            </ul>
        </div>
        </section>
    // <section id="why" className="py-24 md:py-32 bg-surface/40 border-y border-border/50">
    //   <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
    //     <div>
    //       <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Why Choose Me</div>
    //       <h2 className="font-display text-4xl md:text-5xl mb-6">A senior designer, not a junior agency.</h2>
    //       <p className="text-muted-foreground leading-relaxed">
    //         You work directly with me — no account managers, no juniors learning on your brand. Just two decades of category instinct, applied to your product.
    //       </p>
    //     </div>
    //     <ul className="space-y-3">
    //       {why.map((w, i) => (
    //         <motion.li key={w} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
    //           className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-gold/50 transition">
    //           <span className="w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 mt-0.5">
    //             <Check className="w-3.5 h-3.5 text-primary-foreground" />
    //           </span>
    //           <span className="text-foreground/90">{w}</span>
    //         </motion.li>
    //       ))}
    //     </ul>
    //   </div>
    // </section>
  );
}
