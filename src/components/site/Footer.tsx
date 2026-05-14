import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 lg:px-10 py-12">
      <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logo} alt="Kitap" className="h-9 w-auto" />
          <p className="mt-4 text-sm text-foreground/60 max-w-sm">
            Современный образовательный центр в Ашхабаде. Английский язык по международным стандартам CEFR.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Навигация</h4>
          <ul className="mt-4 space-y-2 text-sm text-foreground/60">
            <li><a href="#about" className="hover:text-brand">О нас</a></li>
            <li><a href="#courses" className="hover:text-brand">Курсы</a></li>
            <li><a href="#teachers" className="hover:text-brand">Преподаватели</a></li>
            <li><a href="#contact" className="hover:text-brand">Контакты</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Контакты</h4>
          <ul className="mt-4 space-y-2 text-sm text-foreground/60">
            <li>Ашхабад, Туркменистан</li>
            <li>+993 12 345 678</li>
            <li>info@kitap.tm</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-10 pt-6 border-t border-border flex flex-wrap justify-between gap-4 text-xs text-foreground/50">
        <p>© {new Date().getFullYear()} Kitap Bilim Merkezi. Все права защищены.</p>
        <a href="#" className="hover:text-brand">Политика конфиденциальности</a>
      </div>
    </footer>
  );
}
