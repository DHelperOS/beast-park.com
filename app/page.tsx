import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Intro from "@/components/Intro";
import Ace from "@/components/Ace";
import SpecialServices from "@/components/SpecialServices";
import System from "@/components/System";
import Menu from "@/components/Menu";
import Pricing from "@/components/Pricing";
import Promise from "@/components/Promise";
import Location from "@/components/Location";
import SeoContent from "@/components/SeoContent";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Stats />
      <Intro />
      <Ace />
      <SpecialServices />
      <System />
      <Menu />
      <Pricing />
      <Promise />
      <Location />
      <SeoContent />
      <FloatingCTA />

      {/* Footer */}
      <footer className="py-12 text-center text-zinc-600 text-sm border-t border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-4 text-zinc-500">
            상호명: 비스트 | 대표: 충재 | 주소: 경기도 수원시 팔달구 인계로108번길 41-11 3층
          </p>
          <p>© {new Date().getFullYear()} 비스트. 모든 권리 보유.</p>
        </div>
      </footer>
    </main>
  );
}
