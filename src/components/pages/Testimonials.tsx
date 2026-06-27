import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";    
import {
  Package, Tag, Sparkles, Layers, Printer, Lightbulb,
  Award, Users, Briefcase, ArrowRight, Mail, Phone, MapPin,
  Instagram, Linkedin, Facebook, Check, Quote, Menu, X
} from "lucide-react";
import { client } from "@/lib/sanity";
import { testimonialSectionQuery } from "@/lib/queries";

// const testimonials = [
//   { name: "Ravi Mehta", role: "Founder, Divyamrit Enterprises", quote: "Sanjiv translated our heritage into a label that finally feels premium. Sales lifted within a quarter." },
//   { name: "Anjali Rao", role: "Brand Manager, FMCG", quote: "Twenty years shows. He nails category cues on the first round and the dielines are flawless." },
//   { name: "Kabir Shah", role: "Co-founder, Wentoe", quote: "From concept to print, the calmest, sharpest packaging partner we've worked with." },
// ];

export default function Testimonials() {
    const [testimonialData, setTestimonialData] = useState<any>(null);

    useEffect(() => {
    client.fetch(testimonialSectionQuery).then((data) => {
        setTestimonialData(data);
    });
    }, []);
  return (
    <section className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            {testimonialData?.sectionLabel}
        </div>

        <h2 className="font-display text-4xl md:text-5xl">
            {testimonialData?.heading}
        </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
        {testimonialData?.testimonials.map((testimonial: any, i: number) => (
            <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-7 hover:border-gold/40 transition"
            >
            <Quote className="w-8 h-8 text-gold/50 mb-4" />

            <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.quote}"
            </p>

            <div className="border-t border-border pt-4">
                <div className="font-display text-lg">
                {testimonial.name}
                </div>

                <div className="text-xs text-muted-foreground">
                {testimonial.role}
                </div>
            </div>
            </motion.div>
        ))}
        </div>
    </div>
    </section>
    // <section className="py-24 md:py-32">
    //   <div className="max-w-7xl mx-auto px-6">
    //     <div className="text-center mb-16">
    //       <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Kind Words</div>
    //       <h2 className="font-display text-4xl md:text-5xl">Trusted by founders & brand teams.</h2>
    //     </div>
    //     <div className="grid md:grid-cols-3 gap-5">
    //       {testimonials.map((t, i) => (
    //         <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
    //           className="rounded-2xl border border-border bg-card p-7 hover:border-gold/40 transition">
    //           <Quote className="w-8 h-8 text-gold/50 mb-4" />
    //           <p className="text-foreground/90 leading-relaxed mb-6">"{t.quote}"</p>
    //           <div className="border-t border-border pt-4">
    //             <div className="font-display text-lg">{t.name}</div>
    //             <div className="text-xs text-muted-foreground">{t.role}</div>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}