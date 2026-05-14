import { TEACHERS } from "./data";

const PHOTOS = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=70",
];

export function Teachers() {
  return (
    <section id="teachers" className="px-5 lg:px-10 py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground max-w-4xl">
          Наши профессионалы помогут вам овладеть английским языком уверенно и с удовольствием
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full border border-border bg-card px-5 py-2 text-sm text-foreground/70">Весь опыт</span>
          <span className="rounded-full border border-border bg-card px-5 py-2 text-sm text-foreground/70">Нагрузка курса</span>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {TEACHERS.map((t, i) => (
            <article
              key={t.name}
              className="group overflow-hidden rounded-3xl bg-card border border-border transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={PHOTOS[i]}
                  alt={t.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-foreground/55">Опыт: {t.experience}</p>
                <h3 className="mt-1 text-base font-semibold text-foreground">{t.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
