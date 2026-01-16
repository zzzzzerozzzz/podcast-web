import Link from "next/link";
import { MoveLeft, Clock, Calendar, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPostData } from "@/lib/posts";
import ScrollProgress from "@/components/Blog/ScrollProgress";

import Image from "next/image";

// Helper to Select Image based on Category
const getCategoryImage = (category: string) => {
    switch (category) {
        case "AI 增長引擎": return "/images/blog-ai-engine.png";
        case "數位生活": return "/images/blog-digital.png";
        case "日常習慣": return "/images/blog-habit.png";
        case "思維心法": return "/images/blog-mindset.png";
        case "Zero 隨手記": return "/images/blog-notes.png";
        default: return "/images/hero-abstract.png";
    }
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const articleData = await getPostData(slug);

    return (
        <article className="min-h-screen bg-background pb-32">

            {/* Scroll Progress Bar */}
            <ScrollProgress />

            {/* Navigation */}
            <div className="max-w-3xl mx-auto px-6 pt-8 mb-8">
                <Link href="/blog" className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors group">
                    <MoveLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    返回文章列表
                </Link>
            </div>

            {/* Article Header */}
            <header className="max-w-3xl mx-auto px-6 mb-12 text-center">
                <div className="flex justify-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                        {articleData.category}
                    </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                    {articleData.title}
                </h1>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground font-medium">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {articleData.date}</span>
                    <span className="w-1 h-1 bg-stone-300 rounded-full" />
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {articleData.readTime}</span>
                </div>
            </header>

            {/* Featured Image */}
            <div className="max-w-4xl mx-auto px-6 mb-16">
                <div className="aspect-video bg-stone-100 rounded-3xl w-full shadow-lg relative overflow-hidden group">
                    {/* Decorative blur background */}
                    <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10" />

                    <Image
                        src={articleData.image || getCategoryImage(articleData.category)}
                        alt={articleData.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        priority
                    />
                </div>
            </div>

            {/* Main Content */}
            <div
                className="max-w-3xl mx-auto px-6 prose prose-stone prose-lg prose-headings:font-bold prose-headings:text-foreground prose-p:text-stone-700 prose-p:font-serif prose-p:leading-relaxed prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:bg-stone-50 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
                dangerouslySetInnerHTML={{ __html: articleData.contentHtml || "" }}
            />

            {/* Action Bar */}
            <div className="max-w-3xl mx-auto px-6 mt-16 pt-8 border-t border-stone-200 flex justify-between items-center">
                <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="rounded-full gap-2">
                        <Share2 className="w-4 h-4" /> 分享
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-full gap-2 text-muted-foreground hover:text-primary">
                        <Bookmark className="w-4 h-4" /> 收藏
                    </Button>
                </div>
                <div className="text-sm text-muted-foreground font-serif italic">
                    Written by Zero to Growth Team
                </div>
            </div>

        </article>
    );
}
