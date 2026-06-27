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
import Hero from "@/components/pages/Hero";
import Services from "@/components/pages/Services";
// const portfolio = [
//   { src: packLuxury, title: "Luxury Confection", category: "Luxury" },
//   { src: packHoney, title: "Divyamrit Raw Honey", category: "Food" },
//   { src: packDressberry, title: "Dressberry Apparel", category: "FMCG" },
//   { src: packKalmia, title: "Kalmia Neelkanth Gold", category: "FMCG" },
//   { src: packBass, title: "5500W Active Bass", category: "FMCG" },
//   { src: packSports, title: "Wentoe Sports", category: "FMCG" },
//   { src: packRksh, title: "RKSH Door Closer", category: "Pharma" },
//   { src: packAddixion, title: "Addixion Footwear", category: "Cosmetics" },
// ];
type PortfolioItem = {
  src?: string
  title: string
  category: string
}
const categories = ["All", "Food", "Cosmetics", "Pharma", "FMCG", "Luxury"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
//   const filtered = filter === "All" ? portfolio : portfolio.filter(p => p.category === filter);
  const [projects, setProjects] = useState<PortfolioItem[]>([])
    const combined = [
        // ...portfolio,
         ...projects];
    const filteredCombined = filter === "All" ? combined : combined.filter(p => p.category === filter);
  useEffect(() => {
    client.fetch(projectsQuery)
      .then((data: any) => {
        const results = Array.isArray(data) ? data : data?.result ?? [];
        const mapped: PortfolioItem[] = results.map((p: any) => ({
          src: p.coverImage ? urlFor(p.coverImage).width(1200).url() : undefined,
          title: p.title,
          category: p.category ? `${p.category[0].toUpperCase()}${p.category.slice(1)}` : "Uncategorized",
        }));
        setProjects(mapped);
        console.log("Fetched projects:", mapped);
      })
      .catch((err: any) => console.error("Failed to fetch projects:", err));
  }, [])
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Selected Work</div>
            <h2 className="font-display text-4xl md:text-5xl max-w-xl">Packaging that has lived on real shelves.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm border transition ${filter === c ? "bg-gradient-gold text-primary-foreground border-transparent" : "border-border text-muted-foreground hover:border-gold/60 hover:text-foreground"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCombined.map((p, i) => (
            <motion.figure key={p.title} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card ${i % 5 === 0 ? "lg:row-span-2" : ""}`}>
              <div className={`overflow-hidden ${i % 5 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"} bg-surface`}>
                <img src={p.src} alt={p.title} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <figcaption className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="text-xs uppercase tracking-widest text-gold">{p.category}</div>
                <div className="font-display text-xl text-white">{p.title}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}