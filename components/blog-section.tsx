"use client"

import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/data/blogs"

export function BlogSection() {
    const featuredPost = blogPosts[0];
    const recentPosts = blogPosts.slice(1, 4);

    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-2 block">
                            Latest Updates
                        </span>
                        <h2 className="font-heading text-4xl font-bold text-zinc-900 dark:text-white">
                            Latest from The Crate
                        </h2>
                    </div>
                    <Link href="/blogs" className="hidden md:inline-flex items-center gap-2 text-sm font-bold border-b border-black dark:border-white pb-1 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                        View All Posts
                        <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>

                {/* Featured Post */}
                <div className="group cursor-pointer mb-16">
                    <Link href={`/blogs/${featuredPost.slug}`} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Mobile Header (Heading -> Photo -> Text) */}
                        <div className="lg:hidden">
                            <div className="flex gap-4 text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4">
                                <span className="text-blue-600">{featuredPost.category}</span>
                                <span>•</span>
                                <span>{featuredPost.date}</span>
                            </div>
                            <h3 className="font-heading text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 group-hover:text-blue-600 transition-colors leading-tight">
                                {featuredPost.title}
                            </h3>
                        </div>

                        <div className="relative aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden rounded-[2.5rem]">
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div>
                            {/* Desktop Header */}
                            <div className="hidden lg:block">
                                <div className="flex gap-4 text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4">
                                    <span className="text-blue-600">{featuredPost.category}</span>
                                    <span>•</span>
                                    <span>{featuredPost.date}</span>
                                </div>
                                <h3 className="font-heading text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 group-hover:text-blue-600 transition-colors leading-tight">
                                    {featuredPost.title}
                                </h3>
                            </div>

                            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl line-clamp-3 mb-8">
                                {featuredPost.excerpt}
                            </p>
                            <span className="inline-flex items-center text-sm font-bold text-zinc-900 dark:text-white underline decoration-2 underline-offset-4 group-hover:text-blue-600 group-hover:decoration-blue-600 transition-all">
                                Read Article
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Recent Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recentPosts.map((post) => (
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
                                    <span>By {post.author}</span>
                                </div>
                                <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-white mb-3 line-clamp-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-12 text-center md:hidden">
                    <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-bold border-b border-black dark:border-white pb-1 hover:text-blue-600 transition-colors">
                        View All Posts
                        <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
