import { ChevronDown, MapPin, Phone } from "lucide-react";

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.62_0.12_10/0.72)] via-[oklch(0.55_0.12_20/0.60)] to-[oklch(0.40_0.08_30/0.55)]" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, oklch(0.97 0.01 60 / 0.4) 0%, transparent 60%),
                           radial-gradient(circle at 75% 75%, oklch(0.90 0.03 60 / 0.3) 0%, transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 font-body text-xs font-medium tracking-widest uppercase mb-8"
          style={{ animation: "heroReveal 0.9s ease-out 0.1s both" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.97_0.01_60)]" />
          Custom Made-to-Order Boutique
        </div>

        {/* H1 */}
        <h1
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          style={{ animation: "heroReveal 0.9s ease-out 0.25s both" }}
        >
          Custom Boutique Dresses
          <br />
          <span className="text-[oklch(0.96_0.04_60)]">
            for Women &amp; Girls
          </span>
          <br />
          <span className="text-[oklch(0.97_0.01_60/0.85)] text-2xl sm:text-3xl md:text-4xl font-medium">
            in Narayangaon
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="font-body text-base sm:text-lg md:text-xl text-white/85 font-light mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ animation: "heroReveal 0.9s ease-out 0.4s both" }}
        >
          Designed by <span className="font-medium text-white">Vrinda G</span> –
          Personalized, Made-to-Order Fashion crafted exclusively for you at
          Narayangaon, Pune
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          style={{ animation: "heroReveal 0.9s ease-out 0.55s both" }}
        >
          <button
            type="button"
            data-ocid="hero.primary_button"
            onClick={() => handleScroll("#contact")}
            className="px-8 py-4 rounded-full bg-white text-[oklch(0.62_0.12_10)] font-body font-semibold text-base hover:bg-[oklch(0.97_0.01_60)] hover:shadow-boutique-lg hover:-translate-y-1 transition-all duration-200 shadow-boutique"
          >
            Book Your Design Consultation
          </button>
          <button
            type="button"
            onClick={() => handleScroll("#services")}
            className="px-8 py-4 rounded-full border-2 border-white/60 text-white font-body font-medium text-base hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-200"
          >
            View Our Services
          </button>
        </div>

        {/* Contact info */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80"
          style={{ animation: "heroReveal 0.9s ease-out 0.7s both" }}
        >
          <a
            href="tel:+919960101494"
            className="flex items-center gap-2 font-body text-sm hover:text-white transition-colors duration-200 group"
          >
            <div className="p-1.5 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-200">
              <Phone className="w-3.5 h-3.5" />
            </div>
            +91 99601 01494
          </a>
          <div className="hidden sm:block w-px h-4 bg-white/30" />
          <div className="flex items-center gap-2 font-body text-sm">
            <div className="p-1.5 rounded-full bg-white/20">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            Narayangaon, Pune – 410504
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: "heroReveal 1s ease-out 1s both" }}
      >
        <button
          type="button"
          onClick={() => handleScroll("#about")}
          className="flex flex-col items-center gap-1 text-white/60 hover:text-white/90 transition-colors duration-200"
          aria-label="Scroll down"
        >
          <span className="font-body text-xs tracking-widest uppercase">
            Explore
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
