"use client";

import { Headphones, Timer, Sparkles, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { subscribeToWaitlist } from "@/app/actions/subscribe";

export default function ListenPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    return (
        <main className="min-h-[80vh] flex items-center justify-center px-6 py-20">
            <div className="max-w-2xl w-full text-center space-y-12 relative">

                {/* Decorative Elements */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse" />

                {/* Illustration Column */}
                <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 mb-8 group">
                    <div className="absolute inset-0 bg-primary/10 rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-white rounded-[3rem] shadow-xl border border-stone-100 flex items-center justify-center overflow-hidden">
                        <Image
                            src="/images/podcast-construction.png"
                            alt="Podcast Coming Soon"
                            fill
                            className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                        <div className="absolute bottom-6 flex flex-col items-center">
                            <Headphones className="w-10 h-10 text-primary animate-bounce" />
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase">
                        <Sparkles className="w-4 h-4" /> Podcast Coming Soon
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                        Podcast 頻道<br />
                        <span className="text-primary italic font-serif">努力搭建中</span>
                    </h1>

                    <p className="text-lg text-muted-foreground font-serif max-w-lg mx-auto leading-relaxed">
                        我們正在精心錄製與製作每一集內容，<br className="hidden md:block" />
                        致力於為您帶來最純粹的成長洞察與聽覺饗宴。<br />
                        精彩內容即將上架，敬請期待。
                    </p>
                </div>

                {/* Status Card */}
                {/* Action Card */}
                <div className="bg-card/50 backdrop-blur-sm rounded-[2rem] p-8 border border-border/50 max-w-md mx-auto shadow-sm text-left relative overflow-hidden">
                    {isSubscribed ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md p-6 text-center animate-in fade-in zoom-in duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <Sparkles className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">訂閱成功！</h3>
                            <p className="text-muted-foreground">
                                感謝您的支持。<br />
                                節目上線時，您將是第一批收到的聽眾。
                            </p>
                        </div>
                    ) : (
                        <>
                            <h3 className="font-bold text-lg mb-2">第一時間收到通知</h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                留下您的 Email，我們將在節目上線時立即通知您，並發送首集專屬講義。
                            </p>
                            
                            <form 
                                className="flex flex-col gap-3" 
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    setIsLoading(true);
                                    const formData = new FormData(e.currentTarget);
                                    await subscribeToWaitlist(formData);
                                    setIsLoading(false);
                                    setIsSubscribed(true);
                                }}
                            >
                                <input 
                                    name="email"
                                    type="email" 
                                    required
                                    placeholder="name@example.com" 
                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                />
                                <Button 
                                    disabled={isLoading}
                                    className="w-full rounded-xl font-bold py-6 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
                                >
                                    {isLoading ? "處理中..." : "訂閱上線通知"}
                                </Button>
                            </form>
                            <p className="text-xs text-muted-foreground mt-4">
                                我們承諾不發送垃圾郵件，您可以隨時取消訂閱。
                            </p>
                        </>
                    )}
                </div>

                {/* Back Link */}
                <div className="pt-4">
                    <Link href="/">
                        <Button variant="ghost" className="rounded-full group hover:bg-muted text-muted-foreground">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            回到首頁
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
