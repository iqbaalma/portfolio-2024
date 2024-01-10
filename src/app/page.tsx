import Hero from "xbal/components/Hero";
import Lifecycle from "xbal/components/Lifecycle";
import { Navbar } from "xbal/components/Navbar";
import Roles from "xbal/components/Roles";
import Showcase from "xbal/components/Showcase";
import Tools from "xbal/components/Tools";

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
      </main>
    </>
  );
}
