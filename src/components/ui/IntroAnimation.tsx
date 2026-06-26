"use client";

import { useEffect, useState, useCallback } from "react";

const greetings = [
  { text: "Halo", lang: "Bahasa Indonesia", flag: "id" },
  { text: "Hello", lang: "English", flag: "gb" },
  { text: "こんにちは", lang: "日本語", flag: "jp" },
  { text: "Bonjour", lang: "Français", flag: "fr" },
  { text: "안녕하세요", lang: "한국어", flag: "kr" },
  { text: "Hola", lang: "Español", flag: "es" },
  { text: "مرحبا", lang: "العربية", flag: "sa" },
  { text: "Ciao", lang: "Italiano", flag: "it" },
  { text: "你好", lang: "中文", flag: "cn" },
  { text: "Olá", lang: "Português", flag: "br" },
  { text: "Hallo", lang: "Deutsch", flag: "de" },
  { text: "Привет", lang: "Русский", flag: "ru" },
];

const DURATION = 300;

interface IntroAnimationProps {
  onFinish: () => void;
}

export default function IntroAnimation({ onFinish }: IntroAnimationProps) {
  const [idx, setIdx] = useState(0);
  const [animState, setAnimState] = useState<"in" | "out">("in");
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    const urls = greetings.map((g) => `https://flagcdn.com/w40/${g.flag}.png`);
    Promise.all(
      urls.map(
        (url) =>
          new Promise((resolve) => {
            const img = new window.Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = url;
          })
      )
    ).then(() => setImagesReady(true));
  }, []);

  const goNext = useCallback(() => {
    setAnimState("out");
    setTimeout(() => {
      setIdx((prev) => {
        const next = prev + 1;
        if (next >= greetings.length) {
          setDone(true);
          return prev;
        }
        setAnimState("in");
        setProgress(0);
        return next;
      });
    }, 260);
  }, []);

  const skip = useCallback(() => {
    setDone(true);
  }, []);

  const enter = useCallback(() => {
    setVisible(false);
    setTimeout(onFinish, 500);
  }, [onFinish]);

  useEffect(() => {
    if (done) {
      const timer = setTimeout(enter, 2000);
      return () => clearTimeout(timer);
    }
  }, [done, enter]);

  useEffect(() => {
    if (done || !imagesReady) return;
    const timer = setTimeout(goNext, DURATION);
    return () => clearTimeout(timer);
  }, [idx, done, imagesReady, goNext]);

  useEffect(() => {
    if (done || !imagesReady) return;
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 100 / (DURATION / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [idx, done, imagesReady]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a12] transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      {/* Orbs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl hidden sm:block" />
      <div className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-72 rounded-full bg-pink-600/15 blur-3xl hidden sm:block" />
      <div className="pointer-events-none absolute bottom-10 left-24 h-52 w-52 rounded-full bg-orange-500/10 blur-3xl hidden sm:block" />

      {/* Loading Spinner */}
      {!imagesReady && !done && (
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white/80" />
          <p className="text-xs text-white/50 tracking-widest uppercase">Loading</p>
        </div>
      )}

      {/* Skip button */}
      {!done && imagesReady && (
        <button
          onClick={skip}
          className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/40 transition hover:bg-white/10 hover:text-white"
        >
          Lewati
        </button>
      )}

      {/* Greeting */}
      {!done && imagesReady && (
        <div className="flex flex-col items-center text-center">
          <img
            src={`https://flagcdn.com/w40/${greetings[idx].flag}.png`}
            alt={greetings[idx].lang}
            width={40}
            height={30}
            className="mb-1 rounded-sm object-cover"
            loading="eager"
            fetchPriority="high"
            style={{
              willChange: "transform, opacity",
              animation: animState === "in"
                ? "fadeSlideUp 0.35s ease forwards"
                : "fadeSlideDown 0.25s ease forwards"
            }}
          />
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-white/30"
            style={{
              willChange: "transform, opacity",
              animation: animState === "in"
                ? "fadeSlideUp 0.35s ease forwards"
                : "fadeSlideDown 0.25s ease forwards"
            }}
          >
            {greetings[idx].lang}
          </p>
          <h1
            className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-5xl sm:text-6xl font-extrabold text-transparent md:text-8xl"
            style={{
              willChange: "transform, opacity",
              animation: animState === "in"
                ? "fadeSlideUp 0.35s ease forwards"
                : "fadeSlideDown 0.25s ease forwards"
            }}
          >
            {greetings[idx].text}
          </h1>


        </div>
      )}

      {/* Enter screen */}
      {done && (
        <div className="flex animate-[fadeUp_0.5s_ease_forwards] flex-col items-center text-center">
          <h2 className="mb-2 text-5xl font-extrabold text-white md:text-6xl">
            Selamat datang di
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              portofolio saya.
            </span>
          </h2>
          <p className="mb-8 mt-3 text-base text-white/40">
            Mari kenalan lebih jauh.
          </p>

        </div>
      )}

      {/* Progress bar */}
      {!done && imagesReady && (
        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}
