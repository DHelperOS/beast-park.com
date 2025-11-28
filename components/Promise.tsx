'use client';

import { Quote } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

export default function Promise() {
    return (
        <section className="py-24 px-4 bg-zinc-900 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <SectionTitle title="수원 호빠 충재실장의 약속" subtitle="특별한 약속" />

                <div className="bg-black/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-zinc-800 shadow-2xl relative">
                    <Quote className="w-12 h-12 text-gold-500 mx-auto mb-8 opacity-50" />

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
                        "고객을 위한 진심, 그리고 함께<br />
                        저 <span className="text-gold-500">충재실장</span>은 무엇보다<br />
                        고객 우선을 신념으로 삼겠습니다"
                    </h3>

                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            안녕하세요, <span className="text-white font-bold">수원 인계동 호빠 비스트</span>의<br className="block md:hidden" /> 충재 실장입니다.
                        </p>
                        <p>
                            저희 비스트를 찾아주시는 모든 고객님들께<br className="block md:hidden" /> 감사의 말씀을 드립니다.
                            수원에는 수많은 호스트바가 있지만,<br className="block md:hidden" /> <span className="text-gold-500 font-semibold">진심을 다해 모시는 곳</span>은<br className="block md:hidden" /> 많지 않다고 생각합니다.
                        </p>
                        <p>
                            저 충재는 <span className="text-white font-semibold">"한 번 오신 손님은 영원한 단골로 모신다"</span>는<br className="block md:hidden" /> 신념으로 일하고 있습니다.
                            단순히 술을 파는 것이 아니라,<br className="block md:hidden" /> <span className="text-gold-500 font-semibold">즐거움과 감동</span>을 팔겠습니다.
                        </p>
                        <p>
                            내상 없는 술자리, 합리적인 가격,<br className="block md:hidden" /> 그리고 최고의 수질로 보답하겠습니다.<br />
                            믿고 찾아주시면 <span className="text-white font-bold">절대 후회하지 않으실 겁니다.</span>
                        </p>
                    </div>

                    <div className="space-y-8 text-gray-400 leading-relaxed mt-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-white font-bold text-lg mb-2">언제든 허리 굽힐 줄 아는 사람</h4>
                            <p>고객님들이 있기에 제가 이 자리에 있다고 항상 생각하겠습니다.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="text-white font-bold text-lg mb-2">최고의 품질, 최저의 가격</h4>
                            <p>비스트는 현재 최고의 수질 및 많은 선수를 자랑하며 경기권 최고 퀄리티 & 최저가 주대입니다.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <h4 className="text-white font-bold text-lg mb-2">겸손의 가치, 행동으로 보답</h4>
                            <p>
                                저의 과분한 자리가 고객님들 덕분이라는 겸손함을 항상 잊지 않으며<br />
                                저 충재실장을 찾아주시는 고객님 한 분 한 분께 말보다 행동으로 보답하겠습니다.
                            </p>
                        </motion.div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-zinc-800">
                        <p className="font-handwriting text-2xl text-gold-500 transform -rotate-2">
                            충재
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
