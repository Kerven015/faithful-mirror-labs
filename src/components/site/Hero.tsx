import hero from "@/assets/hero-classroom.jpg";
import { ArrowRight, GraduationCap } from "lucide-react";
import { useI18n } from "./i18n";
import { AccentTitle } from "./AccentTitle";
import { TEACHERS } from "./data";

export function Hero() {
  const { t } = useI18n();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="pb-10">
      <div className="grid items-center gap-8 rounded-[28px] border border-border bg-card p-6 shadow-[0_1px_2px_rgb(22_25_31/0.04),0_12px_32px_rgb(22_25_31/0.05)] lg:grid-cols-2 lg:p-8">
        <div>
          <span className="inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
            Kitap Bilim Merkezi
          </span>
          <h1 className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-5xl text-balance">
            <AccentTitle text={t.hero.title} />
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#courses"
              onClick={(e) => handleScroll(e, "#courses")}
              className="inline-flex h-11 items-center gap-2 rounded-[10px] bg-brand px-5 text-sm font-medium text-brand-foreground"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
              className="inline-flex h-11 items-center rounded-[10px] border border-border px-5 text-sm font-medium"
            >
              {t.nav.about}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-border pt-6">
            <div>
              <p className="font-display text-3xl font-medium tabular-nums">{TEACHERS.length}+</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.hero.statTeachers}</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-display text-3xl font-medium tabular-nums">300+</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.hero.statCourses}</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[20px]">
            <img src={hero} alt="Kitap" className="h-full w-full object-cover" width={900} height={1125} />
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-[14px] border border-border bg-card px-4 py-3">
            <div className="grid size-10 place-items-center rounded-full bg-brand text-brand-foreground">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium leading-none">{TEACHERS.length}+</p>
              <p className="mt-1 text-xs text-muted-foreground">{t.hero.statTeachers}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
