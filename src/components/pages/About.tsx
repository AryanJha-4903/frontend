import { motion } from "framer-motion";
import { client, urlFor } from '@/lib/sanity'
import { ABOUT_QUERY, heroSectionQuery, projectsQuery } from '@/lib/queries'
import { useEffect, useState } from "react";
import {
  Package, Tag, Sparkles, Layers, Printer, Lightbulb,
  Award, Users, Briefcase, ArrowRight, Mail, Phone, MapPin,
  Instagram, Linkedin, Facebook, Check, Quote, Menu, X
} from "lucide-react";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
export function useAboutSection() {
  const [ about , setAbout] : [any, (about: any) => void] = useState(null) ;

  useEffect(() => {
    client.fetch(ABOUT_QUERY).then(setAbout);
  }, []);

  return about;
}


const iconMap = {
  award: Award,
  briefcase: Briefcase,
  users: Users,
};

export default function About() {
  const about = useAboutSection();

  if (!about) {
    return (
      <section className="py-24 text-center">
        Loading...
      </section>
    );
  }

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            {about.sectionLabel}
          </div>

          <h2 className="font-display text-4xl md:text-5xl mb-6">
            {about.heading}
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            {about.descriptionOne}
            {" "}
            <span className="text-foreground">
              {about.highlightText}
            </span>
          </p>

          <p className="text-muted-foreground leading-relaxed mb-10">
            {about.descriptionTwo}
          </p>

          <div className="grid grid-cols-3 gap-4">
            {about.stats?.map((item: { label: string; number: string; icon: keyof typeof iconMap }) => {
              const Icon = iconMap[item.icon];

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-card/50 p-5 text-center"
                >
                  {Icon && (
                    <Icon className="w-5 h-5 text-gold mx-auto mb-3" />
                  )}

                  <div className="font-display text-3xl font-bold">
                    {item.number}
                  </div>

                  <div className="text-xs text-muted-foreground mt-1">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {about.imageOne && (
            <img
              src={about.imageOne}
              alt="About"
              className="rounded-2xl object-cover aspect-[3/4] w-full shadow-card"
            />
          )}

          {about.imageTwo && (
            <img
              src={about.imageTwo}
              alt="About"
              className="rounded-2xl object-cover aspect-[3/4] w-full mt-10 shadow-card"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}




// export default function About() {
//   const about = useAboutSection();
//   const stats = [
//     { icon: Award, num: "20+", label: "Years Experience" },
//     { icon: Briefcase, num: "500+", label: "Projects Completed" },
//     { icon: Users, num: "100+", label: "Happy Clients" },
//   ];
//   return (
//     <section id="about" className="py-24 md:py-32 relative">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
//         <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
//           <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">About</div>
//           <h2 className="font-display text-4xl md:text-5xl mb-6">Designing brands that earn shelf-space.</h2>
//           <p className="text-muted-foreground leading-relaxed mb-4">
//             For over two decades, I've helped Indian and international brands turn raw products into recognizable identities. My work spans <span className="text-foreground">FMCG, cosmetics, food, pharma, and luxury</span> — from first concept sketches to print-ready dielines.
//           </p>
//           <p className="text-muted-foreground leading-relaxed mb-10">
//             Geneial Creation is my independent studio: small, senior, and obsessive about the details that make packaging actually sell.
//           </p>
//           <div className="grid grid-cols-3 gap-4">
//             {stats.map(s => (
//               <div key={s.label} className="rounded-2xl border border-border bg-card/50 p-5 text-center hover:border-gold/50 transition">
//                 <s.icon className="w-5 h-5 text-gold mx-auto mb-3" />
//                 <div className="font-display text-3xl text-gradient-gold font-bold">{s.num}</div>
//                 <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-2 gap-4">
//           {/* <img src={packHoney} alt="Honey label work" className="rounded-2xl object-cover aspect-[3/4] w-full shadow-card" loading="lazy" />
//           <img src={packLuxury} alt="Luxury packaging" className="rounded-2xl object-cover aspect-[3/4] w-full mt-10 shadow-card" loading="lazy" /> */}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// import { motion } from "framer-motion";
// import { Award, Briefcase, Users } from "lucide-react";
// import { useAboutSection } from "../hooks/useAboutSection";
