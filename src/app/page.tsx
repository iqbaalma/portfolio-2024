import Footer from "xbal/src/components/Footer";
import Hero from "xbal/src/components/Hero";
import Lifecycle from "xbal/src/components/Lifecycle";
import { Navbar } from "xbal/src/components/Navbar";
import Roles from "xbal/src/components/Roles";
import Showcase from "xbal/src/components/Showcase";
import Tools from "xbal/src/components/Tools";

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
