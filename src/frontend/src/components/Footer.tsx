import { MapPin, Phone, Scissors } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.22_0.01_30)] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[oklch(0.62_0.12_10)] flex items-center justify-center">
                <Scissors className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-2xl font-semibold text-white">
                VG Boutique
              </span>
            </div>
            <p className="font-body text-sm text-white/70 leading-relaxed max-w-xs">
              Custom Tailoring &amp; Made-to-Order Boutique Dresses in
              Narayangaon, Pune. Your vision, our craftsmanship.
            </p>
            <div className="flex items-center gap-1 mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-[oklch(0.82_0.06_10)] text-sm">
                  ★
                </span>
              ))}
              <span className="font-body text-xs text-white/60 ml-1">
                Loved by clients in Narayangaon
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-base font-semibold text-white mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About VG Boutique", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-body text-sm text-white/65 hover:text-[oklch(0.82_0.06_10)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display text-base font-semibold text-white mb-5 tracking-wide">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+919960101494"
                className="flex items-center gap-3 text-white/65 hover:text-[oklch(0.82_0.06_10)] transition-colors duration-200 group"
              >
                <Phone className="w-4 h-4 flex-shrink-0 group-hover:text-[oklch(0.82_0.06_10)]" />
                <span className="font-body text-sm">+91 99601 01494</span>
              </a>
              <div className="flex items-start gap-3 text-white/65">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm leading-relaxed">
                  VG Boutique,
                  <br />
                  Narayangaon, Pune – 410504
                  <br />
                  Maharashtra, India
                </span>
              </div>
              <a
                href="https://wa.me/919960101494?text=Hi%2C%20I%27d%20like%20to%20book%20a%20design%20consultation%20at%20VG%20Boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-body text-xs font-medium transition-colors duration-200"
              >
                <span>💬</span> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/50 text-center sm:text-left">
            © {currentYear} VG Boutique. All rights reserved. | Custom Tailoring
            in Narayangaon, Pune – 410504
          </p>
        </div>
      </div>
    </footer>
  );
}
