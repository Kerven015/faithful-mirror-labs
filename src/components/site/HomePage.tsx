import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Courses } from "@/components/site/Courses";
import { Teachers } from "@/components/site/Teachers";
import { About } from "@/components/site/About";
import { News } from "@/components/site/News";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { I18nProvider } from "@/components/site/i18n";

export function HomePage() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background font-sans antialiased md:grid md:grid-cols-[240px_minmax(0,1fr)]">
        <Header />
        <div className="min-w-0">
          <main className="px-4 py-6 md:px-8 md:py-8">
            <Hero />
            <Courses />
            <Teachers />
            <About />
            <News />
            <Faq />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </I18nProvider>
  );
}
