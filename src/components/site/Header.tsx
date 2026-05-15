import { useState } from "react";
import logo from "@/assets/logo-mark.png";
import { ChevronDown, Menu, X } from "lucide-react";
import { useI18n, LANGS, Lang } from "./i18n";

export function Header() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const current = LANGS.find((l) => l.code === lang)!;

  const NAV = [
    { href: "#about", label: t.nav.about },
    { href: "#courses", label: t.nav.courses },
    { href: "#teachers", label: t.nav.teachers },
    { href: "#contact", label: t.nav.contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = id === "top" ? document.body : document.getElementById(id);
    if (el) {
      const top = id === "top" ? 0 : el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <a href="#top" onClick={(e) => handleNavClick(e, "#top")} className="flex items-center gap-2.5">
          <img src={logo} alt="Kitap" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-brand tracking-tight">Kitap</span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[15px] font-medium text-foreground/80 hover:text-brand transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 text-[15px] font-medium text-foreground/80 hover:text-brand transition-colors"
            >
              {current.label}
              <ChevronDown className="h-4 w-4" />
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 mt-3 w-36 rounded-xl border border-border bg-card shadow-lg overflow-hidden animate-fade-in z-20">
                  {LANGS.filter((l) => l.code !== lang).map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code as Lang);
                        setLangOpen(false);
                      }}
                      className="block w-full px-4 py-2.5 text-left text-sm hover:bg-brand-soft hover:text-brand transition-colors"
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] font-medium text-foreground/80"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-3 border-t border-border mt-2">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code as Lang)}
                  className={`px-3 py-1.5 text-sm rounded-full ${
                    l.code === lang
                      ? "bg-brand text-brand-foreground"
                      : "bg-surface text-foreground/70"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
