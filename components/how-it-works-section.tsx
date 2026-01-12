"use client"

import Image from "next/image"

export function HowItWorksSection() {
    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <span className="block text-center text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                    Simple Process
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-zinc-900 dark:text-white mb-16">
                    How The Clean Crate Fits Into Your Day
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-800">
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src="/how-it-works-1.png"
                                alt="Add Milk or Water"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="bg-blue-900 dark:bg-blue-950 p-6 text-center h-full">
                            <h3 className="font-bold text-xl text-white mb-2">1. Add Milk or Water</h3>
                            <p className="text-white/80 text-sm font-medium">(Whole rolled oats)</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-800">
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src="/how-it-works-2.png"
                                alt="Rest Overnight"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="bg-blue-900 dark:bg-blue-950 p-6 text-center h-full">
                            <h3 className="font-bold text-xl text-white mb-2">2. Rest Overnight</h3>
                            <p className="text-white/80 text-sm font-medium">(or 10 min hot)</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="group relative overflow-hidden rounded-[2.5rem] bg-blue-50 dark:bg-zinc-800/50 shadow-sm border border-zinc-100 dark:border-zinc-800 flex flex-col">
                        <div className="relative h-64 w-full overflow-hidden flex items-center justify-center">
                            <Image
                                src="/how-it-works-3.png"
                                alt="No Guilt Placard"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="bg-blue-900 dark:bg-blue-950 p-6 text-center mt-auto relative z-20">
                            <h3 className="font-bold text-xl text-white mb-2">3. Eat. No Guilt</h3>
                            <p className="text-white/80 text-sm font-medium">(Whey protein)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
