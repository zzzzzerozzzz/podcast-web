"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

// SEO優化文章數據
const articles = [
    {
        id: 1,
        slug: "hong-kong-foreign-labor-application-guide-2024",
        title: "【2024最新】香港外勞申請完整攻略：流程、費用、時間一次看懂",
        excerpt: "完整解析香港輸入外勞計劃申請流程，包括補充勞工優化計劃詳細步驟、所需文件清單、費用明細及審批時間。助您快速了解如何合法聘用內地勞工。",
        category: "申請指南",
        readTime: "15 分鐘",
        date: "2024-01-10",
        image: "/hero.png",
        featured: true,
    },
    {
        id: 2,
        slug: "slsp-supplementary-labor-scheme-explained",
        title: "補充勞工優化計劃（SLSP）深度解讀：26個行業開放申請",
        excerpt: "詳細介紹補充勞工優化計劃的適用行業、申請資格、配額限制及最新政策更新。了解餐飲、零售、建造業如何透過計劃解決人手短缺問題。",
        category: "政策解讀",
        readTime: "12 分鐘",
        date: "2024-01-08",
        image: "/service_interview.png",
        featured: true,
    },
    {
        id: 3,
        slug: "foreign-labor-cost-analysis",
        title: "香港聘用外勞成本全面分析：僱主必須知道的費用清單",
        excerpt: "從申請費、簽證費、保險費到住宿津貼，完整breakdown聘用外勞的各項成本。教您如何控制預算，避免隱藏費用。",
        category: "成本分析",
        readTime: "10 分鐘",
        date: "2024-01-05",
        image: "/hero.png",
        featured: false,
    },
    {
        id: 4,
        slug: "restaurant-industry-labor-shortage-solution",
        title: "餐飲業人手荒解決方案：如何透過外勞計劃穩定營運",
        excerpt: "針對餐飲業僱主的專題文章，分析行業痛點、外勞申請策略、崗位培訓要點，以及如何降低員工流失率。",
        category: "行業專題",
        readTime: "8 分鐘",
        date: "2024-01-03",
        image: "/service_interview.png",
        featured: false,
    },
    {
        id: 5,
        slug: "foreign-labor-interview-tips",
        title: "外勞面試技巧：如何挑選最適合的員工",
        excerpt: "作為擁有25年營運管理經驗的專家，分享如何在面試中評估外勞的技能、態度和穩定性，確保人崗匹配。",
        category: "招聘技巧",
        readTime: "7 分鐘",
        date: "2024-01-01",
        image: "/hero.png",
        featured: false,
    },
    {
        id: 6,
        slug: "labor-law-compliance-guide",
        title: "香港外勞僱傭法規全攻略：避免法律風險的必讀指南",
        excerpt: "詳解香港勞工法例對外勞的各項規定，包括工資、工時、假期、保險要求，以及常見違規案例與處罰。",
        category: "法規合規",
        readTime: "12 分鐘",
        date: "2023-12-28",
        image: "/service_interview.png",
        featured: false,
    },
];

const categories = ["全部", "申請指南", "政策解讀", "成本分析", "行業專題", "招聘技巧", "法規合規"];

export default function BlogPage() {
    const featuredArticles = articles.filter(a => a.featured);
    const regularArticles = articles.filter(a => !a.featured);

    return (
        <div className="min-h-screen font-sans selection:bg-brand-navy/10">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-sm font-semibold tracking-wide mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                            專業知識分享
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-6">
                            外勞申請<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600">資訊中心</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            深入了解香港外勞政策、申請流程、行業趨勢及實用技巧。<br className="hidden md:block" />
                            助您做出明智的人力資源決策。
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-6 border-b border-slate-200 sticky top-20 bg-white/95 backdrop-blur-sm z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${category === "全部"
                                        ? "bg-brand-blue text-white"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Articles */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-brand-blue mb-8 flex items-center gap-2">
                        <span className="w-1 h-6 bg-brand-gold rounded-full"></span>
                        精選文章
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {featuredArticles.map((article) => (
                            <Link href={`/blog/${article.slug}`} key={article.id}>
                                <article className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300">
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-brand-gold text-white text-xs font-semibold rounded-full">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-sm text-slate-500">
                                            <div className="flex items-center gap-4">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {article.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {article.readTime}
                                                </span>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-brand-gold group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Articles */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-brand-blue mb-8 flex items-center gap-2">
                        <span className="w-1 h-6 bg-brand-blue rounded-full"></span>
                        所有文章
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularArticles.map((article) => (
                            <Link href={`/blog/${article.slug}`} key={article.id}>
                                <article className="group bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300 h-full">
                                    <div className="relative h-40 overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2 py-0.5 bg-brand-blue/90 text-white text-xs font-medium rounded-full">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center gap-3 text-xs text-slate-500">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {article.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {article.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-navy">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        需要專業的外勞申請協助？
                    </h2>
                    <p className="text-lg text-white/80 mb-8">
                        我們擁有 25 年行業經驗，為超過 20 個品牌提供人力資源解決方案。<br className="hidden md:block" />
                        立即聯繫我們，讓專家為您解答所有疑問。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/consultation">
                            <button className="bg-brand-gold hover:bg-yellow-500 text-brand-navy px-8 py-4 rounded-xl font-semibold shadow-xl transition-all flex items-center justify-center gap-2">
                                免費諮詢 <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold transition-all">
                                聯繫我們
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
