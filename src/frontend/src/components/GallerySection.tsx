interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/assets/generated/gallery-kurti-1.dim_400x500.jpg",
    alt: "Custom designer kurti by VG Boutique in Narayangaon",
    label: "Designer Kurti",
  },
  {
    src: "/assets/generated/gallery-coord-set.dim_400x350.jpg",
    alt: "Co-ord set for women – VG Boutique Narayangaon Pune",
    label: "Co-ord Set",
  },
  {
    src: "/assets/generated/gallery-dhoti-dress.dim_400x550.jpg",
    alt: "Dhoti style dress made-to-order by VG Boutique",
    label: "Dhoti Style Dress",
  },
  {
    src: "/assets/generated/gallery-festive-wear.dim_400x400.jpg",
    alt: "Festive occasion wear boutique dress Narayangaon",
    label: "Festive Occasion Wear",
  },
  {
    src: "/assets/generated/gallery-kurti-2.dim_400x480.jpg",
    alt: "Designer kurti custom tailoring Pune",
    label: "Custom Tailored Kurti",
  },
  {
    src: "/assets/generated/gallery-girls-outfit.dim_400x420.jpg",
    alt: "Girls boutique outfit by VG Boutique Narayangaon",
    label: "Girls Boutique Outfit",
  },
];

interface GallerySectionProps {
  visible: boolean;
}

export function GallerySection({ visible }: GallerySectionProps) {
  return (
    <section
      id="gallery"
      className={`py-20 md:py-28 bg-[oklch(0.97_0.01_60)] transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[oklch(0.82_0.06_10/0.12)] border border-[oklch(0.82_0.06_10/0.25)] text-[oklch(0.62_0.12_10)] font-body text-xs font-semibold tracking-widest uppercase mb-6">
            Portfolio
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[oklch(0.22_0.01_30)] mb-4">
            Our Creations
          </h2>
          <p className="font-body text-base sm:text-lg text-[oklch(0.50_0.02_30)] max-w-xl mx-auto">
            A glimpse into the beautiful custom outfits crafted at VG Boutique,
            Narayangaon Pune – each piece uniquely made for our clients.
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

        {/* Masonry grid */}
        <div className="masonry-grid">
          {galleryImages.map((image) => (
            <div key={image.alt} className="masonry-item gallery-item group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover rounded-xl"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <p className="font-body text-white text-sm font-semibold">
                  {image.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-body text-sm text-[oklch(0.50_0.02_30)] mb-4">
            Want a custom piece made just for you?
          </p>
          <button
            type="button"
            onClick={() => {
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-[oklch(0.62_0.12_10)] text-white font-body font-medium text-sm hover:bg-[oklch(0.55_0.14_10)] hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
