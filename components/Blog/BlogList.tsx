"use client";

import { Search, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { PostData } from "@/lib/posts";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface BlogListProps {
    initialPosts: PostData[];
}

const categories = ["全部", "Zero 隨手記", "AI 增長引擎", "思維心法", "日常習慣", "數位生活", "生產力", "自我照顧"];

export default function BlogList({ initialPosts }: BlogListProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // URL is the source of truth for Category
    const selectedCategory = searchParams.get("category") || "全部";

    // Internal state for Search (debounced ideally, but simple here)
    const [searchQuery, setSearchQuery] = useState("");

    // Internal state for how many articles to show
    const [visibleCount, setVisibleCount] = useState(6);

    const handleCategoryChange = (category: string) => {
        const params = new URLSearchParams(searchParams);
        if (category === "全部") {
            params.delete("category");
        } else {
            params.set("category", category);
        }
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const filteredArticles = useMemo(() => {
        return initialPosts.filter(article => {
            const matchesCategory = selectedCategory === "全部" || article.category === selectedCategory;
            const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [initialPosts, selectedCategory, searchQuery]);

    const featuredArticles = useMemo(() => initialPosts.filter(a => a.featured), [initialPosts]);

    return (
        <div className="max-w-6xl mx-auto px-6 text-foreground">

            {/* Header omitted (handled by parent page) or kept here? kept here for layout simplicity */}

            {/* Search Bar */}
            <div className="mb-8 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="搜尋文章標題或內容..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
            </div>

            {/* Category Filter */}
            <div className="mb-12 flex flex-wrap gap-3">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === cat
                            ? "bg-primary text-white shadow-lg shadow-primary/25"
                            : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Featured Articles */}
            {selectedCategory === "全部" && !searchQuery && (
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full" />
                        精選文章
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {featuredArticles.map(article => (
                            <Link
                                key={article.id}
                                href={`/blog/${article.slug}`}
                                className="group bg-gradient-to-br from-white to-stone-50 border-2 border-stone-100 rounded-3xl p-8 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                                        <span className={`px-3 py-1 rounded-full ${article.category === 'Zero 隨手記' ? 'bg-amber-100 text-amber-700' : 'bg-primary/10 text-primary'}`}>
                                            {article.category}
                                        </span>
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-muted-foreground font-serif leading-relaxed line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Clock className="w-4 h-4" />
                                        {article.readTime}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* POWER QUOTE */}
            <section className="my-20 py-12 border-y border-stone-200">
                <blockquote className="text-center max-w-4xl mx-auto space-y-6">
                    <p className="text-2xl md:text-4xl font-serif font-bold text-foreground leading-normal">
                        「我的<span className="text-stone-400">資歷</span>是 25 年，<br className="md:hidden" />
                        但我的<span className="text-primary">知識</span>永遠保持在最新的 24 小時。」
                    </p>
                    <footer className="text-sm font-bold tracking-widest uppercase text-muted-foreground">
                        — Zero Wong
                    </footer>
                </blockquote>
            </section>

            {/* All Articles Grid */}
            <section className="mb-24">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full" />
                    {selectedCategory === "全部" ? "所有文章" : selectedCategory}
                    <span className="text-sm font-normal text-muted-foreground ml-2">({filteredArticles.length})</span>
                </h2>

                {filteredArticles.length === 0 ? (
                    <div className="text-center py-20 text-muted-foreground">
                        <p className="text-lg">找不到符合條件的文章</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredArticles.slice(0, visibleCount).map(article => (
                                <Link
                                    key={article.id}
                                    href={`/blog/${article.slug}`}
                                    className={`group bg-white border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${article.category === 'Zero 隨手記' ? 'border-amber-200 bg-amber-50/30' : 'border-stone-100'}`}
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className={`px-2 py-1 rounded-full font-bold ${article.category === 'Zero 隨手記' ? 'bg-amber-100 text-amber-700' : 'bg-primary/10 text-primary'}`}>
                                                {article.category}
                                            </span>
                                            <span className="text-muted-foreground">{article.date}</span>
                                        </div>
                                        <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground font-serif line-clamp-3 leading-relaxed">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-stone-100">
                                            <Clock className="w-3 h-3" />
                                            {article.readTime}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {filteredArticles.length > visibleCount && (
                            <div className="mt-12 text-center">
                                <button
                                    onClick={() => setVisibleCount(prev => prev + 6)}
                                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-stone-100 text-stone-600 font-bold hover:bg-primary hover:text-white transition-all duration-300 group"
                                >
                                    瀏覽更多文章
                                    <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </>
                )}
            </section>



            {/* READING LIST SECTION */}
            <section className="bg-stone-100 rounded-[2.5rem] p-10 md:p-14">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </span>
                    Zero 本月學習書單
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Book 1 */}
                    <div className="space-y-4">
                        <div className="aspect-[2/3] bg-white rounded-xl shadow-md border border-stone-200 relative flex items-center justify-center overflow-hidden group">
                            <Image
                                src="/books/zero-to-one.png"
                                alt="Zero to One Book Cover"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Zero to One</h3>
                            <p className="text-sm text-muted-foreground">Peter Thiel</p>
                            <p className="mt-2 text-sm text-stone-600 font-serif leading-relaxed">
                                「從 0 到 1」是創新的本質。這本書不斷提醒我，不要只做複製的事，要尋找那些還沒被發現的秘密。
                            </p>
                        </div>
                    </div>
                    {/* Book 2 */}
                    <div className="space-y-4">
                        <div className="aspect-[2/3] bg-white rounded-xl shadow-md border border-stone-200 relative flex items-center justify-center overflow-hidden group">
                            <Image
                                src="/books/atomic-habits.png"
                                alt="Atomic Habits Book Cover"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">原子習慣</h3>
                            <p className="text-sm text-muted-foreground">James Clear</p>
                            <p className="mt-2 text-sm text-stone-600 font-serif leading-relaxed">
                                管理團隊其實就是管理習慣。這本書提供了非常實用的系統化方法，幫助員工建立正向迴圈。
                            </p>
                        </div>
                    </div>
                    {/* Book 3 */}
                    <div className="space-y-4">
                        <div className="aspect-[2/3] bg-white rounded-xl shadow-md border border-stone-200 relative flex items-center justify-center overflow-hidden group">
                            <Image
                                src="/books/antifragile.png"
                                alt="Antifragile Book Cover"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">反脆弱</h3>
                            <p className="text-sm text-muted-foreground">Nassim Taleb</p>
                            <p className="mt-2 text-sm text-stone-600 font-serif leading-relaxed">
                                餐飲業充滿了不確定性。這本書教我如何不只是「抵抗」衝擊，而是從混亂中獲益與成長。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
