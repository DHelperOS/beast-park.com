'use client';

import { Beer, Car, Infinity } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

export default function SpecialServices() {
    const services = [
        {
            icon: Beer,
            title: "맥주 및 안주 무제한",
            desc: "물가 상승과 임금 정체로 어려움을 겪는 고객님들을 배려하여, 룸에서 머무르는 동안 안주와 맥주를 무제한으로 제공합니다."
        },
        {
            icon: Car,
            title: "고급 차량 픽업 서비스",
            desc: "수원 지역 어디든 픽업 서비스를 제공하며, 미리 연락 주시면 신속하고 정확하게 모시겠습니다."
        },
        {
            icon: Infinity,
            title: "무한 초이스 서비스",
            desc: "즐거운 눈호강이 될 수 있도록 초이스를 계속 보여드리겠습니다. 초이스 비용은 0원입니다!"
        }
    ];

    return (
        <section className="py-24 px-4 bg-black-rich">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="수원 인계동 호빠 특별 서비스" subtitle="충재 실장 스페셜" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="bg-gradient-to-b from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 hover:border-gold-500/50 transition-all duration-300 group overflow-hidden relative"
                        >
                            {/* Image Background for Infinite Choice */}
                            {service.title === "무한 초이스 서비스" && (
                                <>
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-50"
                                        style={{ backgroundImage: "url('/infinite-choice.jpg')" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                                </>
                            )}

                            {/* Image Background for Beer & Snacks */}
                            {service.title === "맥주 및 안주 무제한" && (
                                <>
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-50"
                                        style={{ backgroundImage: "url('/beer-snacks.jpg')" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                                </>
                            )}

                            {/* Image Background for Pickup Service */}
                            {service.title === "고급 차량 픽업 서비스" && (
                                <>
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-50"
                                        style={{ backgroundImage: "url('/pickup-service.webp')" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                                </>
                            )}

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300 backdrop-blur-sm">
                                    <service.icon className="w-8 h-8 text-gold-500 group-hover:text-black transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
