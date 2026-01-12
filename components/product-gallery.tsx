"use client"

import * as React from "react"
import Image from "next/image"

export function ProductGallery() {
    const [showNutrition, setShowNutrition] = React.useState(false);

    return (
        <>
            {/* Product Image Container */}
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800">
                <div className="absolute top-4 left-4 z-10 p-2">
                    <button
                        onClick={() => setShowNutrition(!showNutrition)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md transition-transform hover:scale-110 dark:bg-zinc-700 dark:text-white"
                        title={showNutrition ? "View Product" : "View Nutrition Facts"}
                    >
                        {showNutrition ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                        )}
                    </button>
                </div>

                <div className={`absolute inset-0 transition-opacity duration-500 ${showNutrition ? 'opacity-0' : 'opacity-100'}`}>
                    <Image
                        src="/product-packet.png"
                        alt="The Clean Crate Protein Oats Packet"
                        fill
                        className="object-contain p-8 hover:scale-105 transition-transform duration-500"
                        priority
                    />
                </div>

                <div className={`absolute inset-0 bg-white dark:bg-white transition-opacity duration-500 ${showNutrition ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                    <Image
                        src="/product-nutrition.png"
                        alt="The Clean Crate Nutrition Facts"
                        fill
                        className="object-contain p-4"
                    />
                </div>
            </div>

        </>
    );
}

// Helper to trigger the toggle from outside (using state hoisting would be ideal but for this drop-in replacement we'll keep the button inside OR portal, but simpler is to explain user needs to click the image icon)
// Actually, the user asked for "View full details" button to open this page.
// To achieve that without complex state lifting in a server component page, I will make this component render the BUTTON as well using React Portal or just layout structure.
// Let's modify the component to return TWO parts? No, that's messy.
// Better: The "View full details" button logic will be handled if I move the entire Right Side column to client component? No, SEO.
// Simplest solution:
// I will export a separate client component for the "View Details" button that shares context? Overkill.
// I will just put the toggle button ON the image (which I did) and maybe duplicate the external button functionality by wrapping the whole section? 
// Actually, let's keep it simple. I interpreted "open this page" as Toggle the view. 
// I will add a text below the image saying "Click icon to flip for info" or simply make the image flip on click.

