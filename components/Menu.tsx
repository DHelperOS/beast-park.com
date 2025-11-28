'use client';

import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

export default function Menu() {
    return (
        <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="max-w-4xl mx-auto relative z-10">
                <SectionTitle title="수원 인계동 호빠 주류 메뉴" subtitle="주류 및 샴페인" />

                <div className="text-center mb-16">
                    <p className="text-xl text-gray-300 mb-4">
                        최상의 프리미엄 주류로 특별한 순간을 더욱 빛나게 하겠습니다.
                    </p>
                    <p className="text-gold-500">
                        가장 합리적인 가격과 최고의 품질로 대접합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Whiskey */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800"
                    >
                        <h3 className="text-2xl font-bold text-gold-500 mb-8 border-b border-zinc-700 pb-4">위스키</h3>
                        <ul className="space-y-6">
                            <li className="flex justify-between items-center">
                                <span className="text-white font-medium">윈저아이스</span>
                                <span className="text-gray-500">12년산</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-white font-medium">발렌타인</span>
                                <span className="text-gray-500">17, 21, 30년산</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-white font-medium">로얄샬루트</span>
                                <span className="text-gray-500">21년산</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-white font-medium">조니워커</span>
                                <span className="text-gray-500">블루/블랙</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-white font-medium">골든 블루</span>
                                <span className="text-gray-500">12, 17년산</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Champagne */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800"
                    >
                        <h3 className="text-2xl font-bold text-gold-500 mb-8 border-b border-zinc-700 pb-4">샴페인</h3>
                        <ul className="space-y-6">
                            <li className="flex justify-between items-center">
                                <span className="text-white font-medium">엑스레이티드</span>
                                <span className="text-gray-500">프랑스</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-white font-medium">돔페리뇽</span>
                                <span className="text-gray-500">프랑스</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-white font-medium">모엣 샹동</span>
                                <span className="text-gray-500">프랑스</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-white font-medium">룩벨레어</span>
                                <span className="text-gray-500">프랑스</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-white font-medium">아그와</span>
                                <span className="text-gray-500">네덜란드</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <div className="mt-12 text-center p-6 bg-zinc-900 rounded-xl border border-zinc-800">
                    <p className="text-gray-400">
                        찾으시는 주류가 없으신가요? 전화 주시면 최대한 준비해 드리겠습니다!
                    </p>
                </div>
            </div>
        </section>
    );
}
