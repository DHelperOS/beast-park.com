'use client';

import { Star, Award, ThumbsUp, Sparkles } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

export default function Ace() {
    const profiles = [
        {
            name: "서호",
            age: "21세",
            title: "모델 지망생",
            img: "/seoho.png"
        },
        {
            name: "스쿤",
            age: "20세",
            title: "아이돌 연습생",
            img: "/skoon.png"
        },
        {
            name: "유신",
            age: "22세",
            title: "연기자 지망생",
            img: "/yusin.png"
        },
        {
            name: "존슨",
            age: "27세",
            title: "트레이너",
            img: "/johnson.png"
        }
    ];

    return (
        <section className="py-24 px-4 bg-zinc-950 relative">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="수원 호빠 ACE & 인계동 호빠 선수" subtitle="최고의 퀄리티" />

                <div className="text-center mb-16">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        원하는 스타일의 파트너를<br className="block md:hidden" /> 찾고 계신가요?
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        가수 지망생, 모델, 트레이너 등<br className="block md:hidden" /> 다양한 선택지가 준비되어 있습니다.<br className="hidden md:block" />
                        취향에 맞는 최적의 초이스를 위해<br className="block md:hidden" /> 지금 바로 문의 주세요!
                    </p>
                </div>

                {/* Profiles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {profiles.map((profile, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${profile.img})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 w-full p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h4 className="text-2xl font-bold text-white mb-1">{profile.name}</h4>
                                    <p className="text-gold-500 font-medium mb-2">{profile.age} / {profile.title}</p>
                                    <div className="h-1 w-12 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Award,
                            title: "엄격한 면접 시스템",
                            desc: "외모, 매너, 마인드까지 엄격한 기준을 통과한 정예 멤버만이 근무합니다."
                        },
                        {
                            icon: ThumbsUp,
                            title: "최고의 서비스 마인드",
                            desc: "고객님의 즐거움을 최우선으로 생각하며, 편안하고 즐거운 술자리를 약속드립니다."
                        },
                        {
                            icon: Sparkles,
                            title: "다양한 매력의 선수",
                            desc: "귀여움, 섹시함, 댄디함 등 다양한 매력을 가진 선수들이 항시 대기 중입니다."
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + (idx * 0.2), duration: 0.6 }}
                            className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl text-center hover:border-gold-500/50 hover:bg-zinc-900 transition-all duration-300 group"
                        >
                            <div className="w-20 h-20 mx-auto bg-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-10 h-10 text-gold-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
