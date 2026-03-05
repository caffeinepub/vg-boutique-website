import { Menu, Scissors, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-boutique"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            data-ocid="nav.link"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Scissors className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-xl md:text-2xl font-semibold text-[oklch(0.62_0.12_10)] tracking-wide">
              VG Boutique
            </span>
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-ocid="nav.link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-body text-sm font-medium text-[oklch(0.40_0.02_30)] hover:text-[oklch(0.62_0.12_10)] transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-[oklch(0.62_0.12_10)] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            type="button"
            data-ocid="nav.link"
            onClick={() => handleNavClick("#contact")}
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[oklch(0.62_0.12_10)] text-white font-body text-sm font-medium hover:bg-[oklch(0.55_0.14_10)] hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200"
          >
            Book Consultation
          </button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            data-ocid="nav.toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-[oklch(0.40_0.02_30)] hover:bg-[oklch(0.93_0.02_60)] transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-80 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-ocid="nav.link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block px-4 py-3 rounded-lg font-body text-sm font-medium text-[oklch(0.40_0.02_30)] hover:bg-[oklch(0.93_0.02_60)] hover:text-[oklch(0.62_0.12_10)] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <button
                type="button"
                data-ocid="nav.link"
                onClick={() => handleNavClick("#contact")}
                className="block w-full text-center px-4 py-3 rounded-full bg-[oklch(0.62_0.12_10)] text-white font-body text-sm font-medium hover:bg-[oklch(0.55_0.14_10)] transition-colors duration-200"
              >
                Book Consultation
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
