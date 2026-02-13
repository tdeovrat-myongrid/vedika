"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

interface EverythingYouNeedToKnowProps {
    product?: any;
}

export function EverythingYouNeedToKnow({ product }: EverythingYouNeedToKnowProps) {
    const [activeTab, setActiveTab] = React.useState("Description")

    const tabs = ["Description", "Ingredients", "Nutrition", "How to use"]

    // Dynamic data with fallbacks
    const title = product?.title || "Mocha Rush – Ready To Eat Oats";
    const description = product?.description || "Start your day with Mocha Rush, a wholesome, protein-rich breakfast crafted for modern, health-conscious lifestyles. Blending the rich taste of cocoa and coffee with the goodness of rolled oats, dry fruits, seeds, and whey protein, Mocha Rush delivers both nutrition and indulgence in every bite. Made with no added sugar and naturally sweetened using date powder, this ready-to-eat oats mix fuels your body with clean energy.";

    return (
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <h2 className="text-center font-heading text-4xl font-bold text-zinc-900 dark:text-white mb-16 tracking-tight">
                Everything You Need to Know
            </h2>

            {/* Glass-like Tabs Container */}
            <div className="flex justify-center mb-12">
                <div className="flex flex-wrap justify-center gap-2 bg-zinc-100/50 dark:bg-zinc-800/50 backdrop-blur-md p-1.5 rounded-full border border-zinc-200/50 dark:border-zinc-700/50">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all relative z-10 ${activeTab === tab
                                ? "text-white shadow-sm"
                                : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                                }`}
                        >
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-zinc-900 dark:bg-zinc-700 rounded-full -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Glass Content Card */}
            <div className="min-h-[400px] relative">
                <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 shadow-sm ring-1 ring-zinc-900/5 transition-all">
                    <AnimatePresence mode="wait">
                        {activeTab === "Description" && (
                            <motion.div
                                key="Description"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                                className="max-w-4xl mx-auto text-center"
                            >
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                                    {title}
                                </h3>
                                <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg lg:text-xl whitespace-pre-line">
                                    {description}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "Ingredients" && (
                            <motion.div
                                key="Ingredients"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                                className="max-w-4xl mx-auto"
                            >
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
                                    Ingredient Composition (Carefully Balanced)
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12 text-zinc-600 dark:text-zinc-400 text-lg">
                                    <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-700 pb-1"><span>Rolled Oats</span> <span className="font-semibold text-zinc-900 dark:text-white">37%</span></div>
                                    <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-700 pb-1"><span>Whey Protein</span> <span className="font-semibold text-zinc-900 dark:text-white">20%</span></div>
                                    <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-700 pb-1"><span>Date Powder</span> <span className="font-semibold text-zinc-900 dark:text-white">12%</span></div>
                                    <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-700 pb-1"><span>Pumpkin Seeds</span> <span className="font-semibold text-zinc-900 dark:text-white">5%</span></div>
                                    <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-700 pb-1"><span>Dried Cranberries</span> <span className="font-semibold text-zinc-900 dark:text-white">5%</span></div>
                                    <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-700 pb-1"><span>Chia Seeds</span> <span className="font-semibold text-zinc-900 dark:text-white">4%</span></div>
                                    <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-700 pb-1"><span>Cocoa Powder</span> <span className="font-semibold text-zinc-900 dark:text-white">4%</span></div>
                                    <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-700 pb-1"><span>Coffee Powder</span> <span className="font-semibold text-zinc-900 dark:text-white">4%</span></div>
                                    <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-700 pb-1"><span>Cashews</span> <span className="font-semibold text-zinc-900 dark:text-white">3%</span></div>
                                    <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-700 pb-1"><span>Walnuts</span> <span className="font-semibold text-zinc-900 dark:text-white">3%</span></div>
                                    <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-700 pb-1"><span>Almonds</span> <span className="font-semibold text-zinc-900 dark:text-white">3%</span></div>
                                </div>
                                <p className="mt-8 text-center text-sm text-zinc-500 italic">
                                    Selected to deliver natural sweetness, healthy fats, plant protein, and antioxidants.
                                </p>
                            </motion.div>
                        )}

                        {activeTab === "Nutrition" && (
                            <motion.div
                                key="Nutrition"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                                className="max-w-3xl mx-auto"
                            >
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
                                    Powerful Nutrition in Every 85g
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700">
                                        <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">369</div>
                                        <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Kcal Energy</div>
                                    </div>
                                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700">
                                        <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">22.5g</div>
                                        <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Protein</div>
                                    </div>
                                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700">
                                        <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">8g</div>
                                        <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Fiber</div>
                                    </div>
                                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700">
                                        <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">0g</div>
                                        <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Added Sugar</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "How to use" && (
                            <motion.div
                                key="How to use"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                                className="max-w-5xl mx-auto"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="group bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-8 text-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
                                        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🥣</div>
                                        <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Classic Bowl</h4>
                                        <p className="text-sm text-zinc-500">Enjoy with milk or yogurt for a creamy delight.</p>
                                    </div>
                                    <div className="group bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-8 text-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
                                        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🥗</div>
                                        <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Power Fruit Bowl</h4>
                                        <p className="text-sm text-zinc-500">Add fresh fruits like berries or banana slices.</p>
                                    </div>
                                    <div className="group bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-8 text-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
                                        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🥄</div>
                                        <h4 className="font-bold text-zinc-900 dark:text-white mb-2">On The Go</h4>
                                        <p className="text-sm text-zinc-500">Consume directly as a healthy, crunchy snack.</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
