import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import book1 from "@/assets/books/book-1.webp";
import book2 from "@/assets/books/book-2.webp";
import book3 from "@/assets/books/book-3.webp";
import book4 from "@/assets/books/book-4.webp";
import book5 from "@/assets/books/book-5.webp";

const BOOKS = [
  { src: book1, alt: "English File Beginner" },
  { src: book2, alt: "Practical English" },
  { src: book3, alt: "I love cooking" },
  { src: book4, alt: "A big breakfast" },
  { src: book5, alt: "A new life in the USA" },
];

export function BookSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % BOOKS.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + BOOKS.length) % BOOKS.length), []);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(next, 3500);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [paused, next]);

  const getOffset = (i: number) => {
    const diff = i - index;
    const half = Math.floor(BOOKS.length / 2);
    if (diff > half) return diff - BOOKS.length;
    if (diff < -half) return diff + BOOKS.length;
    return diff;
  };

  return (
    <div
      className="relative mx-auto w-full max-w-5xl select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[340px] sm:h-[420px] lg:h-[460px] overflow-hidden [perspective:1200px]">
        {BOOKS.map((b, i) => {
          const offset = getOffset(i);
          const abs = Math.abs(offset);
          const isActive = offset === 0;
          const translate = offset * 180;
          const scale = isActive ? 1 : Math.max(0.7, 1 - abs * 0.15);
          const opacity = abs > 2 ? 0 : 1 - abs * 0.25;
          const zIndex = 10 - abs;
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
              style={{
                transform: `translate(-50%, -50%) translateX(${translate}px) scale(${scale})`,
                opacity,
                zIndex,
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <div
                className={`group overflow-hidden rounded-2xl bg-card shadow-2xl ring-1 ring-border transition-transform duration-500 ${
                  isActive ? "hover:scale-[1.03]" : ""
                }`}
              >
                <img
                  src={b.src}
                  alt={b.alt}
                  loading="lazy"
                  className="block h-[300px] sm:h-[380px] lg:h-[420px] w-auto max-w-[80vw] object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>

      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 place-items-center rounded-full bg-card/90 backdrop-blur border border-border text-foreground/80 shadow-md hover:bg-brand hover:text-brand-foreground transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 place-items-center rounded-full bg-card/90 backdrop-blur border border-border text-foreground/80 shadow-md hover:bg-brand hover:text-brand-foreground transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {BOOKS.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-brand" : "w-2 bg-foreground/25 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
