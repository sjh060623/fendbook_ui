"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const cycleTheme = () => {
    const next =
      theme === "system" ? "light" : theme === "light" ? "dark" : "system";
    setTheme(next);
  };

  return (
    <header className="fixed top-4 inset-x-0 mx-auto w-full max-w-[2500px] px-6 z-50">
      <nav className="flex items-center justify-between px-10 py-8 bg-white/60 dark:bg-[#1a1a24]/50 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all">
        <Link href="/">
          <div className="flex items-center gap-2 text-3xl font-bold cursor-pointer">
            <span className="text-indigo-600 dark:text-indigo-400">
              {"</>"}
            </span>
            <span className="tracking-wide text-slate-900 dark:text-white">
              팬드북
            </span>
          </div>
        </Link>
        <ul className="hidden md:flex items-center gap-2 text-2xl font-medium text-slate-700 dark:text-white">
          <Link href="/htmlcss">
            <li
              className={`px-5 py-3 rounded-2xl transition cursor-pointer flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-200 ${
                pathname == "/htmlcss"
                  ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200"
                  : "hover:bg-slate-200/50 dark:hover:bg-white/10"
              }`}
            >
              <span className="text-slate-400 dark:text-gray-400">{"</>"}</span>{" "}
              HTML/CSS
            </li>
          </Link>
          <Link href="/javascript">
            <li
              className={`px-5 py-3 rounded-2xl transition cursor-pointer flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-200 ${
                pathname == "/javascript"
                  ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200"
                  : "hover:bg-slate-200/50 dark:hover:bg-white/10"
              }`}
            >
              {" "}
              <span className="text-slate-400 dark:text-gray-400">📖</span>{" "}
              JavaScript
            </li>
          </Link>
          <Link href="/react">
            <li
              className={`px-5 py-3 rounded-2xl transition cursor-pointer flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-200 ${
                pathname == "/react"
                  ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200"
                  : "hover:bg-slate-200/50 dark:hover:bg-white/10"
              }`}
            >
              {" "}
              <span className="text-slate-400 dark:text-gray-400">⚙️</span>{" "}
              React
            </li>
          </Link>
          <Link href="/browser">
            <li
              className={`px-5 py-3 rounded-2xl transition cursor-pointer flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-200 ${
                pathname == "/browser"
                  ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200"
                  : "hover:bg-slate-200/50 dark:hover:bg-white/10"
              }`}
            >
              {" "}
              <span className="text-slate-400 dark:text-gray-400">🌐</span>{" "}
              브라우저
            </li>
          </Link>
          <Link href="/cs">
            <li
              className={`px-5 py-3 rounded-2xl transition cursor-pointer flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-200 ${
                pathname == "/cs"
                  ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200"
                  : "hover:bg-slate-200/50 dark:hover:bg-white/10"
              }`}
            >
              {" "}
              <span className="text-slate-400 dark:text-gray-400">🎓</span> CS
            </li>
          </Link>
        </ul>

        <button
          onClick={cycleTheme}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/50 dark:bg-white/10 border border-slate-200 dark:border-white/5 hover:bg-white/80 dark:hover:bg-white/20 transition shadow-sm dark:shadow-inner text-lg text-slate-800 dark:text-white"
          disabled={!mounted}
          title={
            !mounted
              ? ""
              : theme === "system"
              ? "테마: 시스템"
              : theme === "dark"
              ? "테마: 다크"
              : "테마: 라이트"
          }
        >
          {!mounted ? (
            <span className="opacity-0">🌙</span>
          ) : theme === "system" ? (
            "🖥️"
          ) : resolvedTheme === "dark" ? (
            "🌙"
          ) : (
            "☀️"
          )}
        </button>
      </nav>
    </header>
  );
}
