import { GlassWater, Heart, Music, Users, Wallet, Star } from 'lucide-react';

export default function Features() {
    return (
        <section id="system" className="py-20 px-4 bg-black text-white">
            <div className="max-w-6xl mx-auto">

                {/* Intro Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-gold-500/50 transition-colors">
                        <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
                            <GlassWater className="w-6 h-6 text-gold-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">호빠란?</h3>
                        <p className="text-gray-400 leading-relaxed">
                            호스트바(Host Bar)의 줄임말로, 남성 직원(호스트)들이 여성 손님들을 대상으로
                            술과 대화를 나누며 유흥을 즐길 수 있도록 서비스를 제공하는 공간입니다.
                            <br /><br />
                            비스트는 수원 인계동 최고의 시설과 수질을 자랑합니다.
                        </p>
                    </div>

                    <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-gold-500/50 transition-colors">
                        <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
                            <Heart className="w-6 h-6 text-gold-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">이런 분들께 추천합니다</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-gold-500" />
                                <span>특별한 날, 잊지 못할 추억을 만들고 싶은 분</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-gold-500" />
                                <span>스트레스를 풀고 즐거운 대화가 필요하신 분</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-gold-500" />
                                <span>최고의 대우를 받으며 술자리를 즐기고 싶은 분</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-gold-500" />
                                <span>혼자서도 부담 없이 즐기고 싶은 분</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* System Steps */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">SYSTEM GUIDE</h2>
                    <p className="text-gold-500">비스트 이용 안내</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        { icon: Users, title: "01. 입장 & 초이스", desc: "담당 실장 안내 후 마음에 드는 선수를 초이스합니다." },
                        { icon: Music, title: "02. 룸 입실", desc: "프라이빗한 룸에서 선수들과 즐거운 시간을 보냅니다." },
                        { icon: GlassWater, title: "03. 음주가무", desc: "최고의 분위기 속에서 술과 노래를 즐기세요." },
                        { icon: Wallet, title: "04. 결제 & 귀가", desc: "합리적인 정찰제 가격으로 결제 후 안전하게 귀가합니다." }
                    ].map((step, idx) => (
                        <div key={idx} className="bg-zinc-900 p-6 rounded-xl text-center border border-zinc-800 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold-500/20">
                                <step.icon className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-white">{step.title}</h4>
                            <p className="text-sm text-gray-400">{step.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
