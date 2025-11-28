'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
}

export default function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
    return (
        <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gold-500 font-medium tracking-wider mb-2 uppercase text-sm"
                >
                    {subtitle}
                </motion.p>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold text-white"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className={`h-1 w-20 bg-gradient-to-r from-gold-400 to-gold-600 mt-4 ${align === 'center' ? 'mx-auto' : ''}`}
            />
        </div>
    );
}
