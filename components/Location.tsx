'use client';

import { MapPin, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

export default function Location() {
    return (
        <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <SectionTitle title="수원 인계동 호빠 위치" subtitle="오시는 길" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl min-h-[400px] relative group h-full"
                    >
                        <a
                            href="https://map.naver.com/p/search/%EC%88%98%EC%9B%90%EC%8B%9C%20%ED%8C%94%EB%8B%AC%EA%B5%AC%20%EC%9D%B8%EA%B3%84%EB%A1%9C108%EB%B2%88%EA%B8%B8%2041-11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full relative"
                        >
                            {/* Map Placeholder/Image */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop')] bg-cover bg-center opacity-50 group-hover:opacity-40 transition-opacity" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                                <div className="bg-[#03C75A]/90 backdrop-blur-md px-6 py-3 rounded-full border border-[#03C75A]/50 flex items-center gap-2 group-hover:scale-105 transition-transform shadow-lg">
                                    <span className="text-white font-bold">NAVER 네이버 지도 보기</span>
                                </div>
                                <div className="bg-[#4285F4]/90 backdrop-blur-md px-6 py-3 rounded-full border border-[#4285F4]/50 flex items-center gap-2 group-hover:scale-105 transition-transform shadow-lg">
                                    <span className="text-white font-bold">Google 구글 지도 보기</span>
                                </div>
                            </div>
                        </a>
                    </motion.div>

                    {/* Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-zinc-800 flex flex-col justify-center h-full"
                    >
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-white mb-2">BEAST</h3>
                            <p className="text-gold-500 font-medium">수원 인계동</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-gray-500 mt-1" />
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Address</p>
                                    <p className="text-white leading-relaxed">
                                        경기도 수원시 팔달구 인계로108번길 41-11 3층
                                        <br />
                                        <span className="text-gray-500 text-sm">(인계동 1031-16)</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-gray-500 mt-1" />
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Contact</p>
                                    <p className="text-2xl font-bold text-white">010-7580-1913</p>
                                    <p className="text-gold-500">충재 실장</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex gap-3">
                            <Link
                                href="tel:01075801913"
                                className="flex-1 bg-white text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                전화
                            </Link>
                            <Link
                                href="sms:01075801913"
                                className="flex-1 bg-zinc-800 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors border border-zinc-700"
                            >
                                <MessageCircle className="w-4 h-4" />
                                문자
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
