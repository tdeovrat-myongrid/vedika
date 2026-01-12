"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { InstagramReel } from "@/lib/instagram"

export function InstagramFeedSection({ reels }: { reels: InstagramReel[] }) {
    const [selectedReelIndex, setSelectedReelIndex] = useState<number | null>(null)

    const handleReelClick = (e: React.MouseEvent, index: number) => {
        e.preventDefault()
        setSelectedReelIndex(index)
    }

    const handleClose = () => setSelectedReelIndex(null)

    const handlePrevious = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation()
        if (selectedReelIndex === null) return
        setSelectedReelIndex((prev) => (prev! > 0 ? prev! - 1 : reels.length - 1))
    }, [selectedReelIndex, reels.length])

    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation()
        if (selectedReelIndex === null) return
        setSelectedReelIndex((prev) => (prev! < reels.length - 1 ? prev! + 1 : 0))
    }, [selectedReelIndex, reels.length])

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedReelIndex === null) return
            if (e.key === "Escape") handleClose()
            if (e.key === "ArrowLeft") handlePrevious()
            if (e.key === "ArrowRight") handleNext()
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [selectedReelIndex, handlePrevious, handleNext])

    const selectedReel = selectedReelIndex !== null ? reels[selectedReelIndex] : null

    // Triple the reels for smooth infinite scrolling
    const displayReels = [...reels, ...reels, ...reels]

    return (
        <section className="py-24 bg-white dark:bg-black overflow-hidden selection:bg-blue-100 dark:selection:bg-blue-900">
            <div className="w-full">
                {/* Header (Centered Container) */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
                                <span className="text-xl">📸</span> On The Gram
                            </div>
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
                                Join our community
                            </h2>
                        </div>
                        <a
                            href="https://www.instagram.com/poushtpop/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-bold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                        >
                            <span>@poushtpop</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    </div>
                </div>

                {/* TV-Style Carousel Container */}
                <div className="mx-4 md:mx-auto max-w-6xl relative perspective-1000">
                    {/* TV Frame */}
                    <div className="relative bg-zinc-200 dark:bg-zinc-800 rounded-[2.5rem] p-3 md:p-5 shadow-2xl ring-1 ring-black/5 dark:ring-white/10 border-b-8 border-zinc-300 dark:border-zinc-950">
                        {/* Screen Container */}
                        <div className="relative bg-black rounded-[1.8rem] overflow-hidden border-4 border-zinc-300 dark:border-zinc-950 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]">

                            {/* Screen Glare & Reflection */}
                            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-b from-white/10 to-transparent rotate-45 blur-3xl pointer-events-none z-20" />

                            {/* CRT Scanline Effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-10 pointer-events-none opacity-40 mix-blend-overlay" />

                            <motion.div
                                className="flex gap-4 w-max py-6"
                                animate={{ x: ["0%", "-33.33%"] }}
                                transition={{
                                    repeat: Infinity,
                                    ease: "linear",
                                    duration: 35
                                }}
                                style={{ paddingLeft: "16px" }}
                            >
                                {displayReels.map((reel, index) => (
                                    <div
                                        key={`${reel.id}-${index}`}
                                        onClick={(e) => handleReelClick(e, index % reels.length)}
                                        className="group relative aspect-[9/16] w-[200px] md:w-[260px] flex-shrink-0 rounded-xl overflow-hidden bg-zinc-900 cursor-pointer border border-white/5 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
                                    >
                                        {/* Image */}
                                        <Image
                                            src={reel.media_type === "VIDEO" && reel.thumbnail_url ? reel.thumbnail_url : reel.media_url}
                                            alt={reel.caption || "Instagram Post"}
                                            fill
                                            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                        />

                                        {/* Play Icon */}
                                        {reel.media_type === "VIDEO" && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="0" className="translate-x-0.5">
                                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* TV Controls / Branding */}
                        <div className="mt-4 flex justify-between items-center px-6 py-2 bg-zinc-300 dark:bg-zinc-900/50 rounded-xl border border-white/40 dark:border-white/5 shadow-sm">
                            {/* Left: Power & Controls */}
                            <div className="flex gap-4 items-center">
                                {/* Power LED */}
                                <div className="relative flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
                                    <span className="text-[8px] font-medium text-zinc-500 dark:text-zinc-600 uppercase tracking-wider">Power</span>
                                </div>
                                {/* IR Receiver */}
                                <div className="w-8 h-3 bg-zinc-800 dark:bg-black rounded-full border border-white/10 shadow-inner" />
                            </div>

                            {/* Center: Branding Badge */}
                            <div className="flex flex-col items-center">
                                <div className="text-zinc-500 dark:text-zinc-500 font-bold text-xs tracking-[0.4em] uppercase font-mono drop-shadow-sm">
                                    POUSHTPOP
                                </div>
                                <div className="text-[8px] text-zinc-600 dark:text-zinc-700 tracking-[0.2em] font-medium">HIGH FIDELITY</div>
                            </div>

                            {/* Right: Speaker Grill */}
                            <div className="flex gap-3 items-center">
                                <div className="flex items-center gap-[2px]">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={`grill-${i}`} className="flex flex-col gap-[2px]">
                                            {[...Array(3)].map((_, j) => (
                                                <div key={`dot-${i}-${j}`} className="w-[2px] h-[2px] rounded-full bg-zinc-400 dark:bg-zinc-700/80 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_1px_rgba(0,0,0,1)]" />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-[8px] font-bold text-zinc-500 dark:text-zinc-600 uppercase -rotate-90 origin-center leading-none tracking-tighter">
                                    Stereo
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Scroll Hint (Removed as it's now an auto-scrolling carousel) */}
            </div>

            {/* Reel Viewer Modal */}
            <AnimatePresence>
                {selectedReel && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-0">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleClose}
                            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
                        />

                        {/* Navigation Buttons (Desktop) */}
                        <button
                            onClick={handlePrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 hidden md:block z-[101]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 hidden md:block z-[101]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                        </button>

                        {/* Close Button Mobile/Desktop */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-white/70 hover:text-white z-[101]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-5xl h-[80vh] md:h-[85vh] bg-black rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-[101]"
                        >
                            {/* Left: Media */}
                            <div className="flex-1 bg-black relative flex items-center justify-center">
                                <Image
                                    src={selectedReel.media_type === "VIDEO" && selectedReel.thumbnail_url ? selectedReel.thumbnail_url : selectedReel.media_url}
                                    alt={selectedReel.caption}
                                    fill
                                    className="object-contain"
                                />
                                {/* Play Button Overlay (Functional-ish) */}
                                <a
                                    href={selectedReel.permalink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex items-center justify-center group"
                                >
                                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="0" className="translate-x-1">
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                    </div>
                                    <span className="absolute mt-28 text-white font-medium bg-black/50 px-4 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                        Watch on Instagram
                                    </span>
                                </a>
                            </div>

                            {/* Right: Info Panel */}
                            <div className="w-full md:w-[400px] bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 flex flex-col h-[40%] md:h-full">
                                {/* Header */}
                                <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                                        <div className="w-full h-full rounded-full bg-white dark:bg-black p-0.5">
                                            {/* Avatar Placeholder */}
                                            <div className="w-full h-full rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-500">
                                                PP
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-1">
                                            poushtpop
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#3b82f6" stroke="#3b82f6" strokeWidth="1" className="bg-white rounded-full"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01" stroke="white" strokeWidth="3"></polyline></svg>
                                        </h3>
                                        <p className="text-xs text-zinc-500">Original Audio</p>
                                    </div>
                                </div>

                                {/* Comments / Caption Area */}
                                <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
                                    <div className="flex gap-3 mb-4">
                                        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-500">
                                            PP
                                        </div>
                                        <div className="text-sm">
                                            <span className="font-bold mr-2 text-zinc-900 dark:text-white">poushtpop</span>
                                            <span className="text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap leading-relaxed">
                                                {selectedReel.caption}
                                            </span>
                                            <div className="mt-2 text-xs text-zinc-400">
                                                2d
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fake Comments for visual similarity */}
                                    <div className="space-y-4 pl-11">
                                        <div className="text-sm group">
                                            <span className="font-bold mr-2 text-zinc-900 dark:text-white">fan_account</span>
                                            <span className="text-zinc-600 dark:text-zinc-400">Looking delicious! 😍</span>
                                            <div className="mt-1 flex items-center gap-3 text-xs text-zinc-400">
                                                <span>1d</span>
                                                <span>Reply</span>
                                            </div>
                                        </div>
                                        <div className="text-sm group">
                                            <span className="font-bold mr-2 text-zinc-900 dark:text-white">healthy_eats</span>
                                            <span className="text-zinc-600 dark:text-zinc-400">Need to try this ASAP 🔥</span>
                                            <div className="mt-1 flex items-center gap-3 text-xs text-zinc-400">
                                                <span>5h</span>
                                                <span>Reply</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer (Actions) */}
                                <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex gap-4">
                                            <span className="text-zinc-900 dark:text-white hover:opacity-70 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                            </span>
                                            <span className="text-zinc-900 dark:text-white hover:opacity-70 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                            </span>
                                            <span className="text-zinc-900 dark:text-white hover:opacity-70 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                            </span>
                                        </div>
                                        <span className="text-zinc-900 dark:text-white hover:opacity-70 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                        </span>
                                    </div>
                                    <div className="font-bold text-sm text-zinc-900 dark:text-white mb-2">
                                        12,453 likes
                                    </div>
                                    <div className="text-[10px] text-zinc-400 uppercase tracking-wide mb-3">
                                        January 9, 2024
                                    </div>
                                    <a
                                        href={selectedReel.permalink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block border-t border-zinc-100 dark:border-zinc-800 pt-3 text-center text-xs font-semibold text-blue-500 hover:text-blue-600"
                                    >
                                        View on Instagram
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}
