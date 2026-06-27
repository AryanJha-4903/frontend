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

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full border-2 border-gold flex items-center justify-center text-gold font-display font-bold text-sm">G</span>
          <span className="font-display">Geneial <span className="text-gold">Creation</span></span>
        </div>
        <div>© 2026 Geneial Creation — Designed by Sanjiv Jha</div>
      </div>
    </footer>
  );
}