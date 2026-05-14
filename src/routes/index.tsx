import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kitap — English Language Centre in Ashgabat" },
      {
        name: "description",
        content:
          "Kitap Bilim Merkezi — English courses for children, teens and adults following CEFR international standards.",
      },
      { property: "og:title", content: "Kitap Bilim Merkezi" },
      { property: "og:description", content: "English courses following CEFR standards." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <main>
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
    </I18nProvider>
  );
}
