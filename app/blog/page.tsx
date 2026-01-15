import { Suspense } from "react";
import { getAllPosts } from "@/lib/posts";
import BlogList from "@/components/Blog/BlogList";
import { Tag } from "lucide-react";

export const metadata = {
    title: "專欄文章 | Zero to Growth",
    description: "探索關於正念生活、可持續成長與內在平靜的深度好文。",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <main className="max-w-6xl mx-auto px-6 pt-12 pb-32 text-foreground">
            {/* Header */}
            <header className="mb-12 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase">
                    <Tag className="w-4 h-4" /> 專欄文章
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">深度思考與成長洞察</h1>
                <p className="text-muted-foreground text-lg font-serif max-w-2xl leading-relaxed">
                    探索關於正念生活、可持續成長與內在平靜的文字旅程。每一篇文章都是一次深呼吸。
                </p>
            </header>

            <Suspense fallback={<BlogListSkeleton />}>
                <BlogList initialPosts={posts} />
            </Suspense>
        </main>
    );
}

// Loading skeleton for BlogList
function BlogListSkeleton() {
    return (
        <div className="space-y-8 animate-pulse">
            {/* Search bar skeleton */}
            <div className="h-12 bg-stone-100 rounded-2xl" />

            {/* Category filter skeleton */}
            <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="h-10 w-20 bg-stone-100 rounded-full" />
                ))}
            </div>

            {/* Article grid skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="bg-stone-50 rounded-2xl p-6 space-y-4">
                        <div className="h-4 bg-stone-100 rounded w-1/3" />
                        <div className="h-6 bg-stone-100 rounded w-full" />
                        <div className="h-4 bg-stone-100 rounded w-2/3" />
                    </div>
                ))}
            </div>
        </div>
    );
}
