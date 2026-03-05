import { MapPin, MessageCircle, Phone } from "lucide-react";

interface ContactSectionProps {
  visible: boolean;
}

export function ContactSection({ visible }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className={`py-20 md:py-28 bg-[oklch(0.93_0.04_15)] transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[oklch(0.62_0.12_10/0.12)] border border-[oklch(0.62_0.12_10/0.25)] text-[oklch(0.62_0.12_10)] font-body text-xs font-semibold tracking-widest uppercase mb-6">
            Get in Touch
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[oklch(0.22_0.01_30)] mb-4">
            Book Your Design Consultation
          </h2>
          <p className="font-body text-base sm:text-lg text-[oklch(0.40_0.02_30)] max-w-xl mx-auto">
            Let's create something beautiful together. Reach out to Vrinda G and
            start your bespoke fashion journey at Narayangaon, Pune – 410504.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919960101494?text=Hi%2C%20I%27d%20like%20to%20book%20a%20design%20consultation%20at%20VG%20Boutique"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.primary_button"
              className="flex items-center gap-4 w-full p-5 rounded-2xl bg-[#25D366] hover:bg-[#1fb855] text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="font-body font-semibold text-base">
                  Chat on WhatsApp
                </div>
                <div className="font-body text-sm text-white/80">
                  Get instant response from Vrinda G
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919960101494"
              className="flex items-center gap-4 w-full p-5 rounded-2xl bg-white hover:bg-[oklch(0.97_0.01_60)] border border-[oklch(0.88_0.04_20)] text-[oklch(0.22_0.01_30)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-boutique group"
            >
              <div className="w-12 h-12 rounded-full bg-[oklch(0.82_0.06_10/0.15)] group-hover:bg-[oklch(0.82_0.06_10/0.25)] flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                <Phone className="w-5 h-5 text-[oklch(0.62_0.12_10)]" />
              </div>
              <div>
                <div className="font-body font-semibold text-base">
                  +91 99601 01494
                </div>
                <div className="font-body text-sm text-[oklch(0.50_0.02_30)]">
                  Call us for inquiries
                </div>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 w-full p-5 rounded-2xl bg-white border border-[oklch(0.88_0.04_20)]">
              <div className="w-12 h-12 rounded-full bg-[oklch(0.82_0.06_10/0.15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-[oklch(0.62_0.12_10)]" />
              </div>
              <div>
                <div className="font-body font-semibold text-base text-[oklch(0.22_0.01_30)] mb-0.5">
                  Visit Our Boutique
                </div>
                <div className="font-body text-sm text-[oklch(0.50_0.02_30)] leading-relaxed">
                  VG Boutique
                  <br />
                  Narayangaon, Pune – 410504
                  <br />
                  Maharashtra, India
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden border border-[oklch(0.88_0.04_20)] shadow-boutique">
              <iframe
                src="https://maps.google.com/maps?q=Narayangaon,Pune,410504&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="VG Boutique location – Narayangaon Pune 410504"
                data-ocid="contact.map_marker"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
