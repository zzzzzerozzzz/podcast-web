import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, Archive } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getPostsByCategory, PostData } from "@/lib/posts";

export default async function AIEnginePage() {
    const posts = await getPostsByCategory("AI 增長引擎");

    return (
        <main className="min-h-screen bg-background pb-24">
            {/* Simple Hero / Intro */}
            <section className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[5rem] -z-10 blur-3xl opacity-50" />
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mx-auto">
                        <Sparkles className="w-4 h-4" />
                        專題系列：AI 增長引擎
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                        重塑工作流，<br />
                        <span className="text-primary italic">從線性到指數級增長</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed font-serif italic max-w-2xl mx-auto">
                        「我們不只是在使用 AI，我們在定義規則。」<br />
                        在這裡，Zero 分享如何將 AI 模具化，將其轉化為你最忠誠的「數位員工」。
                    </p>

                    {/* Membership Teaser / Quick Links */}
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Link href="/listen?category=AI">
                            <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5 px-6 gap-2">
                                <Play className="w-4 h-4" /> 聆聽 AI 專題 Podcast
                            </Button>
                        </Link>
                        <Link href="/blog">
                            <Button variant="ghost" className="rounded-full gap-2 text-muted-foreground">
                                <Archive className="w-4 h-4" /> 瀏覽所有分類
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Core Articles Grid - The Main Focus */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-12 border-b border-stone-100 pb-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            實戰教學日誌 <span className="text-sm font-normal text-muted-foreground ml-2">已發布 {posts.length} 篇</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: PostData) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="aspect-[16/9] relative">
                                    <Image
                                        src={post.image || "/images/ai-growth-engine-abstract.png"}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                                </div>

                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 bg-stone-300 rounded-full" />
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-6 flex-1 font-serif">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center text-sm font-bold text-primary gap-2 pt-4 border-t border-stone-50">
                                        深入閱讀 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Member-Only Promotion Area - Aligned with Brand Strategy */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="bg-stone-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-12 shadow-2xl">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="md:w-1/2 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary-foreground text-xs font-bold uppercase tracking-wider border border-white/10">
                            Member Exclusive
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                            解鎖深度 AI <br />
                            <span className="text-primary italic">營運實戰 Podcast</span>
                        </h2>
                        <p className="text-lg text-stone-300 font-serif leading-relaxed">
                            公開文章僅是冰山一角。在會員專區，我們深入剖析企業級 AI 佈署、跨國團隊溝通與自動化營收系統。加入 Zero to Growth，獲取最前沿的增長情報。
                        </p>
                        <div className="pt-4">
                            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-10 h-14 text-lg font-bold shadow-lg shadow-primary/25">
                                加入會員方案
                            </Button>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-stone-800 shadow-inner group">
                        <Image
                            src="/images/membership-exclusive.png"
                            alt="Member Podcast Preview"
                            fill
                            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                                <Play className="w-6 h-6 text-white fill-current" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
