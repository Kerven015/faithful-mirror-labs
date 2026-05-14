import hero from "@/assets/hero-classroom.jpg";
import { Volume2 } from "lucide-react";
import { useI18n } from "./i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="px-3 sm:px-5 lg:px-10 pt-3">
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[28px] bg-foreground">
        <img
          src={hero}
          alt="Kitap"
          className="h-[78vh] min-h-[520px] w-full object-cover opacity-90"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <button
          aria-label={t.hero.sound}
          className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full bg-foreground/60 text-white backdrop-blur hover:bg-foreground/80 transition-colors"
        >
          <Volume2 className="h-5 w-5" />
        </button>
        <div className="absolute bottom-10 left-6 sm:left-12 lg:bottom-16 lg:left-20 right-6 max-w-3xl">
          <h1 className="text-white font-semibold tracking-tight text-3xl sm:text-5xl lg:text-6xl leading-[1.05] animate-fade-in">
            {t.hero.title}
          </h1>
        </div>
      </div>
    </section>
  );
}
