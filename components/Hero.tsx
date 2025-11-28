'use client';

import { ArrowRight, Phone, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black-rich">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)] z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full bg-[url('/hero-bg.png')] bg-cover bg-center opacity-75"
        />
      </div>

      {/* Floating Particles/Stars */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100, x: Math.random() * 100 }}
            animate={{ opacity: [0, 1, 0], y: -100 }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute bg-gold-400 rounded-full w-1 h-1 shadow-[0_0_10px_#D4AF37]"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-12"
        >
          <div className="h-[1px] w-12 bg-gold-500/50" />
          <span className="text-gold-400 tracking-[0.3em] text-sm md:text-base font-medium uppercase">
            수원 인계동 호스트바
          </span>
          <div className="h-[1px] w-12 bg-gold-500/50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 drop-shadow-lg">
              수원 인계동<br className="block md:hidden" /> 호빠
            </span>
            <br />
            <span className="text-white drop-shadow-2xl text-5xl md:text-7xl lg:text-8xl mt-2 block">
              비스트
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 mb-10 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
          >
            수원 인계동 <span className="text-gold-400 font-semibold">최고의 수질과 시설</span> 당신의<br className="block sm:hidden" />
            밤을 <span className="text-gold-400 font-semibold">가장 특별하게</span> 만들어드립니다.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a
            href="tel:01075801913"
            className="group relative px-8 py-4 bg-gold-500 text-black font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.5)] hover:shadow-[0_0_40px_rgba(234,179,8,0.7)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              예약하기
            </span>
            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <Link
            href="#intro"
            className="group flex items-center justify-center gap-3 border border-white/30 hover:border-gold-500/50 hover:bg-white/5 text-white font-medium py-4 px-10 rounded-full transition-all backdrop-blur-sm"
          >
            <span>비스트 소개</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 text-gold-500 transition-transform" />
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">스크롤</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
