import Showcase from "xbal/src/components/cards/Showcase";

export default function CardShowcase() {
  return (
    <main className="container flex flex-col justify-center items-center md:px-0 px-3 gap-5 mt-10 md:mt-20">
      {/* title */}
      <h1 className="hidden md:block text-[32px] font-bold text-soft-black text-center leading-tight">
        Discover website projects and designs
        <br />
        built with various technologies.
      </h1>
      <h1 className="block md:hidden text-[32px] font-bold text-soft-black text-center">
        Discover website projects and designs built with various technologies.
      </h1>

      {/* card showcase */}

      <Showcase />
    </main>
  );
}
