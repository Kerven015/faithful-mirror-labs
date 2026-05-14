import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import abstract from "@/assets/abstract.jpg";
import { useI18n } from "./i18n";

export function About() {
  const { t } = useI18n();
  const [open, setOpen] = useState(0);
  return (
    <section id="about" className="px-5 lg:px-10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm font-medium text-brand uppercase tracking-wider">{t.about.eyebrow}</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            {t.about.title}
          </h2>
          <p className="mt-6 text-lg text-foreground/65 leading-relaxed">
            <span className="font-semibold text-foreground">{t.about.intro1}</span>
            {t.about.intro2}
          </p>
          <div className="relative mt-10 overflow-hidden rounded-3xl">
            <img src={abstract} alt="" className="w-full h-72 object-cover" loading="lazy" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {t.about.tabs.map((tab, i) => {
            const isOpen = open === i;
            return (
              <div
                key={tab.title}
                className={`rounded-3xl border transition-all ${
                  isOpen ? "border-brand bg-brand-soft/40" : "border-border bg-card"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-foreground">{tab.title}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-foreground/50 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-foreground/70 leading-relaxed">{tab.body}</p>
                    <ul className="mt-5 space-y-3">
                      {tab.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-foreground/75">
                          <Check className="h-5 w-5 flex-shrink-0 text-brand" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
