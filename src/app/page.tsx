import Hero from "xbal/components/Hero";
import { Navbar } from "xbal/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
      </main>
    </>
  );
}
