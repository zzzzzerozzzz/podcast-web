"use client";

import { useState, useEffect } from "react";
import { Download, X, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

export function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showIOSPrompt, setShowIOSPrompt] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Check if user is on iOS
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone;

        if (isIOS && !isStandalone && !isDismissed) {
            // Show iOS prompt after a small delay
            const timer = setTimeout(() => setShowIOSPrompt(true), 3000);
            return () => clearTimeout(timer);
        }

        // Capture the PWA install prompt event
        const handler = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, [isDismissed]);

    const handleInstallClick = () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult: any) => {
            if (choiceResult.outcome === "accepted") {
                setDeferredPrompt(null);
            }
        });
    };

    if (isDismissed) return null;

    return (
        <>
            <AnimatePresence>
                {/* Android / Desktop Install Button */}
                {deferredPrompt && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-24 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-40 bg-foreground text-background p-4 rounded-3xl shadow-xl flex items-center justify-between gap-4 max-w-sm"
                    >
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">安裝應用程式</span>
                            <span className="text-xs text-background/70">獲得更流暢的閱讀體驗</span>
                        </div>
                        <div className="flex gap-2">
                            <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full hover:bg-white/10 text-current" onClick={() => setIsDismissed(true)}>
                                <X className="w-4 h-4" />
                            </Button>
                            <Button size="sm" className="rounded-full bg-primary text-white hover:bg-primary/90" onClick={handleInstallClick}>
                                <Download className="w-4 h-4 mr-2" /> 安裝
                            </Button>
                        </div>
                    </motion.div>
                )}

                {/* iOS Instructions */}
                {showIOSPrompt && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-24 left-4 right-4 z-40 bg-card/95 backdrop-blur-md border border-stone-200 p-5 rounded-3xl shadow-2xl space-y-4"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-bold text-foreground">加入主畫面</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    為了獲得最佳體驗，請將此網站加入您的主畫面。
                                </p>
                            </div>
                            <Button size="icon" variant="ghost" className="h-6 w-6 rounded-full -mr-2 -mt-2" onClick={() => { setShowIOSPrompt(false); setIsDismissed(true); }}>
                                <X className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="flex items-center gap-3 text-sm font-medium text-primary bg-primary/5 p-3 rounded-2xl">
                            <span className="flex items-center gap-1">1. 點擊分享按鈕 <Share className="w-4 h-4" /></span>
                            <span className="text-stone-300">|</span>
                            <span className="flex items-center gap-1">2. 選擇「加入主畫面」</span>
                        </div>

                        {/* Little triangle pointing down to the browser's bottom bar */}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-card/95"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
