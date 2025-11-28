'use client';

import { GlassWater, Heart, Star, Sparkles, Crown } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

export default function Intro() {
    return (
        <section id="intro" className="py-24 px-4 bg-black-rich relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionTitle title="수원 호빠 & 인계동 호빠" subtitle="프리미엄 서비스" />

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 max-w-md mx-auto"
                >
                    <img
                        src="/ingyedong-hoppa.png"
                        alt="인계동 호빠 전경"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Card 1: What is Host Bar */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card rounded-3xl relative overflow-hidden group flex flex-col h-full"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Crown className="w-32 h-32 text-gold-500" />
                        </div>
                        {/* Content Section */}
                        <div className="p-8 md:p-12 relative z-10 flex-1 bg-zinc-900/50 flex flex-col justify-center">
                            <div className="w-14 h-14 bg-gold-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-gold-500/30">
                                <GlassWater className="w-7 h-7 text-gold-500" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-white">
                                수원 인계동 호빠란?
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
                                <span className="text-white font-semibold">호스트바(Host Bar)</span>의 줄임말로,<br className="block md:hidden" />
                                엄선된 남성 직원(호스트)들이<br className="block md:hidden" /> 여성 손님들을 대상으로
                                품격 있는 대화와 유흥 서비스를 제공하는<br className="block md:hidden" /> 프리미엄 공간입니다.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                비스트는 <span className="text-gold-500">수원 인계동 최고의 시설과 수질</span>을 자랑하며,
                                단순한 술자리를 넘어<br className="block md:hidden" /> 잊지 못할 추억을 선사합니다.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: Recommendations */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Heart className="w-32 h-32 text-pink-500" />
                        </div>

                        {/* Content Section */}
                        <div className="p-8 md:p-12 relative z-10 flex-1 bg-zinc-900/50 flex flex-col justify-center">
                            <div className="w-14 h-14 bg-pink-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-pink-500/30">
                                <Sparkles className="w-7 h-7 text-pink-500" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-white">
                                인계동 호빠 비스트 추천
                            </h3>

                            <ul className="space-y-3">
                                {[
                                    "특별한 날, 잊지 못할 추억을 만들고 싶은 분",
                                    "스트레스를 풀고 즐거운 대화가 필요하신 분",
                                    "최고의 대우를 받으며 술자리를 즐기고 싶은 분",
                                    "혼자서도 부담 없이 즐기고 싶은 분"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 group/item">
                                        <div className="mt-1.5 min-w-[20px]">
                                            <Star className="w-4 h-4 text-gold-500 group-hover/item:fill-gold-500 transition-colors" />
                                        </div>
                                        <span className="text-gray-300 group-hover/item:text-white transition-colors text-base md:text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
