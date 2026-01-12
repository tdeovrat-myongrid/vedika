"use client"

import * as React from "react"

export function ProductInfoDetails() {
    return (
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800 space-y-6">
                <div>
                    <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-white mb-2">Wholesome Goodness In Every Scoop</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        We believe a great day starts with honest nutrition. That&apos;s why our oats blend brings together wholesome grains, natural sweetness from dates, protein-packed whey, & crunchy nuts, balanced with the goodness of berries & chia seeds.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-medium text-zinc-900 dark:text-white mb-1">Benefits</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">High Protein, Fiber-rich, Antioxidant Power, No Refined Sugar.</p>
                    </div>
                    <div>
                        <h4 className="font-medium text-zinc-900 dark:text-white mb-1">No Shortcuts</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Just clean, delicious energy to keep you fueled, focused, and feeling good.</p>
                    </div>
                </div>

                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 space-y-6">
                    {/* Supplement Facts */}
                    <div>
                        <h4 className="font-heading text-md font-bold text-zinc-900 dark:text-white mb-4 border-b border-zinc-200 dark:border-zinc-700 pb-2">Supplement Facts</h4>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                            <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-1">
                                <span className="text-zinc-600 dark:text-zinc-400">Rolled Oats</span>
                                <span className="font-medium text-zinc-900 dark:text-white">40 g (40%)</span>
                            </div>
                            <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-1">
                                <span className="text-zinc-600 dark:text-zinc-400">Chia Seeds</span>
                                <span className="font-medium text-zinc-900 dark:text-white">4 g (4%)</span>
                            </div>
                            <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-1">
                                <span className="text-zinc-600 dark:text-zinc-400">Date Powder</span>
                                <span className="font-medium text-zinc-900 dark:text-white">15 g (15%)</span>
                            </div>
                            <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-1">
                                <span className="text-zinc-600 dark:text-zinc-400">Cashew</span>
                                <span className="font-medium text-zinc-900 dark:text-white">4 g (4%)</span>
                            </div>
                            <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-1">
                                <span className="text-zinc-600 dark:text-zinc-400">Whey Protein</span>
                                <span className="font-medium text-zinc-900 dark:text-white">11 g (11%)</span>
                            </div>
                            <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-1">
                                <span className="text-zinc-600 dark:text-zinc-400">Almonds</span>
                                <span className="font-medium text-zinc-900 dark:text-white">4 g (4%)</span>
                            </div>
                            <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-1">
                                <span className="text-zinc-600 dark:text-zinc-400">Dried Cranberry</span>
                                <span className="font-medium text-zinc-900 dark:text-white">8 g (8%)</span>
                            </div>
                            <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-1">
                                <span className="text-zinc-600 dark:text-zinc-400">Cocoa Powder</span>
                                <span className="font-medium text-zinc-900 dark:text-white">3 g (3%)</span>
                            </div>
                            <div className="flex justify-between border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-1">
                                <span className="text-zinc-600 dark:text-zinc-400">Dried Blueberry</span>
                                <span className="font-medium text-zinc-900 dark:text-white">4 g (4%)</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                            <span className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Allergen Information</span>
                            <p className="text-xs font-medium text-zinc-900 dark:text-white">Contains Nuts, Milk, Whey.</p>
                        </div>
                        <div>
                            <span className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Serving Suggestions</span>
                            <p className="text-xs font-medium text-zinc-900 dark:text-white">Enjoy with Milk, Yogurt, or as a Snack.</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-700">
                        <div>
                            <span className="block text--[10px] uppercase tracking-wider text-zinc-500">License No.</span>
                            <p className="text-xs font-mono text-zinc-900 dark:text-white">23625032007408</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] text-zinc-500">Mfg Date: 25 Nov 2025</p>
                            <p className="text-[10px] text-zinc-500">Best Before 4 Months</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
