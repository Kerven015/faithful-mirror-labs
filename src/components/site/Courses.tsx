import { useMemo, useState } from "react";
import { COURSES, Audience } from "./data";
import { Calendar, Clock, User, ChevronDown } from "lucide-react";
import { useI18n } from "./i18n";
import { BookSlider, SECONDARY_BOOKS, TERTIARY_BOOKS, QUATERNARY_BOOKS, QUINARY_BOOKS, SENARY_BOOKS } from "./BookSlider";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";


const AUDIENCES: ("All" | Audience)[] = ["All", "kids", "adults"];

type CourseCategory = "All" | "English" | "Chinese" | "Computer";
const COURSE_CATEGORIES: CourseCategory[] = ["All", "English", "Chinese", "Computer"];

export function Courses() {
  const { t, lang } = useI18n();
  const [audience, setAudience] = useState<"All" | Audience>("All");
  const [category, setCategory] = useState<CourseCategory>("All");
  const [catOpen, setCatOpen] = useState(false);

  const filtered = useMemo(
    () =>
      COURSES.filter((c) => {
        if (audience !== "All" && c.audience !== audience) return false;
        if (category !== "All") {
          if (category === "English") return true; // existing catalog is English-learning
          return c.title.toLowerCase().includes(category.toLowerCase());
        }
        return true;
      }),
    [audience, category],
  );

  const audLabel = (a: "All" | Audience) =>
    a === "All" ? t.courses.audAll : a === "kids" ? t.courses.audKids : t.courses.audAdults;

  const baseBtn = "rounded-full px-5 py-2 text-sm font-medium transition-colors";
  const activeBtn = "bg-brand text-brand-foreground";
  const inactiveBtn = "bg-surface text-foreground/70 hover:bg-brand-soft";

  return (
    <section id="courses" className="px-5 lg:px-10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground max-w-4xl">
          {t.courses.title}
        </h2>
        <p className="mt-5 text-lg text-foreground/60 max-w-3xl">{t.courses.subtitle}</p>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          {AUDIENCES.map((a) => (
            <button
              key={a}
              onClick={() => setAudience(a)}
              className={`${baseBtn} ${audience === a ? activeBtn : inactiveBtn}`}
            >
              {audLabel(a)}
            </button>
          ))}

          <Popover open={catOpen} onOpenChange={setCatOpen}>
            <PopoverTrigger asChild>
              <button
                className={`${baseBtn} inline-flex items-center gap-1.5 ${
                  category !== "All" ? activeBtn : inactiveBtn
                }`}
              >
                {category === "All" ? "Courses" : category}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`}
                />
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              sideOffset={8}
              className="w-44 p-1.5 rounded-2xl border border-border bg-card shadow-xl"
            >
              <div className="flex flex-col">
                {COURSE_CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCategory(c);
                      setCatOpen(false);
                    }}
                    className={`text-left rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                      category === c
                        ? "bg-brand text-brand-foreground"
                        : "text-foreground/80 hover:bg-brand-soft"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="mt-14">
          <BookSlider />
        </div>

        <div className="mt-14">
          <BookSlider books={SECONDARY_BOOKS} />
        </div>

        <div className="mt-14">
          <BookSlider books={TERTIARY_BOOKS} />
        </div>

        <div className="mt-14">
          <BookSlider books={QUATERNARY_BOOKS} />
        </div>

        <div className="mt-14">
          <BookSlider books={QUINARY_BOOKS} />
        </div>

        <div className="mt-14">
          <BookSlider books={SENARY_BOOKS} />
        </div>




        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <article
              key={c.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-medium text-foreground/80">
                    {audLabel(c.audience)}
                  </span>
                  <span className="rounded-full bg-brand text-brand-foreground px-3 py-1 text-xs font-medium">
                    {c.level}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-foreground/55">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {t.courses.days[c.schedule]}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {t.courses.shifts[c.shift]}
                  </span>
                </div>
                <p className="mt-2 text-xs text-foreground/50">{t.courses.started}</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm text-foreground/60 line-clamp-3 flex-1">{t.courses.cefrDesc}</p>
                <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                  <p className="text-xs text-foreground/50 inline-flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" /> {c.teacher}
                  </p>
                  <p className="text-xl font-semibold text-brand">
                    {c.price.toLocaleString(lang === "ru" ? "ru" : lang === "tm" ? "tk" : "en")} {t.courses.currency}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-12 text-center text-foreground/50">{t.courses.notFound}</p>
        )}
      </div>
    </section>
  );
}

