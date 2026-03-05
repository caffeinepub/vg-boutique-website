interface AboutSectionProps {
  visible: boolean;
}

export function AboutSection({ visible }: AboutSectionProps) {
  return (
    <section
      id="about"
      className={`py-20 md:py-28 bg-[oklch(0.93_0.02_60)] transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[oklch(0.82_0.06_10/0.15)] border border-[oklch(0.82_0.06_10/0.30)] text-[oklch(0.62_0.12_10)] font-body text-xs font-semibold tracking-widest uppercase mb-6">
            Our Story
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[oklch(0.22_0.01_30)] mb-8">
            About VG Boutique
          </h2>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-16 bg-[oklch(0.82_0.06_10/0.50)]" />
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.62_0.12_10)]" />
              <span className="w-2.5 h-1.5 rounded-full bg-[oklch(0.82_0.06_10)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.62_0.12_10)]" />
            </div>
            <div className="h-px w-16 bg-[oklch(0.82_0.06_10/0.50)]" />
          </div>

          {/* SEO-rich paragraph */}
          <p className="font-body text-base sm:text-lg text-[oklch(0.35_0.02_30)] leading-relaxed mb-6">
            Welcome to{" "}
            <strong className="text-[oklch(0.22_0.01_30)] font-semibold">
              VG Boutique
            </strong>
            , your premier destination for{" "}
            <em>custom tailoring in Narayangaon, Pune</em>. Founded and led by
            the talented{" "}
            <strong className="text-[oklch(0.62_0.12_10)] font-semibold">
              Vrinda G
            </strong>
            , our boutique in Narayangaon Pune has built a reputation for
            delivering exceptional <em>personalized women's fashion</em> that
            celebrates individuality and style.
          </p>

          <p className="font-body text-base sm:text-lg text-[oklch(0.35_0.02_30)] leading-relaxed mb-6">
            At VG Boutique, we specialize in{" "}
            <em>made-to-order boutique dresses</em> crafted to your exact
            measurements and creative vision. From designer kurtis and co-ord
            sets to elegant dhoti-style dresses, every garment is lovingly
            stitched using <em>unique modern patterns</em> that blend
            contemporary trends with timeless Indian sensibilities. We are also
            proud to be a leading <em>girls boutique in Pune</em>, creating
            delightful outfits for young fashionistas in and around the region.
          </p>

          <p className="font-body text-base sm:text-lg text-[oklch(0.35_0.02_30)] leading-relaxed">
            Vrinda G brings years of tailoring expertise and an unwavering
            passion for design to every consultation. Whether you need a casual
            everyday kurti or a showstopping festive ensemble, we take the time
            to understand your unique requirements and bring your dream outfit
            to life. Visit us at{" "}
            <strong className="text-[oklch(0.22_0.01_30)] font-semibold">
              Narayangaon, Pune – 410504
            </strong>{" "}
            and experience fashion that is truly made for you.
          </p>
        </div>
      </div>
    </section>
  );
}
