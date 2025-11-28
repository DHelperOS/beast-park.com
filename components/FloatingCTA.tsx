'use client';

import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FloatingCTA() {
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
        >
            <div className="glass p-2 rounded-2xl shadow-2xl border border-white/10 flex gap-3">
                <Link
                    href="tel:01075801913"
                    className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20 active:scale-95 transition-transform relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    <Phone className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">전화 문의</span>
                </Link>
                <Link
                    href="sms:01075801913"
                    className="flex-1 bg-zinc-900 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg border border-zinc-700 active:scale-95 transition-transform"
                >
                    <MessageCircle className="w-5 h-5" />
                    <span>문자 문의</span>
                </Link>
            </div>
        </motion.div>
    );
}
