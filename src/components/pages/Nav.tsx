// import { createFileRoute } from "@tanstack/react-router";
// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Package, Tag, Sparkles, Layers, Printer, Lightbulb,
  Award, Users, Briefcase, ArrowRight, Mail, Phone, MapPin,
  Instagram, Linkedin, Facebook, Check, Quote, Menu, X
} from "lucide-react";


export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#why", label: "Why Me" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full border-2 border-gold flex items-center justify-center text-gold font-display font-bold">G</span>
          <span className="font-display text-lg tracking-wide">Geneial <span className="text-gold">Creation</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(l => <a key={l.href} href={l.href} className="hover:text-gold transition-colors">{l.label}</a>)}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-gradient-gold text-primary-foreground hover:opacity-90 transition">
          Hire Me <ArrowRight className="w-4 h-4" />
        </a>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-gold">{l.label}</a>)}
          </div>
        </div>
      )}
    </header>
  );
}