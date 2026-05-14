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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kitap — Образовательный центр английского языка в Ашхабаде" },
      {
        name: "description",
        content:
          "Kitap Bilim Merkezi — курсы английского языка для детей, подростков и взрослых по международным стандартам CEFR.",
      },
      { property: "og:title", content: "Kitap Bilim Merkezi" },
      { property: "og:description", content: "Курсы английского языка по стандартам CEFR." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
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
  );
}
