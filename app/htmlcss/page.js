"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/nav";

const htmlCssQuestions = [
  {
    id: "reflow-repaint",
    question: "Reflow와 Repaint의 차이점은 무엇인가요?",
    answer: `Reflow와 Repaint는 브라우저 렌더링 과정에서 발생하는 작업입니다.\n\nReflow (Layout):\n- DOM 변경이나 요소 크기/위치 변경 시 발생\n- 전체 레이아웃을 다시 계산\n- 비용이 큰 작업\n\nRepaint:\n- 색상, 배경 등 시각적 변경 시 발생\n- 레이아웃 변경 없이 화면만 다시 그림\n\n성능 최적화:\n- DOM 변경 최소화\n- class 변경으로 스타일 변경\n- layout thrashing 방지`,
    codeExample: {
      language: "css",
      code: `/* repaint */\n.box{\n  background:red;\n}\n\n/* reflow */\n.box{\n  width:200px;\n}`,
    },
  },
  {
    id: "display-none-visibility",
    question: "display:none과 visibility:hidden의 차이는 무엇인가요?",
    answer: `두 속성 모두 요소를 숨기지만 동작 방식이 다릅니다.\n\ndisplay:none\n- 요소가 DOM에서 제거된 것처럼 동작\n- 공간도 차지하지 않음\n- Reflow 발생\n\nvisibility:hidden\n- 요소는 보이지 않지만 공간은 유지\n- Repaint만 발생\n\n사용 기준:\n- 완전히 제거 → display:none\n- 공간 유지 → visibility:hidden`,
  },
  {
    id: "inline-block",
    question: "inline, block, inline-block의 차이를 설명해주세요.",
    answer: `display 속성에 따라 요소의 레이아웃 동작이 달라집니다.\n\nblock\n- 한 줄 전체 차지\n- width, height 설정 가능\n- div, section 등\n\ninline\n- 콘텐츠 크기만큼 차지\n- width, height 설정 불가\n- span, a 등\n\ninline-block\n- inline처럼 흐르지만\n- width, height 설정 가능`,
  },
  {
    id: "z-index",
    question: "z-index가 동작하지 않는 경우는 언제인가요?",
    answer: `z-index는 position 속성이 설정된 요소에서만 동작합니다.\n\n조건:\n- position: relative\n- position: absolute\n- position: fixed\n- position: sticky\n\n또한 stacking context가 형성되면 부모 기준으로 계산됩니다.\n\nstacking context 생성 예:\n- position + z-index\n- opacity < 1\n- transform`,
  },
  {
    id: "overflow",
    question: "overflow 속성의 종류와 사용 사례를 설명해주세요.",
    answer: `overflow는 콘텐츠가 컨테이너를 넘칠 때 처리 방법을 정의합니다.\n\n종류:\nvisible: 기본값\nhidden: 넘치는 부분 숨김\nscroll: 항상 스크롤 생성\nauto: 필요할 때만 스크롤\n\n사용 예:\n- 스크롤 영역\n- 카드 UI\n- 이미지 잘라내기`,
  },
  {
    id: "vh-vw",
    question: "vh, vw 단위는 무엇인가요?",
    answer: `vh와 vw는 viewport 기반 단위입니다.\n\nvh\n- viewport height의 1%\n\nvw\n- viewport width의 1%\n\n예:\n100vh → 화면 전체 높이\n\n사용 예:\n- 풀스크린 섹션\n- hero 영역\n- 반응형 레이아웃`,
  },
  {
    id: "rem-em",
    question: "rem과 em의 차이는 무엇인가요?",
    answer: `rem과 em은 모두 상대 단위입니다.\n\nem\n- 부모 요소 font-size 기준\n\nrem\n- root(html) font-size 기준\n\n차이점:\nem → 중첩될수록 계산 복잡\nrem → 일관된 크기 유지\n\n그래서 대부분 rem을 선호합니다.`,
  },
  {
    id: "css-specificity",
    question: "CSS Specificity(명시도)에 대해 설명해주세요.",
    answer: `CSS Specificity는 어떤 스타일이 우선 적용될지 결정하는 규칙입니다.\n\n우선순위:\n\ninline style\nid selector\nclass selector\nelement selector\n\n예:\n#id > .class > div\n\n!important는 모든 규칙보다 우선하지만\n남용하면 유지보수가 어려워집니다.`,
  },
  {
    id: "pseudo-class",
    question: "Pseudo-class와 Pseudo-element의 차이는 무엇인가요?",
    answer: `Pseudo-class\n- 요소의 상태를 선택\n- :\n\nPseudo-element\n- 요소의 특정 부분 선택\n- ::\n\n예:\n\nPseudo-class\n:hover\n:focus\n:first-child\n\nPseudo-element\n::before\n::after\n::placeholder`,
  },
  {
    id: "before-after",
    question: "::before와 ::after는 언제 사용하나요?",
    answer: `::before와 ::after는 요소 앞이나 뒤에 가상 콘텐츠를 삽입할 때 사용합니다.\n\n특징:\n- DOM에 실제로 존재하지 않음\n- content 속성이 필요\n\n사용 예:\n- 아이콘\n- 장식 요소\n- clearfix`,
  },
  {
    id: "object-fit",
    question: "object-fit 속성은 무엇인가요?",
    answer: `object-fit은 이미지나 비디오가 컨테이너에 맞게 표시되는 방식을 정의합니다.\n\n종류:\nfill\ncontain\ncover\nnone\nscale-down\n\n가장 많이 사용되는 값:\n\ncover\n→ 영역을 꽉 채우되 비율 유지`,
  },
  {
    id: "aspect-ratio",
    question: "aspect-ratio 속성은 무엇인가요?",
    answer: `aspect-ratio는 요소의 가로세로 비율을 유지하도록 설정하는 속성입니다.\n\n예:\n16 / 9\n\n사용 예:\n- 유튜브 영상\n- 카드 UI\n- 이미지 썸네일\n\npadding hack 없이 비율 유지가 가능합니다.`,
  },
  {
    id: "css-variable",
    question: "CSS 변수(Custom Properties)는 무엇인가요?",
    answer: `CSS 변수는 스타일 값을 재사용할 수 있게 하는 기능입니다.\n\n장점:\n- 테마 관리\n- 유지보수 향상\n- 동적 스타일 변경\n\n특히 다크모드 구현에 많이 사용됩니다.`,
    codeExample: {
      language: "css",
      code: `:root{\n  --primary-color:#3b82f6;\n}\n\n.button{\n  background:var(--primary-color);\n}`,
    },
  },
  {
    id: "gpu-animation",
    question: "CSS 애니메이션 성능 최적화 방법은 무엇인가요?",
    answer: `성능 좋은 애니메이션을 위해 GPU 가속 속성을 사용합니다.\n\n추천 속성:\ntransform\nopacity\n\n비추천:\nwidth\nheight\nmargin\ntop\n\n이유:\nlayout 계산이 발생하기 때문입니다.`,
  },
  {
    id: "flex-vs-grid",
    question: "Flexbox와 Grid를 언제 각각 사용하는 것이 좋나요?",
    answer: `Flexbox와 Grid는 목적이 다릅니다.\n\nFlexbox\n- 1차원 레이아웃\n- 한 방향 정렬\n- nav, 리스트\n\nGrid\n- 2차원 레이아웃\n- 행과 열 동시 제어\n- 페이지 레이아웃\n\n실무에서는 둘을 함께 사용하는 경우가 많습니다.`,
  },
];

