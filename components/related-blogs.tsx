"use client"

import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/data/blogs"

interface RelatedBlogsProps {
    currentSlug: string;
}

export function RelatedBlogs({ currentSlug }: RelatedBlogsProps) {
    const relatedPosts = blogPosts
        .filter(post => post.slug !== currentSlug)
        .slice(0, 3); // Just take next 3 for now

    return (
        <section className="bg-white dark:bg-black py-24 border-t border-zinc-100 dark:border-zinc-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="font-heading text-3xl font-bold text-zinc-900 dark:text-white">
                        You Might Also Like
                    </h2>
                    <Link href="/blogs" className="hidden md:inline-flex items-center gap-2 text-sm font-bold border-b border-black dark:border-white pb-1 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                        View All
                        <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedPosts.map((post) => (
                        <Link key={post.id} href={`/blogs/${post.slug}`} className="group flex flex-col h-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="relative aspect-[16/10] w-full overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex gap-3 text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.category}</span>
                                </div>
                                <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-white mb-3 line-clamp-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white mt-auto group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    Read Article
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
