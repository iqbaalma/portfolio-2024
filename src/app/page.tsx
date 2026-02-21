import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Lifecycle from "../components/Lifecycle";
import { Navbar } from "../components/Navbar";
import Roles from "../components/Roles";
import Showcase from "../components/Showcase";
import Tools from "../components/Tools";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Tools />
        <Lifecycle />
        <Showcase />
        <Roles />
        <Footer />
      </main>
    </>
  );
}
