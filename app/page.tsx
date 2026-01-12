import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { ProductDetailsSection } from "@/components/product-details-section";
import { SiteFooter } from "@/components/site-footer";
import { CustomerReviewsCarousel } from "@/components/customer-reviews-carousel";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { BrandPromiseSection } from "@/components/brand-promise-section";
import { AboutUsSection } from "@/components/about-us-section";
import { BlogSection } from "@/components/blog-section";
import { InstagramFeedSection } from "@/components/instagram-feed-section";
import { ContactSection } from "@/components/contact-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { getLatestReels } from "@/lib/instagram";
import { BenefitsSection } from "@/components/benefits-section";
import { FeatureMarquee } from "@/components/feature-marquee";
import { FAQSection } from "@/components/faq-section";

// Rebuild force
export default async function Home() {
  const reels = await getLatestReels();

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-black selection:text-white dark:bg-black dark:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Navbar */}


      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="relative isolate pt-0 dark:bg-zinc-900 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100/40 via-white to-white dark:from-indigo-900/20 dark:via-zinc-900 dark:to-black scroll-mt-24">
          {/* Background enhancement */}
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
          </div>

          <div className="mx-auto max-w-7xl px-6 pb-12 sm:pb-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:pb-24 pt-10 sm:pt-16">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <div className="flex">
                <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 ring-1 ring-zinc-900/10 hover:ring-zinc-900/20 dark:ring-white/10 dark:hover:ring-white/20 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm">
                  <span className="font-semibold text-accent">New Arrival</span>
                  <span className="h-4 w-px bg-zinc-900/10 dark:bg-white/10" aria-hidden="true" />
                  <a href="#" className="flex items-center gap-x-1 font-medium text-zinc-600 dark:text-zinc-300">
                    See what's cooking <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1 className="mt-10 font-heading text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
                Protein Oats Reimagined.
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                Start your day with the perfect blend of taste and nutrition. 15g protein, zero compromise. The breakfast you actually want to wake up for.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#products"
                  className="rounded-full bg-red-700 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 dark:bg-red-700 dark:text-white dark:hover:bg-red-800 transition-all hover:scale-105"
                >
                  Shop Now
                </a>
                <a href="#about" className="text-sm font-semibold leading-6 text-zinc-900 dark:text-white hover:underline underline-offset-4">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="mt-10 flex gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                  4.9/5 Rating
                </div>
                <div className="flex items-center gap-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-accent"><path d="M20 6L9 17l-5-5"></path></svg>
                  10k+ Happy Customers
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2.5rem] blur-2xl opacity-20 dark:opacity-40 animate-pulse"></div>

              <div className="relative mx-auto w-[22rem] max-w-full drop-shadow-2xl lg:mr-0 lg:w-[36rem]">
                <div className="relative rounded-3xl overflow-hidden border-[6px] border-white/30 dark:border-zinc-800/50 shadow-2xl">
                  <Image
                    src="/hero-oats.png"
                    alt="Delicious Protein Oats Bowl"
                    width={800}
                    height={800}
                    priority
                    className="object-cover bg-zinc-100 dark:bg-zinc-800"
                  />
                  {/* Shine effect overlay */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-3xl pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Marquee - Moved below Hero */}
        {/* Feature Marquee - Animated */}
        <FeatureMarquee />

        {/* How It Fits Section (New) */}
        <div id="how-it-works" className="scroll-mt-24">
          <HowItWorksSection />
        </div>

        {/* Product Details Section - Replicating Reference Image functionality */}
        <section id="products" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 scroll-mt-24">
          <ProductDetailsSection />
        </section>

        {/* About Us Story Section */}
        <div id="about" className="scroll-mt-24">
          <AboutUsSection />
        </div>

        {/* Brand Promise Section (New) */}
        <div id="benefits" className="scroll-mt-24">
          <BrandPromiseSection />

          {/* Benefits Section */}
          <BenefitsSection />
        </div>

        {/* Testimonials Section */}
        <section id="reviews" className="bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 scroll-mt-24">
          <CustomerReviewsCarousel />
        </section>

        {/* Latest Blogs Section */}
        <div id="blog" className="scroll-mt-24">
          <BlogSection />
        </div>

        {/* Instagram Feed Section */}
        <div id="social" className="scroll-mt-24">
          <InstagramFeedSection reels={reels} />
        </div>

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Us Section */}
        <div id="contact" className="scroll-mt-24">
          <ContactSection />
        </div>

        {/* Newsletter / CTA */}
        <NewsletterSection />

      </main>

      <SiteFooter />
    </div>
  );
}
