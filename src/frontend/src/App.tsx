import { useEffect, useRef, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ServicesSection } from "./components/ServicesSection";

function useSectionFade(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function App() {
  const about = useSectionFade();
  const services = useSectionFade();
  const gallery = useSectionFade();
  const contact = useSectionFade();

  // Inject Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero — no fade needed, animates on load */}
        <HeroSection />

        {/* About */}
        <div ref={about.ref}>
          <AboutSection visible={about.visible} />
        </div>

        {/* Services */}
        <div ref={services.ref}>
          <ServicesSection visible={services.visible} />
        </div>

        {/* Gallery */}
        <div ref={gallery.ref}>
          <GallerySection visible={gallery.visible} />
        </div>

        {/* Contact */}
        <div ref={contact.ref}>
          <ContactSection visible={contact.visible} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
