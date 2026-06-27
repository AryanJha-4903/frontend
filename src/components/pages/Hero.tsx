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
import { heroSectionQuery, projectsQuery } from '@/lib/queries'
import { se } from "date-fns/locale";
import About from "@/components/pages/About";
import Nav from "@/components/pages/Nav";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

type HeroData = {
  _id: string
  title: string
  headline: string
  subheadline: string
  heroImage: any
}

export default function Hero() {
  const [heroData, setHeroData] = useState<HeroData>({
    _id: "",
    title: "",
    headline: "",
    subheadline: "",
    heroImage: null,
  });

  useEffect(() => {
    client
      .fetch(heroSectionQuery)
      .then((data: HeroData) => {
        data.heroImage = data.heroImage? urlFor(data.heroImage).width(1200).url() : null;
        setHeroData(data);
        console.log("Fetched hero section:", data);
      })
      .catch((err: any) =>
        console.error("Failed to fetch hero section:", err)
      );
  }, []);
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-radial-gold pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold mb-6">
            <span className="w-8 h-px bg-gold" /> Packaging Designer · Est. 2005
          </div>
          {/* <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-bold">
            {heroData.headline || "Design that makes your product impossible to ignore."}
          </h1> */}
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-bold"
            dangerouslySetInnerHTML={{
              __html:
                heroData.headline ||
                `20 Years of <br />
                  <span className="text-gradient-gold">Excellence</span> in <br />
                  Packaging Design.`,
            }}
          />
          {/* <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Creative packaging solutions that build powerful brands. I'm <span className="text-foreground font-medium">Sanjiv Jha</span>, founder of Geneial Creation.
          </p> */}
          <p
           className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            dangerouslySetInnerHTML={{
              __html:
                heroData.subheadline ||
                ` Creative packaging solutions that build powerful brands. I'm <span className="text-foreground font-medium">Sanjiv Jha</span>, founder of Geneial Creation.`,
            }}
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition">
              View Portfolio <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/50 text-foreground hover:bg-gold/10 transition">
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-glow border border-gold/20">
            <img src={heroData.heroImage} alt="Sanjiv Jha, packaging designer" className="w-full h-full object-cover" width={832} height={1024} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs uppercase tracking-widest text-gold mb-1">Founder</div>
              <div className="font-display text-2xl">Sanjiv Jha</div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card border border-gold/30 rounded-2xl p-4 shadow-card hidden md:block">
            <div className="text-3xl font-display font-bold text-gold">500+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Projects Shipped</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}