import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Announcement Bar */}
      <div className="bg-primary px-4 py-2 text-center text-xs font-medium text-white tracking-widest uppercase">
        Free Shipping on all orders above ₹999
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#E5E0D1] bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Mobile Menu Button (Hidden on Desktop) */}
          <button className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="text-3xl font-serif font-bold tracking-tight text-primary">
            VEDIKA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            <Link href="/collections/all" className="hover:text-primary hover:underline underline-offset-4 transition-all">SHOP ALL</Link>
            <Link href="/collections/bestsellers" className="hover:text-primary hover:underline underline-offset-4 transition-all">BESTSELLERS</Link>
            <Link href="/about" className="hover:text-primary hover:underline underline-offset-4 transition-all">OUR STORY</Link>
            <Link href="/journal" className="hover:text-primary hover:underline underline-offset-4 transition-all">JOURNAL</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <button className="hover:opacity-75 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <Link href="/account" className="hidden sm:block hover:opacity-75 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </Link>
            <button className="relative hover:opacity-75 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">0</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden">
          {/* Text Content */}
          <div className="flex min-h-[500px] w-full flex-col lg:flex-row">
            <div className="flex flex-1 flex-col justify-center px-6 py-16 lg:px-24 lg:py-32 xl:px-32">
              <span className="mb-4 font-bold tracking-widest text-accent uppercase text-sm">Pure & Natural</span>
              <h1 className="mb-6 font-serif text-5xl leading-[1.1] text-primary sm:text-6xl md:text-7xl">
                Wholesome <br /> Goodness.
              </h1>
              <p className="mb-8 max-w-md text-lg leading-relaxed text-foreground/80">
                Experience the finest selection of organic grains and daily essentials. Sourced directly from nature, delivered to your doorstep.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products/oats" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-medium text-white transition-transform hover:scale-105 active:scale-95">
                  Shop Collections
                </Link>
                <Link href="/about" className="inline-flex items-center justify-center rounded-md border border-primary px-8 py-4 text-base font-medium text-primary transition-colors hover:bg-primary/5">
                  Our Story
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative min-h-[400px] flex-1 lg:min-h-[800px] bg-[#EAE4D3]">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Placeholder for Hero Image */}
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1505253304499-671c554e3dbe?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products (Bestsellers) */}
        <section className="px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col items-center text-center">
              <h2 className="font-serif text-4xl font-medium text-primary md:text-5xl">Our Bestsellers</h2>
              <div className="mt-4 h-1 w-24 bg-accent"></div>
              <p className="mt-4 max-w-2xl text-lg text-foreground/70">
                Curated favorites for your daily wellness ritual.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Organic Rolled Oats", price: "₹399", image: "https://images.unsplash.com/photo-1626202378396-13a808f9725f?w=800&auto=format&fit=crop&q=60" },
                { title: "Quinoa Superfood Blend", price: "₹549", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=60" },
                { title: "Golden Honey Granola", price: "₹499", image: "https://images.unsplash.com/photo-1517093739818-87dc4bcf2252?w=800&auto=format&fit=crop&q=60" },
              ].map((product, i) => (
                <div key={i} className="group relative cursor-pointer">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-[#EAE4D3]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white shadow-sm">
                      SALE
                    </div>
                    {/* Quick Add Button Overlay */}
                    <div className="absolute inset-x-4 bottom-4 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <button className="w-full rounded bg-white py-3 text-sm font-bold text-primary shadow-lg hover:bg-zinc-50">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="font-serif text-xl font-medium text-primary group-hover:text-accent transition-colors">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-lg font-medium text-foreground/80">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="/collections/all" className="inline-block border-b-2 border-primary pb-1 text-sm font-bold tracking-widest text-primary hover:text-accent hover:border-accent transition-colors">
                VIEW ALL PRODUCTS
              </Link>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="bg-primary py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-12 sm:grid-cols-3 text-center">
              <div>
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-2xl">Quick & Easy</h3>
                <p className="text-white/80">Ready in minutes for your busy lifestyle.</p>
              </div>
              <div>
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-2xl">100% Natural</h3>
                <p className="text-white/80">No preservatives, just pure ingredients.</p>
              </div>
              <div>
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-2xl">Locally Sourced</h3>
                <p className="text-white/80">Supporting our local farming community.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#23150C] py-12 text-center text-white/40 text-sm">
        <p>&copy; {new Date().getFullYear()} Vedika. All rights reserved.</p>
      </footer>
    </div>
  );
}
