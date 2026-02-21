import "./style/lifecycle.css";
import Image from "next/image";
import Diagram from "../../public/resource/lifecycle-diagram.svg";

export default function Lifecycle() {
  return (
    <main className="main__lifecycle w-full">
      <div className="container mx-auto flex flex-col justify-center items-center gap-10 px-3 py-10">
        {/* title */}
        <div className="title__lifecycle md:max-w-[50%]">
          <h1 className="text-[32px] text-center">
            How is the process usually handled before the production of a
            full-stack project?
          </h1>
        </div>

        {/* diagram */}
        <div className="">
          <Image
            src={Diagram}
            width={1000}
            alt="Lifecycle Diagram Fullstack"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}
