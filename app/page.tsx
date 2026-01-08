import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 dark:bg-black dark:text-white">
      {/* Navbar Placeholder */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/50 backdrop-blur-md dark:bg-black/50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="text-2xl font-bold tracking-tighter">VEDIKA</div>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">Shop</a>
            <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">Collections</a>
            <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">About</a>
          </nav>
          <div className="flex gap-4">
            <button className="text-sm font-medium hover:opacity-80">Search</button>
            <button className="text-sm font-medium hover:opacity-80">Cart (0)</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center pt-20">
        <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-100 via-white to-white opacity-50 dark:from-indigo-900/20 dark:via-black dark:to-black"></div>

          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
            Elevate Your <br />
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Everyday Style</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
            Discover the new collection. Timeless designs, sustainable materials, and modern aesthetics curated for you.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
              Shop Now
            </button>
            <button className="rounded-full border border-zinc-200 px-8 py-3 text-sm font-semibold transition hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900">
              View Lookbook
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute left-1/2 top-1/2 -z-20 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-3xl"></div>
        </section>

        {/* Featured Grid Placeholder */}
        <section className="w-full max-w-7xl px-6 py-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                <span className="font-medium">Product Image 1</span>
              </div>
              <div className="absolute bottom-0 w-full p-6 opacity-0 transition group-hover:opacity-100">
                <div className="rounded-xl bg-white/90 p-4 backdrop-blur-md dark:bg-black/90">
                  <div className="font-semibold">Summer Essentials</div>
                  <div className="text-sm text-zinc-500">$120.00</div>
                </div>
              </div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                <span className="font-medium">Product Image 2</span>
              </div>
              <div className="absolute bottom-0 w-full p-6 opacity-0 transition group-hover:opacity-100">
                <div className="rounded-xl bg-white/90 p-4 backdrop-blur-md dark:bg-black/90">
                  <div className="font-semibold">Formal Wear</div>
                  <div className="text-sm text-zinc-500">$250.00</div>
                </div>
              </div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                <span className="font-medium">Product Image 3</span>
              </div>
              <div className="absolute bottom-0 w-full p-6 opacity-0 transition group-hover:opacity-100">
                <div className="rounded-xl bg-white/90 p-4 backdrop-blur-md dark:bg-black/90">
                  <div className="font-semibold">Accessories</div>
                  <div className="text-sm text-zinc-500">$85.00</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
