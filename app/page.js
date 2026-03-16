import Navbar from "@/components/nav";
import Link from "next/link";
import React from "react";

export default function FendbookPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#0a0a0f] text-slate-900 dark:text-white font-sans pb-20 transition-colors duration-300">
      <Navbar />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-400/30 dark:bg-purple-700/40 rounded-full mix-blend-screen filter blur-[120px] opacity-70 animate-pulse pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-pink-300/30 dark:bg-pink-600/30 rounded-full mix-blend-screen filter blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] bg-indigo-400/30 dark:bg-indigo-800/40 rounded-full mix-blend-screen filter blur-[150px] opacity-80 pointer-events-none"></div>

      <div className="relative z-10 max-w-[2500px] w-full mx-auto px-6 py-8 pt-50">
        <section className="flex flex-col items-center text-center mb-16">
          <div className="flex animate-shake items-center justify-center w-24 h-24 mb-8 rounded-4xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_30px_rgba(99,102,241,0.3)] dark:shadow-[0_0_40px_rgba(99,102,241,0.4)] border border-white/50 dark:border-white/20">
            <span className="text-4xl font-black text-white">{"</>"}</span>
          </div>

          <h1 className="text-7xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
            팬드북 (FEndbook)
          </h1>
          <p className="text-2xl text-slate-600 dark:text-gray-300 mb-8 font-light">
            프론트엔드 실무 면접 준비를 위한 체계적인 내용 정리 플랫폼
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-xl text-slate-700 dark:text-gray-200 flex items-center gap-2 hover:bg-white/80 dark:hover:bg-white/10 transition cursor-default shadow-sm dark:shadow-lg">
              ✨ TypeScript
            </span>
            <span className="px-6 py-3 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-xl text-slate-700 dark:text-gray-200 flex items-center gap-2 hover:bg-white/80 dark:hover:bg-white/10 transition cursor-default shadow-sm dark:shadow-lg">
              ⚛️ React
            </span>
            <span className="px-6 py-3 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-xl text-slate-700 dark:text-gray-200 flex items-center gap-2 hover:bg-white/80 dark:hover:bg-white/10 transition cursor-default shadow-sm dark:shadow-lg">
              🌊 Tailwind CSS
            </span>
          </div>
        </section>

        {/*  */}
        <section className="max-w-[2400px] mx-auto mb-32">
          <div className="relative p-8 md:p-10 rounded-3xl bg-white/60 dark:bg-[#1c1c27]/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-sm dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <div className="absolute top-0 left-10 w-32 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-50"></div>

            <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white tracking-wide">
              프로젝트 소개
            </h2>

            <div className="space-y-6 text-slate-600 dark:text-gray-300 text-2xl leading-relaxed font-light">
              <p>
                코딩테스트와 달리 실무 면접은 무조건 들어가게 되고, 내용도 매우
                방대합니다. 프론트엔드 분야는 특히 HTML/CSS, JavaScript, React,
                브라우저 동작 원리, 컴퓨터 과학 기초까지 다양한 지식이
                요구됩니다.
              </p>
              <p>
                팬드북은 이러한 실무 면접 내용들을 카테고리별로 체계적으로
                정리하여, 효율적인 면접 준비를 도와드립니다.
              </p>
            </div>
          </div>
        </section>

        {/*  */}
        <section className="max-w-[2400px] mx-auto mb-32">
          <h2 className="text-3xl font-bold mb-10 text-center tracking-wide text-slate-900 dark:text-white">
            카테고리
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* hrmlcss */}
            <Link href="/htmlcss">
              <div className="flex flex-col p-7 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:-translate-y-1 hover:border-orange-500/50 dark:hover:border-orange-500/50 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300 group shadow-sm dark:shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-500/20 text-orange-500 dark:text-orange-400 flex items-center justify-center text-xl mb-5 font-bold">
                  {"</>"}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white tracking-wide">
                  HTML/CSS
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-xl leading-relaxed mb-8 grow">
                  시맨틱 태그, 박스 모델, Flex/Grid 등 마크업과 스타일링 기초
                </p>
                <div className="text-indigo-600 dark:text-indigo-400 text-xl font-medium flex items-center gap-2 cursor-pointer group-hover:text-indigo-800 dark:group-hover:text-indigo-300 transition-colors">
                  학습하기{" "}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>

            {/* javascript */}
            <Link href="/javascript">
              <div className="flex flex-col p-7 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:-translate-y-1 hover:border-yellow-500/50 dark:hover:border-yellow-500/50 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300 group shadow-sm dark:shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 flex items-center justify-center text-xl mb-5">
                  📖
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white tracking-wide">
                  JavaScript
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-xl leading-relaxed mb-8 grow">
                  실행 컨텍스트, 클로저, 비동기, 이벤트 루프 등 JS 핵심 개념
                </p>
                <div className="text-indigo-600 dark:text-indigo-400 text-xl font-medium flex items-center gap-2 cursor-pointer group-hover:text-indigo-800 dark:group-hover:text-indigo-300 transition-colors">
                  학습하기{" "}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>

            {/* react */}
            <Link href="/react">
              <div className="flex flex-col p-7 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:-translate-y-1 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300 group shadow-sm dark:shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl mb-5">
                  ⚙️
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white tracking-wide">
                  React
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-xl leading-relaxed mb-8 grow">
                  Virtual DOM, Hooks, 상태관리 등 리액트 핵심 개념
                </p>
                <div className="text-indigo-600 dark:text-indigo-400 text-xl font-medium flex items-center gap-2 cursor-pointer group-hover:text-indigo-800 dark:group-hover:text-indigo-300 transition-colors">
                  학습하기{" "}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>

            {/* 브라우저 */}
            <Link href="/browser">
              <div className="flex flex-col p-7 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:-translate-y-1 hover:border-green-500/50 dark:hover:border-green-500/50 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300 group shadow-sm dark:shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 flex items-center justify-center text-xl mb-5">
                  🌐
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white tracking-wide">
                  브라우저
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-xl leading-relaxed mb-8 grow">
                  렌더링 과정, Reflow/Repaint, CSR/SSR 등 브라우저 동작 원리
                </p>
                <div className="text-indigo-600 dark:text-indigo-400 text-xl font-medium flex items-center gap-2 cursor-pointer group-hover:text-indigo-800 dark:group-hover:text-indigo-300 transition-colors">
                  학습하기{" "}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>

            {/* cs */}
            <Link href="/cs">
              <div className="flex flex-col p-7 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:-translate-y-1 hover:border-pink-500/50 dark:hover:border-pink-500/50 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300 group shadow-sm dark:shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 flex items-center justify-center text-xl mb-5">
                  🎓
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white tracking-wide">
                  CS
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-xl leading-relaxed mb-8 grow">
                  자료구조, 네트워크, 운영체제 등 컴퓨터 과학 기초
                </p>
                <div className="text-indigo-600 dark:text-indigo-400 text-xl font-medium flex items-center gap-2 cursor-pointer group-hover:text-indigo-800 dark:group-hover:text-indigo-300 transition-colors">
                  학습하기{" "}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className="max-w-[2400px] mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-12 md:p-16 text-center shadow-lg dark:shadow-[0_0_50px_rgba(99,102,241,0.3)] overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white tracking-tight">
                지금 바로 시작하세요!
              </h2>
              <p className="text-white/90 text-sm md:text-base mb-10 font-light">
                체계적인 학습으로 프론트엔드 실무 면접을 완벽하게 준비하세요
              </p>
              <button className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-white hover:text-white/80 transition-all cursor-pointer group bg-white/20 px-6 py-3 rounded-full hover:bg-white/30">
                학습 시작하기{" "}
                <span className="text-lg group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
