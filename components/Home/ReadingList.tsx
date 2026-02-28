import Image from "next/image";
import { BookOpen, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ReadingList() {
  const books = [
    {
      title: "Zero to One",
      author: "Peter Thiel",
      rating: 5,
      thoughts: "創業即壟斷。在紅海與藍海之外，尋找專屬於你的「秘密」。這本書是我個人品牌的啟蒙導師。",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      rating: 5,
      thoughts: "系統大於目標。1% 的每日優化，在複利效應下將產生巨大的質變。個人成長必備的系統化手冊。",
    },
    {
      title: "Antifragile",
      author: "Nassim Taleb",
      rating: 4.5,
      thoughts: "擁抱波動。在這個充滿不確定性的 AI 時代，我們不僅要強韌，更要從混亂中獲益。",
    },
  ];

  return (
    <section className="py-24 bg-[#FFFEF5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Visuals */}
          <div className="relative group">
            {/* Background Decorations */}
            <div className="absolute top-10 left-10 w-full h-full bg-stone-100 rounded-[3rem] -z-10 transform rotate-2 transition-transform duration-700 group-hover:rotate-1" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl z-0" />
            
            {/* Main Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-100/50 bg-white p-8">
              <div className="aspect-[4/3] relative w-full h-full"> 
                 {/* Assuming the generated image is roughly 4:3 or landscape */}
                 <Image
                  src="/images/reading-list-january.png"
                  alt="January Reading List"
                  width={800}
                  height={600}
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-stone-100 rotate-3 animate-float delay-700">
               <div className="flex items-center gap-2 text-primary font-bold">
                 <BookOpen className="w-5 h-5" />
                 <span>January Picks</span>
               </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-wider text-primary uppercase">
                本月學習書單
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold font-display text-stone-800 leading-tight">
                輸入決定輸出，<br />
                <span className="text-stone-400">閱讀塑造你的思維模型。</span>
              </h3>
              <p className="text-stone-600 leading-relaxed max-w-lg">
                這是我本月正在深度研讀的 3 本書。我不只閱讀，更將其中的心法實踐於工作中。會員可查看我的完整閱讀筆記。
              </p>
            </div>

            <div className="space-y-6">
              {books.map((book, index) => (
                <div key={index} className="group p-4 -mx-4 rounded-xl hover:bg-white hover:shadow-sm hover:border-stone-100 border border-transparent transition-all duration-300">
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                    <div className="flex-1 space-y-2">
                       <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-lg text-stone-800 group-hover:text-primary transition-colors">
                                {book.title}
                            </h4>
                            <p className="text-sm text-stone-500 font-serif italic">by {book.author}</p>
                          </div>
                          <div className="flex text-amber-400">
                              {[...Array(Math.floor(book.rating))].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-current" />
                              ))}
                              {book.rating % 1 !== 0 && <Star className="w-4 h-4 fill-current opacity-50" />}
                          </div>
                       </div>
                       <p className="text-sm text-stone-600 leading-relaxed border-l-2 border-stone-200 pl-3">
                         {book.thoughts}
                       </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
                <Link href="/profile">
                   <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all">
                      查看完整閱讀筆記 <ArrowRight className="w-4 h-4 ml-2" />
                   </Button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
