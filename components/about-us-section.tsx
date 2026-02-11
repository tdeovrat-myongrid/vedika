"use client"

import Image from "next/image"
import Link from "next/link"

export function AboutUsSection() {
    return (
        <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Mobile Heading (Heading -> Photo -> Text) */}
                    <div className="lg:hidden text-center md:text-left">
                        <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm">
                            Our Story
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mt-2">
                            How it all Started
                        </h2>
                    </div>

                    {/* Image / Visual Side */}
                    <div className="relative h-[300px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <Image
                            src="/our-story-founders.png"
                            alt="Founders of The Clean Crate - Our Story"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay texture or gradient if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col gap-6">
                        {/* Desktop Heading */}
                        <div className="hidden lg:block">
                            <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm">
                                Our Story
                            </span>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
                                How it all Started
                            </h2>
                        </div>

                        <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            <p>
                                The Clean Crate was born from a very real, everyday struggle — wanting to eat healthy without giving up on taste, convenience, or trust. In a world full of "healthy" labels and confusing ingredients, we found it surprisingly hard to find food that actually felt clean, filling, and honest.
                            </p>
                            <p>
                                Tired of the snack-time compromise between bland "health foods" and snacks loaded with empty calories, we knew there had to be a better way. One where nutrition didn’t mean boredom, and flavor didn’t come with guilt.
                            </p>
                            <p>
                                By combining traditional nutritional wisdom with modern, crave-worthy flavors, we created snacks that are as <strong>wholesome</strong> as they are <strong>delicious</strong>. No fillers. No junk. Just thoughtfully chosen ingredients that support active, everyday lifestyles.
                            </p>
                            <p className="font-medium text-zinc-900 dark:text-white">
                                Because at The Clean Crate, we believe good food should do more than taste good — it should help keep you moving.
                            </p>
                        </div>

                        <div className="mt-4">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-lg border-b-2 border-black dark:border-white hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors pb-1"
                            >
                                Read Our Full Story
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