const AccordionItem = ({ item, index, isOpen, onClick }) => {
  return (
    <div
      className={`rounded-3xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
        isOpen
          ? "bg-white/80 dark:bg-white/10 border-indigo-300 dark:border-indigo-500/50 shadow-[0_10px_30px_rgba(99,102,241,0.15)] dark:shadow-[0_10px_30px_rgba(99,102,241,0.2)]"
          : "bg-white/60 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10 shadow-sm dark:shadow-none"
      }`}
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        onClick={onClick}
      >
        <div className="flex items-start gap-4">
          <span className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-bold text-lg">
            Q{index + 1}
          </span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide mt-1">
            {item.question}
          </h3>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-white/5 text-slate-500 dark:text-white/50 ml-4"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 4.5L7 9L11.5 4.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-8 pt-2 ml-14 border-t border-slate-200 dark:border-white/5">
              <h4 className="text-lg font-bold text-indigo-600 dark:text-indigo-300 mb-4 pt-6 flex items-center gap-2">
                <span className="text-2xl">💡</span> Answer
              </h4>
              <div className="text-base text-slate-700 dark:text-white/80 leading-relaxed whitespace-pre-wrap font-light">
                {item.answer}
              </div>

              {item.codeExample && (
                <div className="mt-8 rounded-2xl bg-slate-100 dark:bg-[#0a0a0f]/80 border border-slate-200 dark:border-white/10 overflow-hidden shadow-inner">
                  <div className="px-4 py-2 text-xs font-mono text-slate-500 dark:text-white/40 bg-slate-200/50 dark:bg-white/5 border-b border-slate-200 dark:border-white/5 flex justify-between items-center">
                    <span>{item.codeExample.language}</span>
                  </div>
                  <pre className="p-6 overflow-x-auto">
                    <code className="text-sm font-mono text-indigo-700 dark:text-indigo-200">
                      {item.codeExample.code}
                    </code>
                  </pre>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function HtmlCssAccordionPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#0a0a0f] text-slate-900 dark:text-white overflow-hidden font-sans pb-32 transition-colors duration-300">
      <Navbar />
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-400/30 dark:bg-purple-700/30 rounded-full mix-blend-screen filter blur-[150px] opacity-70 animate-pulse pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-blue-300/30 dark:bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-60 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[20%] w-[1000px] h-[1000px] bg-indigo-400/30 dark:bg-indigo-800/30 rounded-full mix-blend-screen filter blur-[200px] opacity-80 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40">
        <header className="mb-16 text-center border-b border-slate-200 dark:border-white/10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-3xl bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_30px_rgba(99,102,241,0.3)] dark:shadow-[0_0_40px_rgba(168,85,247,0.4)]">
              <span className="text-3xl font-black text-white">{"</>"}</span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight drop-shadow-md">
              HTML / CSS 실전 면접
            </h1>
            <p className="text-sm text-slate-600 dark:text-white/70 font-light max-w-2xl mx-auto">
              마크업과 스타일링의 기초부터 실무 면접에서 자주 나오는 핵심
              개념들을 체계적으로 정리했습니다.
            </p>
          </motion.div>
        </header>

        <section className="flex flex-col gap-4">
          {htmlCssQuestions.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
