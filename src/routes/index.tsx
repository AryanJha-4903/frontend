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
import Portfolio from "@/components/pages/Portfolio";
import Why from "@/components/pages/Why";
import Testimonials from "@/components/pages/Testimonials";
import Contact from "@/components/pages/Contact";
import Footer from "@/components/pages/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Why />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
