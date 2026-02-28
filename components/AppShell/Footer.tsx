import Link from "next/link";
import { Podcast, Rss, Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/40 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
              <Podcast className="w-6 h-6 text-primary" />
              <span>Zero to Growth</span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              從 0 到 1 的真實成長。這裡記錄了我在餐飲管理、AI 應用與個人品牌建設路上的實戰經驗。
              <br className="mb-2" />
              不談理論，只談實戰。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg">快速導航</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">專欄文章</Link>
              </li>
              <li>
                <Link href="/ai-engine" className="hover:text-primary transition-colors">AI 增長引擎</Link>
              </li>
              <li>
                <Link href="/listen" className="hover:text-primary transition-colors">Podcast 節目</Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-primary transition-colors">會員中心</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg">保持連結</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:contact@example.com" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="pt-2">
              <a 
                href="/rss.xml" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Rss className="w-4 h-4" />
                訂閱 RSS
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Zero to Growth. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">隱私權政策</Link>
            <Link href="#" className="hover:text-foreground transition-colors">服務條款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
