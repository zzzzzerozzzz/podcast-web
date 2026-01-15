"use client";

import Link from "next/link";
import Image from "next/image";
import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function Navbar() {
    // Check if Clerk is configured (client-side check)
    const isClerkConfigured = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
            <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Image src="/logo.png" alt="Zero to Growth" fill className="object-contain" unoptimized />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-serif font-bold tracking-tight text-foreground leading-none">
                            Zero to Growth
                        </span>
                        <span className="text-[0.65rem] font-bold tracking-widest text-muted-foreground uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-1 group-hover:translate-y-0">
                            從 0 到 1 的真實成長
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav Items */}
                <div className="hidden md:flex items-center gap-8">
                    {[
                        { href: "/", label: "首頁" },
                        { href: "/listen", label: "Podcast 試聽" },
                        { href: "/blog", label: "專欄文章" },
                        { href: "/blog?category=AI 增長引擎", label: "AI 增長引擎" }
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative text-base font-medium text-foreground/80 hover:text-primary transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href="/profile"
                        className="relative text-base font-bold text-primary hover:text-accent transition-colors flex items-center gap-1 py-1 group"
                    >
                        會員 Podcast
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Mobile only: minimal */}

                    {/* Desktop & Mobile Auth - Only render if Clerk is configured */}
                    {isClerkConfigured && (
                        <>
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <Button variant="ghost" className="font-bold text-primary hover:bg-primary/5">
                                        登入
                                    </Button>
                                </SignInButton>
                                <SignInButton mode="modal">
                                    <Button className="rounded-full bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20">
                                        加入會員
                                    </Button>
                                </SignInButton>
                            </SignedOut>

                            <SignedIn>
                                <UserButton
                                    appearance={{
                                        elements: {
                                            avatarBox: "w-10 h-10 border-2 border-primary/20",
                                        }
                                    }}
                                />
                            </SignedIn>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
