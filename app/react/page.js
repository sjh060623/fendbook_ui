"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/nav";

export default function ReactPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#0a0a0f] text-slate-900 dark:text-white overflow-hidden font-sans pb-32 transition-colors duration-300">
      <Navbar />
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-400/30 dark:bg-purple-700/30 rounded-full mix-blend-screen filter blur-[150px] opacity-70 animate-pulse pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-blue-300/30 dark:bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-60 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[20%] w-[1000px] h-[1000px] bg-indigo-400/30 dark:bg-indigo-800/30 rounded-full mix-blend-screen filter blur-[200px] opacity-80 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-60">
        <header className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_30px_rgba(99,102,241,0.3)] dark:shadow-[0_0_40px_rgba(168,85,247,0.4)]">
              <span className="text-4xl font-black text-white">⚙️</span>
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight drop-shadow-md">
              React 실전 면접
            </h1>
            <p className="text-lg text-slate-600 dark:text-white/70 font-light max-w-2xl mx-auto">
              Virtual DOM, Hooks, 상태 관리 및 렌더링 최적화 등 리액트 생태계의
              핵심 개념들을 체계적으로 정리했습니다.
            </p>
          </motion.div>
        </header>
      </div>
    </div>
  );
}
