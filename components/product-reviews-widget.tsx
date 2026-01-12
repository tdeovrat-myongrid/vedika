"use client"

import Giscus from '@giscus/react';
import { useTheme } from "next-themes";

export function ProductReviewsWidget() {
    const { theme } = useTheme();

    return (
        <section className="mx-auto max-w-4xl px-6 py-16">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <h3 className="font-heading text-2xl font-bold text-zinc-900 dark:text-white mb-8 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                    Customer Discussions & Reviews
                </h3>

                {/* 
                   Giscus uses GitHub Discussions to store comments.
                   It is completely free and open source.
                   
                   You need to:
                   1. Create a public GitHub repo (or use existing).
                   2. Enable "Discussions" feature in repo settings.
                   3. Install "Giscus" app on that repo.
                   4. Get the repoId and categoryId from giscus.app.
                   
                   Below are placeholders. You MUST update repo, repoId, and categoryId 
                   for this to work on your real site.
                */}
                <Giscus
                    id="comments"
                    repo="tdeovrat-myongrid/vedika" // Placeholder: Replace with your actual username/repo
                    repoId="R_kgDOL9..."           // Placeholder: Get this from giscus.app
                    category="General"             // Placeholder: Discussion category
                    categoryId="DIC_kwDOL9..."     // Placeholder: Get this from giscus.app
                    mapping="pathname"
                    term="Welcome to The Clean Crate reviews!"
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="top"
                    theme={theme === 'dark' ? 'transparent_dark' : 'light'}
                    lang="en"
                    loading="lazy"
                />

                <p className="text-center text-xs text-zinc-400 mt-8">
                    Powered by GitHub Discussions (Free & Open Source)
                </p>
            </div>
        </section>
    );
}
