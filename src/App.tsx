import About from "./components/pages/About";
import Nav from "./components/pages/Nav";
import Hero from "./components/pages/Hero";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import Why from "./components/pages/Why";
import Testimonials from "./components/pages/Testimonials";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";


export default function App() {
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