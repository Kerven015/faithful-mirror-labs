import { useMemo, useState } from "react";
import { COURSES, TEACHERS } from "./data";
import { Calendar, Clock, User } from "lucide-react";

const AUDIENCES = ["All", "kids", "adults", "teens"] as const;
const LEVELS = ["Все уровни", "Advanced", "Beginner", "Elementary", "Intermediate", "Pre-intermediate", "Toefl", "Upper-intermediate"];
const DAYS = ["Все дни", "Понедельник-Среда-Пятница", "Вторник-Четверг-Суббота"];
const SHIFTS = ["Все смены", "Вечером", "Днём", "Утром"];

export function Courses() {
  const [audience, setAudience] = useState<(typeof AUDIENCES)[number]>("All");
  const [level, setLevel] = useState("Все уровни");
  const [teacher, setTeacher] = useState("Все преподаватели");
  const [day, setDay] = useState("Все дни");
  const [shift, setShift] = useState("Все смены");

  const filtered = useMemo(
    () =>
      COURSES.filter(
        (c) =>
          (audience === "All" || c.audience === audience) &&
          (level === "Все уровни" || c.level === level) &&
          (teacher === "Все преподаватели" || c.teacher === teacher) &&
          (day === "Все дни" || c.schedule === day) &&
          (shift === "Все смены" || c.shift === shift),
      ),
    [audience, level, teacher, day, shift],
  );

  return (
    <section id="courses" className="px-5 lg:px-10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground max-w-4xl">
          Наши курсы предназначены для детей, подростков и взрослых
        </h2>
        <p className="mt-5 text-lg text-foreground/60 max-w-3xl">
          Мы обучаем английскому языку по международным стандартам CEFR, помогая вам пройти путь от новичка до свободного владения.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          {AUDIENCES.map((a) => (
            <button
              key={a}
              onClick={() => setAudience(a)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                audience === a
                  ? "bg-brand text-brand-foreground"
                  : "bg-surface text-foreground/70 hover:bg-brand-soft"
              }`}
            >
              {a}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Select value={level} onChange={setLevel} options={LEVELS} placeholder="Все уровни" />
          <Select
            value={teacher}
            onChange={setTeacher}
            options={["Все преподаватели", ...TEACHERS.map((t) => t.name)]}
            placeholder="Все преподаватели"
          />
          <Select value={day} onChange={setDay} options={DAYS} placeholder="Все дни" />
          <Select value={shift} onChange={setShift} options={SHIFTS} placeholder="Все смены" />
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
                    {c.audience}
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
                    {c.schedule}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {c.shift}
                  </span>
                </div>
                <p className="mt-2 text-xs text-foreground/50">{c.startDate}</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground leading-snug">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-foreground/60 line-clamp-3 flex-1">
                  {c.description}
                </p>
                <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-xs text-foreground/50 inline-flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" /> {c.teacher}
                    </p>
                  </div>
                  <p className="text-xl font-semibold text-brand">
                    {c.price.toLocaleString("ru")} тмт
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-12 text-center text-foreground/50">Курсы не найдены.</p>
        )}
      </div>
    </section>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-full border border-border bg-card px-5 py-3 pr-10 text-sm text-foreground/80 hover:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/30 transition-colors"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
