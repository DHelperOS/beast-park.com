'use client';

import { Check } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

export default function Pricing() {
    const plans = [
        {
            title: "1인",
            price: "29",
            desc: "1시간 이용 기준",
            features: ["기본 양주 18만원", "선수 TC 6만원", "룸 사용비 5만원", "100% 초이스 보장"]
        },
        {
            title: "2인",
            price: "35",
            desc: "1시간 이용 기준",
            isPopular: true,
            features: ["기본 양주 18만원", "선수 TC 6만원 (x2)", "룸 사용비 5만원", "100% 초이스 보장"]
        },
        {
            title: "4인",
            price: "47",
            desc: "1시간 이용 기준",
            features: ["기본 양주 18만원", "선수 TC 6만원 (x4)", "룸 사용비 5만원", "100% 초이스 보장"]
        }
    ];

    return (
        <section className="py-24 px-4 bg-black-rich">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="수원 호빠 가격 & 인계동 호빠 주대" subtitle="투명한 정찰제" />

                <div className="text-center mb-16">
                    <p className="text-xl text-white mb-4">
                        저희는 <span className="text-gold-500 font-bold">100% 정찰제</span>로 운영됩니다.
                    </p>
                    <p className="text-gray-400">
                        단 돈 100원도 추가 비용 없이<br className="block md:hidden" /> 정직한 가격을 보장합니다.<br />
                        숨겨진 비용 없이 투명한 서비스로 모시겠습니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className={`relative p-8 rounded-3xl border ${plan.isPopular ? 'bg-zinc-900 border-gold-500 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'bg-zinc-950 border-zinc-800'} flex flex-col`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-black font-bold px-4 py-1 rounded-full text-sm">
                                    강력 추천
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-gray-400 mb-2">{plan.title}</h3>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                                    <span className="text-xl text-white">만원</span>
                                </div>
                                <p className="text-gray-500 text-sm mt-2">{plan.desc}</p>
                            </div>

                            <div className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-gold-500" />
                                        </div>
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.isPopular ? 'bg-gold-500 text-black hover:bg-gold-400' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}>
                                예약하기
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
