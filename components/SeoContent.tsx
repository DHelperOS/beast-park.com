'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SeoContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-12 px-4 bg-black border-t border-zinc-900">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center justify-between w-full p-4 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors group"
                >
                    <span className="text-gray-400 font-medium group-hover:text-white transition-colors">비스트 상세 정보 및 소개 더보기</span>
                    {isExpanded ? <ChevronUp className="text-gold-500" /> : <ChevronDown className="text-gold-500" />}
                </button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-8 text-gray-500 text-sm leading-relaxed space-y-8">

                                {/* Section 1 */}
                                <div>
                                    <h4 className="text-gold-500 font-bold mb-2">인계동 호빠: 밤문화의 심장, 가장 트렌디한 밤</h4>
                                    <p>
                                        수원의 밤이 가장 화려하게 빛나는 곳, 인계동은 단연코 호스트바 문화의 중심지입니다.
                                        젊고 에너제틱한 분위기 속에서 가장 트렌디한 밤을 경험하고 싶다면 인계동이 정답입니다.
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <div>
                                    <h4 className="text-white font-bold mb-2">눈을 사로잡는 감각적인 인테리어</h4>
                                    <p>
                                        문을 여는 순간, 다른 세상에 온 듯한 착각을 불러일으키는 세련되고 럭셔리한 공간이 당신을 맞이합니다.
                                        모든 곳이 포토존이 되는 이곳에서 인생샷은 덤입니다.
                                    </p>
                                </div>

                                {/* Section 3 */}
                                <div>
                                    <h4 className="text-white font-bold mb-2">당신의 취향을 저격할 호스트 라인업</h4>
                                    <p>
                                        다정다감한 연하남 스타일부터 시크하고 지적인 매력의 연상남까지. 당신이 꿈꾸던 이상형이 현실이 되는 곳.
                                        원하는 스타일을 미리 귀띔해주시면 최고의 파트너를 만나볼 확률이 높아집니다.
                                    </p>
                                </div>

                                {/* Section 4 */}
                                <div>
                                    <h4 className="text-white font-bold mb-2">우리들만의 프라이빗 파티</h4>
                                    <p>
                                        주변 시선은 신경 쓰지 마세요. 완벽하게 분리된 프라이빗 룸에서 친구들과 생일파티, 기념일 축하,
                                        또는 시크릿한 대화를 마음껏 즐길 수 있습니다.
                                    </p>
                                </div>

                                {/* Section 5 */}
                                <div>
                                    <h4 className="text-gold-500 font-bold mb-2">수원 호스트빠: 가성비와 가심비를 모두 잡는 현명한 선택</h4>
                                    <p>
                                        서울의 높은 가격이 부담스러웠다면, 수원 호스트빠에서는 합리적인 가격으로 그 이상의 프리미엄 서비스를 경험할 수 있습니다.
                                        시끌벅적한 대형 클럽 스타일부터 조용하고 아늑한 형태까지, 그날의 기분과 목적에 따라 원하는 분위기를 선택할 수 있습니다.
                                    </p>
                                </div>

                                {/* Section 6 */}
                                <div>
                                    <h4 className="text-white font-bold mb-2">기대 이상의 전문성</h4>
                                    <p>
                                        인계동 호빠 선수들은 오랜 경력과 노하우를 바탕으로 고객 개개인의 성향에 맞춘 섬세한 서비스를 제공합니다.
                                        어색한 침묵 없이, 당신이 원하는 대화와 분위기를 완벽하게 이끌어냅니다.
                                    </p>
                                </div>

                                {/* Section 7 */}
                                <div>
                                    <h4 className="text-white font-bold mb-2">동탄 호빠 & 수원 호빠</h4>
                                    <p>
                                        조용하고 고급스러운 분위기에서 오롯이 '나'에게 집중하는 시간을 원한다면 동탄 호빠가 최고의 선택이 될 것입니다.
                                        신도시 특유의 깔끔하고 세련된 분위기 속에서 프라이빗한 힐링을 경험하세요.
                                        이 도시가 잠들 때, 비로소 당신의 이야기가 시작됩니다. 늘 같은 풍경, 반복되는 대화, 예측 가능한 하루의 끝에서 당신은 어떤 밤을 꿈꾸시나요?
                                    </p>
                                </div>

                                {/* Section 8 */}
                                <div>
                                    <h4 className="text-gold-500 font-bold mb-2">오늘 밤, 이야기의 주인공은 바로 당신입니다</h4>
                                    <p>
                                        망설이지 마세요. 문을 여는 순간, 당신은 평범한 일상의 조연이 아닌, 가장 빛나는 스포트라이트를 받는 '오늘 밤의 주인공'이 됩니다.
                                        자신을 위해 과감히 투자하는 멋진 당신을 위해, 인계동 호스트바는 최고의 무대를 준비하고 기다립니다.
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-600">
                                    키워드: 수원호빠, 인계동호빠, 수원호스트바, 인계동호스트바, 수원비스트, 인계동비스트, 여성전용클럽, 정빠, 충재실장
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
