"use client"

export function ContactSection() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="block text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">
                        Contact Us
                    </span>
                    <h2 className="font-heading text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
                        Have a question about our ingredients, shipping, or just want to say hi? We're here to help you start your healthy journey.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xl">📧</div>
                            <div>
                                <h3 className="font-bold text-zinc-900 dark:text-white">Email Us</h3>
                                <p className="text-zinc-500 dark:text-zinc-400">hello@thecleancrate.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xl">📍</div>
                            <div>
                                <h3 className="font-bold text-zinc-900 dark:text-white">Visit Us</h3>
                                <p className="text-zinc-500 dark:text-zinc-400">123 Wellness Way, Healthy City, India</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xl">📸</div>
                            <div>
                                <h3 className="font-bold text-zinc-900 dark:text-white">Follow Us</h3>
                                <a href="https://www.instagram.com/poushtpop/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">@poushtpop</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-zinc-800/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
                                <input type="text" className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
                                <input type="email" className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
                            <textarea rows={4} className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all resize-none" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="button" className="w-full rounded-xl bg-black dark:bg-white text-white dark:text-black py-4 font-bold tracking-wide hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
