import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="min-w-72">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

// Min Page With = 288px 18rem min-w-72