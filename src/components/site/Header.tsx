import { useState, type MouseEvent } from "react";
import logo from "@/assets/logo-mark.png";
import { BookOpen, ChevronDown, Download, HelpCircle, Info, Mail, Menu, Users, X } from "lucide-react";
import { useI18n, LANGS, Lang } from "./i18n";
import { Link } from "@tanstack/react-router";

export function Header() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const current = LANGS.find((l) => l.code === lang)!;

  const NAV = [
    { href: "#about", label: t.nav.about, icon: Info },
    { href: "#courses", label: t.nav.courses, icon: BookOpen },
    { href: "#teachers", label: t.nav.teachers, icon: Users },
    { href: "#faq", label: t.faq.eyebrow, icon: HelpCircle },
    { href: "#contact", label: t.nav.contact, icon: Mail },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = id === "top" ? document.body : document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const sidebar = (
    <>
      <a href="#top" onClick={(e) => handleNavClick(e, "#top")} className="flex items-center gap-2.5 px-2 pt-2">
        <img src={logo} alt="Kitap" className="h-8 w-auto rounded-[var(--radius-sm)] bg-sidebar-accent" />
        <span className="font-display text-xl font-medium tracking-tight text-sidebar-foreground">Kitap</span>
      </a>
      <nav className="mt-8 flex flex-col gap-1">
        {NAV.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="flex h-11 items-center gap-3 rounded-[10px] px-3 text-sm text-sidebar-foreground/70 transition-colors hover:bg-white/10 hover:text-sidebar-foreground"
            >
              <Icon className="size-4" strokeWidth={1.75} />
              {item.label}
            </a>
          );
        })}
        <Link
          to="/download-guide"
          onClick={() => setOpen(false)}
          className="flex h-11 items-center gap-3 rounded-[10px] px-3 text-sm text-sidebar-foreground/70 transition-colors hover:bg-white/10 hover:text-sidebar-foreground"
        >
          <Download className="size-4" strokeWidth={1.75} />
          {t.nav.download}
        </Link>
      </nav>
      <div className="mt-auto space-y-3 pt-6">
        <div className="relative">
          <button
            onClick={() => setLangOpen((v) => !v)}
            className="flex h-10 w-full items-center justify-between rounded-[10px] bg-white/10 px-3 text-sm text-sidebar-foreground"
          >
            {current.label}
            <ChevronDown className={`size-4 transition-transform ${langOpen ? "rotate-180" : ""}`} />
          </button>
          {langOpen && (
            <div className="absolute inset-x-0 bottom-12 overflow-hidden rounded-[14px] border border-sidebar-border bg-sidebar-accent">
              {LANGS.filter((l) => l.code !== lang).map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code as Lang);
                    setLangOpen(false);
                  }}
                  className="block w-full px-3 py-2.5 text-left text-sm text-sidebar-foreground/80 hover:bg-white/10"
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="flex h-11 items-center justify-center rounded-[10px] bg-brand text-sm font-medium text-brand-foreground"
        >
          {t.hero.cta}
        </a>
      </div>
    </>
  );

  return (
    <>
      <aside className="relative hidden min-h-screen flex-col bg-sidebar p-4 text-sidebar-foreground md:flex">
        {sidebar}
      </aside>

      <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-border bg-background/90 px-4 py-3 backdrop-blur md:hidden">
        <button
          className="grid size-10 place-items-center rounded-[10px] border border-border"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
        <a href="#top" onClick={(e) => handleNavClick(e, "#top")} className="flex items-center gap-2">
          <img src={logo} alt="" className="h-7 w-auto" />
          <span className="font-display text-lg font-medium">Kitap</span>
        </a>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 md:hidden">
          <button className="absolute inset-0 bg-foreground/40" aria-label="Close menu" onClick={() => setOpen(false)} />
          <aside className="relative flex h-full w-64 flex-col bg-sidebar p-4 text-sidebar-foreground">
            <div className="mb-2 flex justify-end">
              <button className="grid size-10 place-items-center text-sidebar-foreground" onClick={() => setOpen(false)}>
                <X className="size-5" />
              </button>
            </div>
            {sidebar}
          </aside>
        </div>
      ) : null}
    </>
  );
}
