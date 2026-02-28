import { MoveRight, Play, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/posts";
import { ReadingList } from "@/components/Home/ReadingList";

export default async function Home() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen text-foreground selection:bg-primary/20">

      {/* Decorative Gradient Blob */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HERO SECTION: Split Layout (Left: Text, Right: Visual) */}
        <section className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase">
              <Sparkles className="w-4 h-4" /> 每日成長指南
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              滋養你的旅程，<span className="text-primary italic font-serif whitespace-nowrap">Zero to Growth</span>。
            </h1>

            <p className="text-xl md:text-2xl text-primary font-bold font-serif italic relative inline-block">
              「每週陪你成長一點點，慢慢走得更遠。」
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary/10 -z-10 -rotate-1 skew-x-12" />
            </p>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl font-serif">
              透過實戰方法論與底層邏輯，陪你完成從 0 到 1 的真實成長，<br />
              並在混亂的職場中看見生長的秩序。
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/blog">
                <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-14 shadow-lg shadow-primary/25 text-base font-bold tracking-wide transition-all hover:scale-105 active:scale-95">
                  開始閱讀
                </Button>
              </Link>
              <Link href="/listen">
                <Button variant="outline" className="rounded-full border-2 border-primary/10 text-primary bg-transparent hover:bg-primary/5 px-8 h-14 text-base font-bold transition-all hover:scale-105 active:scale-95">
                  <Play className="w-5 h-5 mr-2 fill-current" /> 聆聽 Podcast
                </Button>
              </Link>
            </div>
          </div>


          {/* Right Column: Visual Element */}
          <div className="relative flex justify-center lg:justify-end animate-float">
            <div className="relative w-full max-w-lg aspect-square group">
              {/* Decorative shadow layer */}
              <div className="absolute inset-4 bg-primary/20 rounded-[3rem] blur-2xl -z-10 translate-y-4 group-hover:translate-y-6 transition-transform duration-500" />

              <div className="absolute inset-0 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-white">
                <Image
                  src="/images/hero-abstract.png"
                  alt="Zero to Growth Concept"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-stone-100 hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">實戰方法論</p>
                    <p className="text-xs text-muted-foreground">從 0 到 1 的深度解析</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Update Log Section */}
        <section className="py-12 md:py-16">
          <div className="w-full max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-xl border border-stone-100 overflow-hidden">
            <div className="bg-stone-50 px-8 py-6 border-b border-stone-200/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">最新更新</h3>
              </div>
              <Link href="/blog" className="text-sm font-bold text-primary hover:underline">查看全部</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-100">
              {posts.slice(0, 3).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="p-6 hover:bg-stone-50/50 transition-colors group">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-muted-foreground">{post.date}</span>
                    </div>
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="bg-[#1c1917] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Quotes decoration */}
            <div className="absolute top-10 left-10 text-9xl font-serif text-white/5 leading-none font-black">“</div>
            <div className="absolute bottom-[-20px] right-10 text-9xl font-serif text-white/5 leading-none rotate-180 font-black">“</div>

            <blockquote className="max-w-4xl mx-auto relative z-10">
              <p className="text-2xl md:text-4xl md:leading-relaxed font-serif font-bold text-stone-200 italic tracking-wide">
                「種下一棵樹最好的時間是 20 年前，<br className="hidden md:block" />
                其次是<span className="text-primary">現在</span>。」
              </p>
              <footer className="mt-8 text-sm font-bold tracking-[0.2em] text-stone-500 uppercase">
                — 中國諺語
              </footer>
            </blockquote>
          </div>
        </section>


        {/* Featured / Latest Articles (Main Grid) */}
        <section className="py-12 md:py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">最新思維</h2>
              <p className="text-muted-foreground text-lg max-w-2xl font-serif">
                探索關於自我成長的深度洞察
              </p>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors">
              查看所有文章 <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Featured Post (Left Column) */}
            <div className="lg:col-span-7">
              {(() => {
                const featuredPost = posts[0];
                if (!featuredPost) return null;

                // Image Selection Logic
                let displayImage = "/images/blog-mindset.png"; // Default fallback
                
                // 1. Check for specific post images (High Priority)
                if (featuredPost.slug.includes("perplexity-pro-scenes")) displayImage = "/images/posts/perplexity-net.png";
                else if (featuredPost.slug.includes("tencent-yuanbao-guide")) displayImage = "/images/posts/data-mine.png";
                else if (featuredPost.slug.includes("ai-one-person-company") || featuredPost.title.includes("隨手記")) displayImage = "/images/posts/ai-filter.png";
                
                // 2. Fallback to category images
                else {
                  if (featuredPost.category === "日常習慣") displayImage = "/images/blog-habit.png";
                  if (featuredPost.category === "數位生活") displayImage = "/images/blog-digital.png";
                  if (featuredPost.category === "Zero 隨手記") displayImage = "/images/blog-notes.png";
                  if (featuredPost.category === "AI 增長引擎") displayImage = "/images/blog-ai-engine.png";
                }

                return (
                  <Link href={`/blog/${featuredPost.slug}`} className="group block space-y-6">
                    <div className="aspect-[16/9] rounded-[2rem] overflow-hidden relative shadow-sm border border-stone-100/50 group-hover:border-primary/20 group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-500">
                      <Image
                        src={displayImage}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-sm font-bold text-primary shadow-sm z-10">
                        {featuredPost.category}
                      </div>
                    </div>
                    
                    <div className="space-y-4 px-2">
                       <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                        <span>{featuredPost.date}</span>
                        <span className="w-1 h-1 bg-stone-300 rounded-full" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h3>
                      <p className="text-muted-foreground text-lg line-clamp-3 leading-relaxed font-serif">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="inline-flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                         閱讀完整故事 <MoveRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </Link>
                );
              })()}
            </div>

            {/* Recent Posts List (Right Column) */}
            <div className="lg:col-span-5 space-y-8 pt-2">
               {posts.slice(1, 4).map((post) => {
                  // Image Selection Logic
                  let displayImage = "/images/blog-mindset.png"; // Default fallback
                  
                  // 1. Check for specific post images (High Priority)
                  if (post.slug.includes("perplexity-pro-scenes")) displayImage = "/images/posts/perplexity-net.png";
                  else if (post.slug.includes("tencent-yuanbao-guide")) displayImage = "/images/posts/data-mine.png";
                  else if (post.slug.includes("ai-one-person-company") || post.title.includes("隨手記")) displayImage = "/images/posts/ai-filter.png";
                  
                  // 2. Fallback to category images
                  else {
                    if (post.category === "日常習慣") displayImage = "/images/blog-habit.png";
                    if (post.category === "數位生活") displayImage = "/images/blog-digital.png";
                    if (post.category === "Zero 隨手記") displayImage = "/images/blog-notes.png";
                    if (post.category === "AI 增長引擎") displayImage = "/images/blog-ai-engine.png";
                  }

                  return (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group flex gap-6 items-start p-4 -mx-4 rounded-2xl hover:bg-stone-50 transition-colors">
                       <div className="w-32 h-24 relative rounded-xl overflow-hidden shrink-0 shadow-sm border border-stone-100 group-hover:shadow-md transition-all">
                          <Image
                            src={displayImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                       </div>
                       
                       <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                            <span className="text-primary font-bold">{post.category}</span>
                            <span className="w-1 h-1 bg-stone-300 rounded-full" />
                            <span>{post.date}</span>
                          </div>
                          
                          <h4 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                       </div>
                    </Link>
                  );
               })}

               <div className="pt-4 border-t border-stone-100">
                  <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-primary font-bold transition-colors">
                     查看更多歷史文章 <MoveRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>

          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-bold">
              查看所有文章 <MoveRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Reading List Section - New */}
        <ReadingList />

        {/* AI Growth Engine Section - New High Impact Area */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-[50%] blur-[100px] -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase">
                <Zap className="w-4 h-4 fill-current" /> AI 增長引擎
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight">
                AI 不會取代你，<br className="hidden md:block" />
                但會用 AI 的人會。
              </h2>

              <p className="text-2xl md:text-3xl font-serif italic text-primary font-bold">
                「在這裡，重新定義你的增長上限。」
              </p>

              <div className="prose prose-lg prose-stone font-serif text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  我們不談冰冷的技術，我們談<strong>實戰的 AI 工作流</strong>。透過將 AI 工具無縫融入你的每日決策、資料處理與產出系統，我們將原本的「低效勤奮」轉化為「指數級增長」。
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/ai-engine">
                  <Button className="rounded-full bg-stone-900 hover:bg-stone-800 text-white px-10 h-16 text-lg font-bold shadow-2xl transition-all hover:scale-105 active:scale-95">
                    進入 AI 增長引擎
                  </Button>
                </Link>
                <div className="flex -space-x-3 items-center ml-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-stone-100 overflow-hidden">
                      <Image src={`/images/hero-abstract.png`} alt="User" width={40} height={40} className="object-cover opacity-50" />
                    </div>
                  ))}
                  <span className="ml-6 text-sm font-bold text-stone-500">已幫助 500+ 管理者轉型</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative group animate-float">
              <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl -z-10 scale-90 group-hover:scale-100 transition-transform duration-700" />
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-white">
                <Image
                  src="/images/home-ai-engine-flat.png"
                  alt="AI Growth Engine"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              {/* Micro-interaction Overlay */}
              <div className="absolute top-10 right-4 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-stone-100 min-w-[160px] hidden xl:block animate-float">
                <div className="space-y-3">
                  <div className="h-2 w-12 bg-primary/20 rounded-full" />
                  <div className="h-2 w-24 bg-stone-100 rounded-full" />
                  <div className="h-2 w-16 bg-stone-100 rounded-full" />
                  <p className="text-[10px] font-bold text-primary mt-2 whitespace-nowrap">
                    🚀 系統效率提升 300%+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Membership CTA Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-stone-900 rounded-[3rem] -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-12">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-bold tracking-wide uppercase border border-white/20">
                <Sparkles className="w-4 h-4" /> 會員專屬
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                加入我們，<br />
                <span className="text-primary italic font-serif">深度連結</span>你的成長旅程。
              </h2>
              <div className="space-y-4">
                {[
                  "每週精選解讀：解讀精選書本或精選文章",
                  "會員限定 Podcast：深度訪談與幕後",
                  "深度剖析會員營運與管理實戰難題",
                  "專屬社群交流：與志同道合者同行"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-300">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-center space-y-6 flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src="/images/membership-key.png"
                  alt="Exclusive Benefits"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-stone-400 font-bold uppercase tracking-wider text-sm">早鳥優惠</div>
              <div className="flex justify-center items-baseline gap-2 text-white">
                <span className="text-5xl font-bold">$99</span>
                <span className="text-xl text-stone-400">/ 月</span>
              </div>
              <p className="text-stone-300 text-sm">隨時取消，無隱藏費用。</p>
              <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white py-6 text-base font-bold shadow-lg shadow-primary/25">
                立即加入會員
              </Button>
            </div>
          </div>
        </section>


        {/* About Section (Zero Wong Story) */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Visual / Profile Image Column (Left on Desktop) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8 sticky top-24">
            <div className="relative aspect-[4/5] md:aspect-[3/2] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-stone-200 shadow-xl border-8 border-white">
              <Image
                src="/images/zero-portrait.png"
                alt="Zero Wong - Founder"
                fill
                className="object-cover"
              />
            </div>

            {/* Personal Quote */}
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
              <blockquote className="font-serif text-xl font-bold text-primary italic leading-relaxed">
                「在餐飲與商業的世界裡，<br />停止進化，就是退化的開始。」
              </blockquote>
            </div>
          </div>

          {/* Content Column (Right on Desktop) */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-sm font-bold tracking-wide uppercase">
                關於創辦人
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-800 leading-tight">
                從傳菜侍應到營運總監，<br />
                <span className="text-primary">25 年「從零增長」的實戰告白</span>
              </h2>
            </div>

            <div className="prose prose-lg prose-stone max-w-none prose-p:font-serif prose-p:text-stone-600 prose-headings:text-foreground prose-strong:text-primary">
              <p>
                很多人問我，為什麼我的品牌叫 <strong>Zero to Growth</strong>？ 這不只是一個名字，這是我過去 25 年職涯的真實寫照。我叫 Zero，我的故事從「零」開始，但我的目標是與你一起實現無限的「增長」。
              </p>

              <div className="space-y-10 mt-12">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/30">1</div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-stone-800 mb-2">起點：那雙拿過托盤的手</h3>
                    <p>
                      25 年前，我是一一名最平凡不過的侍應。那段日子教給我最寶貴的一課，不是服務流程，而是<strong>「洞察人性」</strong>。這雙拿過托盤的手，讓我至今依然能與第一線員工同頻呼吸，深知基層的痛點與力量。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold text-xl">2</div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-stone-800 mb-2">跨越：從 1 到 200 的管理修煉</h3>
                    <p>
                      從樓面走向決策室，從管理幾個人到帶領一支 200 人的企業團隊。在內地市場深耕的歲月裡，我領悟到：經驗能讓你生存，但唯有<strong>系統化的管理</strong>才能讓你壯大。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold text-xl">3</div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-stone-800 mb-2">進化：NLP Master 與跨學科的碰撞</h3>
                    <p>
                      為了破解「人」與「增長」的密碼，我取得 <strong>NLP 高級執行師</strong>資格。我研發出一套「有溫度的科學管理法」：管理不再是命令，而是激發動力；營銷不再是推銷，而是建立潛意識連結。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold text-xl">4</div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-stone-800 mb-2">執著：永不停止的「知識更新」</h3>
                    <p>
                      即便擁有 25 年資歷，我依然把自己當作一名「學生」。我不斷吸收全球最新的管理思維與數位營銷技術，確保我的管理邏輯始終站在趨勢的前沿。
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-stone-50 rounded-3xl border border-stone-100 shadow-inner">
                <h3 className="text-2xl font-bold text-stone-800 mb-4">願景：為什麼創立 Zero to Growth？</h3>
                <p className="mb-4">
                  我想告訴每一個創業者與管理人員：<strong>增長（Growth）不是奇蹟，而是一門可以被設計的科學。</strong>
                </p>
                <p>
                  我的名字叫 Zero。我從零出發，走過 25 年的餐飲起伏；現在，我想透過持續的分享，陪著你一起見證屬於你的增長奇蹟。
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
