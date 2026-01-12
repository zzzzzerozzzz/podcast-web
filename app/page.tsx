"use client";

import { MoveRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "為什麼「慢成長」才是最持久的成長？",
      excerpt: "在這個追求速度的世界裡，我們從竹子的生長哲學中，學習關於耐心的智慧。",
      date: "2026年 1月 12日",
      category: "思維心法",
      readTime: "5 分鐘閱讀"
    },
    {
      id: 2,
      title: "打造平靜晨間儀式的建築學",
      excerpt: "在世界向你索取能量之前，先建立一道保護自己能量的晨間防線。",
      date: "2026年 1月 10日",
      category: "日常習慣",
      readTime: "4 分鐘閱讀"
    },
    {
      id: 3,
      title: "給創作者的數位極簡主義",
      excerpt: "如何保持與世界的連結，卻不讓靈魂在社群動態中迷失。",
      date: "2026年 1月 08日",
      category: "數位生活",
      readTime: "6 分鐘閱讀"
    }
  ];

  return (
    <main className="max-w-xl mx-auto px-6 pt-12 md:pt-20 text-foreground selection:bg-primary/20 pb-32">

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent -z-10 pointer-events-none" />

      {/* Hero Header */}
      <header className="mb-16 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm">
            <Image src="/logo.png" alt="Zero to Growth Logo" fill className="object-cover" />
          </div>
          <span className="text-sm font-bold tracking-[0.1em] uppercase text-primary/80">Zero to Growth</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.2]">
          滋養你的旅程，<br />從 <span className="text-primary italic font-serif relative inline-block mx-2">
            零
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span> 到 <span className="text-primary italic font-serif relative inline-block mx-2">一</span>。
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed max-w-md font-serif">
          每日關於正念、生產力與可持續成長的深度洞察。
        </p>

        <div className="flex gap-4 pt-4">
          <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-12 shadow-lg shadow-primary/20 text-base font-medium">
            開始閱讀
          </Button>
          <Button variant="outline" className="rounded-full border-primary/20 text-primary hover:bg-primary/5 px-6 h-12 text-base">
            <Play className="w-4 h-4 mr-2 fill-current" /> 聆聽 Podcast
          </Button>
        </div>
      </header>

      {/* Daily Quote Card */}
      <section className="mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
        <div className="bg-card border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 rounded-[2rem] relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(107,142,35,0.1)] transition-shadow duration-500">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-colors duration-500"></div>

          <blockquote className="font-serif text-2xl text-primary font-medium italic leading-relaxed relative z-10">
            「種下一棵樹最好的時間是 20 年前，<br />其次是現在。」
          </blockquote>
          <footer className="mt-6 flex items-center gap-3">
            <div className="w-8 h-px bg-primary/20"></div>
            <span className="text-xs font-sans font-bold text-primary/60 uppercase tracking-widest">
              中國諺語
            </span>
          </footer>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            最新思維
          </h2>
          <Link href="/blog" className="text-xs font-bold uppercase tracking-wider text-primary hover:text-accent transition-colors flex items-center gap-1">
            查看全部 <MoveRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="space-y-4">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                  <span className="text-primary bg-primary/10 px-2 py-1 rounded-md">{post.category}</span>
                  <span className="w-1 h-1 bg-muted-foreground/30 rounded-full"></span>
                  <span className="flex items-center gap-1">{post.date}</span>
                  <span className="w-1 h-1 bg-muted-foreground/30 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 font-serif text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-primary font-bold text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  閱讀文章 <MoveRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
