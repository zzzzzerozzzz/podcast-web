"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Headphones, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav() {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "首頁", icon: Home },
        { href: "/listen", label: "聆聽", icon: Headphones },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50 md:hidden">
            <nav className="bg-white/90 backdrop-blur-md border border-stone-200/50 shadow-xl shadow-stone-200/40 rounded-full px-2 py-2 flex justify-between items-center">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex-1 flex flex-col items-center justify-center gap-1 py-2 rounded-full transition-all duration-300 relative",
                                isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <div className={cn("relative p-2 rounded-full transition-all", isActive ? "bg-primary/10" : "bg-transparent")}>
                                <item.icon className={cn("w-6 h-6", isActive ? "fill-primary/20 stroke-primary" : "stroke-current")} />
                            </div>
                            <span className="text-[10px] tracking-wide">{item.label}</span>
                        </Link>
                    );
                })}

                {/* Profile Element (Special Case for Avatar potentially later) */}
                <Link
                    href="/profile"
                    className={cn(
                        "flex-1 flex flex-col items-center justify-center gap-1 py-2 rounded-full transition-all duration-300 relative",
                        pathname === "/profile" ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    <div className={cn("relative p-2 rounded-full transition-all", pathname === "/profile" ? "bg-primary/10" : "bg-transparent")}>
                        <User className={cn("w-6 h-6", pathname === "/profile" ? "fill-primary/20 stroke-primary" : "stroke-current")} />
                    </div>
                    <span className="text-[10px] tracking-wide">我的</span>
                </Link>
            </nav>
        </div>
    );
}
