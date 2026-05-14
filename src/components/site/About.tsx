import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import abstract from "@/assets/abstract.jpg";

const TABS = [
  {
    title: "Учебный центр Kitap",
    body: "Учебный центр Kitap — это современная образовательная площадка, где каждый студент получает возможность раскрыть свой потенциал. Мы предлагаем курсы по языкам, подготовке к экзаменам и развитию навыков, необходимых в реальной жизни.",
    bullets: [
      "Индивидуальный подход к каждому студенту Kitap.",
      "Современные методы преподавания для лучших результатов.",
      "Программы, разработанные с учётом мировых стандартов.",
      "Опытные преподаватели с большим стажем работы.",
      "Дружеская атмосфера, мотивирующая к обучению.",
    ],
  },
  {
    title: "Наши курсы",
    body: "В Kitap мы предлагаем широкий выбор курсов, соответствующих современным образовательным требованиям. Программы включают английский, русский и туркменский языки, подготовку к международным экзаменам и личностное развитие.",
    bullets: [
      "Курсы английского языка для всех уровней подготовки.",
      "Подготовка к экзаменам IELTS, TOEFL и другим.",
      "Интенсивные курсы русского языка для быстрого прогресса.",
      "Курсы по развитию коммуникативных навыков.",
      "Программы для детей, подростков и взрослых.",
    ],
  },
  {
    title: "Почему выбирают нас",
    body: "Kitap стал выбором сотен студентов благодаря качеству образования и индивидуальному подходу. Мы создаём комфортные условия, предоставляем современные материалы и используем инновационные технологии.",
    bullets: [
      "Высокий уровень доверия среди студентов и родителей.",
      "Современные учебные материалы и технологии.",
      "Реальные результаты уже после первых месяцев занятий.",
      "Доступные цены и гибкие программы оплаты.",
      "Положительные отзывы и рекомендации студентов.",
    ],
  },
];

export function About() {
  const [open, setOpen] = useState(0);
  return (
    <section id="about" className="px-5 lg:px-10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm font-medium text-brand uppercase tracking-wider">Преимущества образовательного центра</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            О центре Kitap
          </h2>
          <p className="mt-6 text-lg text-foreground/65 leading-relaxed">
            <span className="font-semibold text-foreground">Kitap Bilim Merkezi</span> — это современный
            образовательный центр в Ашхабаде, где английский язык становится ключом к цифровому будущему. Наша цель — стать центром №1 в Туркменистане и установить новый стандарт качества образования.
          </p>
          <div className="relative mt-10 overflow-hidden rounded-3xl">
            <img src={abstract} alt="" className="w-full h-72 object-cover" loading="lazy" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {TABS.map((t, i) => {
            const isOpen = open === i;
            return (
              <div
                key={t.title}
                className={`rounded-3xl border transition-all ${
                  isOpen ? "border-brand bg-brand-soft/40" : "border-border bg-card"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-foreground">{t.title}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-foreground/50 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-foreground/70 leading-relaxed">{t.body}</p>
                    <ul className="mt-5 space-y-3">
                      {t.bullets.map((b) => (
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
