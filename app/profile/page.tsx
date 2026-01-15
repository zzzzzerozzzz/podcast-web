"use client";

import { Sparkles, Crown, ArrowLeft, Construction } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
    return (
        <main className="min-h-[80vh] flex items-center justify-center px-6 py-20">
            <div className="max-w-2xl w-full text-center space-y-12 relative">

                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse" />

                {/* Illustration Column */}
                <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 mb-8 group">
                    <div className="absolute inset-0 bg-primary/10 rounded-[3rem] -rotate-6 group-hover:-rotate-12 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-white rounded-[3rem] shadow-xl border border-stone-100 flex items-center justify-center overflow-hidden">
                        <Image
                            src="/images/member-construction.png"
                            alt="Members Area Coming Soon"
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
                        <Sparkles className="w-4 h-4" /> Member Area Under Construction
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                        專屬會員空間<br />
                        <span className="text-primary italic font-serif">深度優化中</span>
                    </h1>

                    <p className="text-lg text-muted-foreground font-serif max-w-lg mx-auto leading-relaxed">
                        我們正在為會員打造更直觀、更具價值的成長空間。<br className="hidden md:block" />
                        包含個人成長日誌、專屬訂閱管理與特權功能都將在此上線。<br />
                        讓每一次點擊，都能見證您的 0 到 1。
                    </p>
                </div>

                {/* Status Card */}
                <div className="bg-stone-50 rounded-[2rem] p-8 border border-stone-100 max-w-sm mx-auto shadow-sm">
                    <div className="flex items-center justify-center gap-4 text-stone-600 mb-4">
                        <Construction className="w-5 h-5 text-primary" />
                        <span className="font-bold">系統建置中...</span>
                    </div>
                    <div className="space-y-3">
                        {[
                            "🔐 帳戶安全系統優化",
                            "✨ 會員特權介面設計",
                            "📊 成長進度追蹤平台"
                        ].map((step, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-stone-500 font-serif">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                {step}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action */}
                <div className="pt-8">
                    <Link href="/">
                        <Button variant="ghost" className="rounded-full group hover:bg-primary/5 text-stone-600 font-bold">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            回到首頁探索其他內容
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
