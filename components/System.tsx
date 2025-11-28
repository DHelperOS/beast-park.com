'use client';

import { Users, Music, GlassWater, Wallet, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

export default function System() {
    const steps = [
        {
            icon: Users,
            title: "01. 입장 & 초이스",
            desc: "담당 실장 안내 후 마음에 드는 선수를 초이스합니다."
        },
        {
            icon: Music,
            title: "02. 룸 입실",
            desc: "프라이빗한 룸에서 선수들과 즐거운 시간을 보냅니다."
        },
        {
            icon: GlassWater,
            title: "03. 음주가무",
            desc: "최고의 분위기 속에서 술과 노래를 즐기세요."
        },
        {
            icon: Wallet,
            title: "04. 결제 & 귀가",
            desc: "합리적인 정찰제 가격으로 결제 후 안전하게 귀가합니다."
        }
    ];

    return (
        <section className="py-24 px-4 bg-black-rich">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="수원 호빠 시스템 & 인계동 호빠 가이드" subtitle="이용 안내" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 group"
                    >
                        <img
                            src="/suwon-hoppa.png"
                            alt="수원 호빠 시스템"
                            className="w-full h-auto object-contain"
                        />
                        <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/90 to-transparent w-full">
                            <h3 className="text-3xl font-bold text-white mb-2">수원 호빠 시스템</h3>
                            <p className="text-gray-300">최고의 시설에서 즐기는 프리미엄 서비스</p>
                        </div>
                    </motion.div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="relative bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-gold-500 transition-colors group z-10"
                            >
                                <div className="w-16 h-16 bg-black rounded-2xl border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-gold-500 transition-colors shadow-lg">
                                    <step.icon className="w-8 h-8 text-white group-hover:text-gold-500 transition-colors" />
                                </div>

                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                                    {step.title}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
