'use client';

import { Users, Clock, Heart, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Stats() {
    const stats = [
        {
            label: "하루 평균 출근",
            value: "80명",
            icon: Users,
            desc: "엄선된 정예 멤버"
        },
        {
            label: "운영 시간",
            value: "365일",
            icon: Clock,
            desc: "24시간 연중무휴"
        },
        {
            label: "단골 손님",
            value: "500+",
            icon: Heart,
            desc: "믿고 찾는 비스트"
        },
        {
            label: "초이스 성공률",
            value: "99.9%",
            icon: CheckCircle,
            desc: "완벽한 매칭"
        }
    ];

    return (
        <section className="py-20 px-4 bg-zinc-900 border-y border-zinc-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="text-center group"
                        >
                            <div className="w-16 h-16 mx-auto bg-black rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors duration-500 shadow-lg">
                                <stat.icon className="w-8 h-8 text-gold-500 group-hover:text-black transition-colors duration-500" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-gold-500 font-medium mb-1">{stat.label}</p>
                            <p className="text-gray-500 text-sm">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
