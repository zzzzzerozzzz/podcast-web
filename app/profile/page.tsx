"use client";

import { Sparkles, Crown, ArrowLeft, User as UserIcon, Settings, Construction } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

export default function ProfilePage() {
    const { user } = useUser();

    return (
        <main className="min-h-[80vh] flex items-center justify-center px-6 py-20">
            <div className="max-w-2xl w-full text-center space-y-12 relative">

                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse" />

                {/* Signed OUT View */}
                <SignedOut>
                    {/* Illustration Column */}
                    <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 mb-8 group">
                        <div className="absolute inset-0 bg-primary/10 rounded-[3rem] -rotate-6 group-hover:-rotate-12 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-white rounded-[3rem] shadow-xl border border-stone-100 flex items-center justify-center overflow-hidden">
                            <Image
                                src="/images/member-construction.png"
                                alt="Members Area"
                                fill
                                className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                            <div className="absolute bottom-6 flex flex-col items-center">
                                <Crown className="w-10 h-10 text-primary animate-bounce shadow-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase">
                            <Sparkles className="w-4 h-4" /> Member Area
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                            專屬會員空間<br />
                            <span className="text-primary italic font-serif">開啟您的增長之旅</span>
                        </h1>

                        <p className="text-lg text-muted-foreground font-serif max-w-lg mx-auto leading-relaxed">
                            我們正在為會員打造更直觀、更具價值的成長空間。<br className="hidden md:block" />
                            包含個人成長日誌、專屬訂閱管理與特權功能都將在此上線。
                        </p>
                    </div>

                    {/* Offer Card */}
                    <div className="bg-card/50 backdrop-blur-sm rounded-[2rem] p-8 border border-border/50 max-w-md mx-auto shadow-sm text-left">
                        <h3 className="font-bold text-lg mb-4 text-center">解鎖會員專屬權益</h3>
                        
                        <div className="space-y-4 mb-8">
                            {[
                                "🎧 暢聽所有會員專屬 Podcast 節目",
                                "📚 解鎖每月深度學習書單與實戰筆記",
                                "🧠 獲取 AI 增長引擎的進階操作模板",
                                "🤝 加入 Zero to Growth 專屬成長社群"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                    <span className="text-primary mt-0.5">✓</span>
                                    {benefit}
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3">
                            <SignUpButton mode="modal">
                                <Button className="w-full rounded-xl font-bold py-6 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                                    立即加入會員
                                </Button>
                            </SignUpButton>
                            <SignInButton mode="modal">
                                <Button variant="outline" className="w-full rounded-xl py-6 text-base border-border hover:bg-muted font-medium">
                                    登入現有帳號
                                </Button>
                            </SignInButton>
                        </div>
                    </div>
                </SignedOut>

                {/* Signed IN View */}
                <SignedIn>
                    <div className="max-w-xl mx-auto space-y-8">
                        {/* Welcome Header */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="p-1 rounded-full border-2 border-primary/20">
                                <UserButton 
                                    appearance={{
                                        elements: {
                                            avatarBox: "w-20 h-20"
                                        }
                                    }}
                                />
                            </div>
                            <h1 className="text-3xl font-bold">
                                歡迎回來，{user?.firstName || user?.username || "朋友"}
                            </h1>
                            <p className="text-muted-foreground text-center">
                                今天想從哪裡開始成長？
                            </p>
                        </div>

                        {/* Dashboard Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                            <Link href="/listen" className="block p-6 rounded-2xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Crown className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="font-bold mb-1">會員 Podcast</h3>
                                <p className="text-sm text-muted-foreground">聆聽本週的深度加更</p>
                            </Link>
                            
                            <Link href="/ai-engine" className="block p-6 rounded-2xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Sparkles className="w-5 h-5 text-blue-600" />
                                </div>
                                <h3 className="font-bold mb-1">AI 實戰模板</h3>
                                <p className="text-sm text-muted-foreground">下載最新的 Prompt 庫</p>
                            </Link>

                            <div className="block p-6 rounded-2xl border border-border bg-muted/50 opacity-60">
                                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center mb-4">
                                    <UserIcon className="w-5 h-5 text-stone-500" />
                                </div>
                                <h3 className="font-bold mb-1">個人成長檔案</h3>
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-stone-200/50 text-stone-600 text-xs font-medium">
                                    <Construction className="w-3 h-3" />
                                    <span>建置中</span>
                                </div>
                            </div>

                            <div className="block p-6 rounded-2xl border border-border bg-muted/50 opacity-60">
                                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center mb-4">
                                    <Settings className="w-5 h-5 text-stone-500" />
                                </div>
                                <h3 className="font-bold mb-1">訂閱管理</h3>
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-stone-200/50 text-stone-600 text-xs font-medium">
                                    <Construction className="w-3 h-3" />
                                    <span>即將上線</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SignedIn>

                {/* Back Link (Always visible) */}
                <div className="pt-4">
                    <Link href="/">
                        <Button variant="ghost" className="rounded-full group hover:bg-muted text-muted-foreground">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            回到首頁探索其他內容
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
