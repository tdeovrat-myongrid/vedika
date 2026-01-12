"use client"

import { useState } from "react"

interface ShareButtonProps {
    title: string;
    text: string;
    url?: string; // Optional, defaults to current window location if available
}

export function ShareButton({ title, text, url }: ShareButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const shareUrl = url || window.location.href;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: text,
                    url: shareUrl,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            // Fallback to copy to clipboard
            try {
                await navigator.clipboard.writeText(shareUrl);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    };

    return (
        <button
            onClick={handleShare}
            className="group flex items-center gap-2 px-5 py-2.5 bg-zinc-100/50 hover:bg-blue-50 dark:bg-zinc-800/50 dark:hover:bg-blue-900/20 text-zinc-900 dark:text-white rounded-full transition-all duration-300 border border-zinc-200 dark:border-zinc-700 hover:border-blue-200 dark:hover:border-blue-800"
            aria-label="Share this post"
        >
            <div className="relative w-4 h-4">
                {copied ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-600 dark:text-green-400 absolute inset-0 animate-in zoom-in spin-in-180 duration-300">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 absolute inset-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                        <polyline points="16 6 12 2 8 6"></polyline>
                        <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                )}
            </div>
            <span className="text-sm font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {copied ? "Link Copied!" : "Share Article"}
            </span>
        </button>
    )
}
