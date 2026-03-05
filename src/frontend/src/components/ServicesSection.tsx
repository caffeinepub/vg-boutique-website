import { Layers, Package, Scissors, Shirt, Sparkles, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  ocid: string;
}

const services: ServiceCard[] = [
  {
    icon: Scissors,
    title: "Designer Kurtis",
    description:
      "Handcrafted kurtis tailored to your measurements and style, from casual everyday wear to festive elegance.",
    ocid: "services.item.1",
  },
  {
    icon: Layers,
    title: "Co-ord Sets",
    description:
      "Matching co-ordinated sets designed with precision for a polished, put-together look that turns heads.",
    ocid: "services.item.2",
  },
  {
    icon: Shirt,
    title: "Custom Pants",
    description:
      "Perfectly fitted pants in every silhouette – palazzo, straight-cut, wide-leg, and more, made for you.",
    ocid: "services.item.3",
  },
  {
    icon: Sparkles,
    title: "Dhoti Style Dresses",
    description:
      "Elegant dhoti-style drapes and dresses crafted for comfort and sophistication on every occasion.",
    ocid: "services.item.4",
  },
  {
    icon: Star,
    title: "Festive & Occasion Wear",
    description:
      "Stunning outfits for weddings, celebrations, and special occasions in Narayangaon and beyond.",
    ocid: "services.item.5",
  },
  {
    icon: Package,
    title: "Made-to-Order Boutique Outfits",
    description:
      "Fully bespoke designs from concept to creation – your vision, our craftsmanship, your perfect outfit.",
    ocid: "services.item.6",
  },
];

interface ServicesSectionProps {
  visible: boolean;
}

export function ServicesSection({ visible }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className={`py-20 md:py-28 bg-white transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[oklch(0.82_0.06_10/0.12)] border border-[oklch(0.82_0.06_10/0.25)] text-[oklch(0.62_0.12_10)] font-body text-xs font-semibold tracking-widest uppercase mb-6">
            What We Create
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[oklch(0.22_0.01_30)] mb-4">
            Our Custom Design Services
          </h2>
          <p className="font-body text-base sm:text-lg text-[oklch(0.50_0.02_30)] max-w-2xl mx-auto">
            Every piece at VG Boutique is designed with care and crafted
            exclusively for you at our boutique in Narayangaon, Pune – 410504.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-[oklch(0.82_0.06_10/0.50)]" />
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.62_0.12_10)]" />
              <span className="w-2.5 h-1.5 rounded-full bg-[oklch(0.82_0.06_10)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.62_0.12_10)]" />
            </div>
            <div className="h-px w-16 bg-[oklch(0.82_0.06_10/0.50)]" />
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                data-ocid={service.ocid}
                className="group relative p-7 rounded-2xl bg-[oklch(0.97_0.01_60)] border border-[oklch(0.88_0.04_20/0.5)] hover:border-[oklch(0.82_0.06_10)] hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 cursor-default animate-fadeInUp"
              >
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(0.82_0.06_10/0)] to-[oklch(0.82_0.06_10/0)] group-hover:from-[oklch(0.82_0.06_10/0.04)] group-hover:to-[oklch(0.90_0.03_60/0.08)] transition-all duration-300 pointer-events-none" />

                {/* Icon container */}
                <div className="relative w-12 h-12 rounded-xl bg-[oklch(0.82_0.06_10/0.15)] group-hover:bg-[oklch(0.82_0.06_10/0.25)] flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[oklch(0.62_0.12_10)]" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-[oklch(0.22_0.01_30)] mb-3 group-hover:text-[oklch(0.62_0.12_10)] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-[oklch(0.50_0.02_30)] leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-7 right-7 h-px bg-[oklch(0.82_0.06_10/0)] group-hover:bg-[oklch(0.82_0.06_10/0.40)] transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
