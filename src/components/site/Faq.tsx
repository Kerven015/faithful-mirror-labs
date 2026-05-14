import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ } from "./data";

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="px-5 lg:px-10 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium text-brand uppercase tracking-wider text-center">
          Часто задаваемые вопросы
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-center">
          Вопрос-ответ
        </h2>
        <p className="mt-5 text-center text-foreground/60 max-w-2xl mx-auto">
          Есть вопросы? Ознакомьтесь с нашим списком часто задаваемых вопросов ниже — возможно, ваш вопрос уже имеет ответ!
        </p>
        <div className="mt-12 flex flex-col gap-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`rounded-2xl border transition-all ${
                  isOpen ? "border-brand bg-brand-soft/30" : "border-border bg-card"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <h3 className="text-base sm:text-lg font-medium text-foreground">{item.q}</h3>
                  <Plus
                    className={`h-5 w-5 flex-shrink-0 text-foreground/50 transition-transform ${
                      isOpen ? "rotate-45 text-brand" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-foreground/70 animate-fade-in">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
