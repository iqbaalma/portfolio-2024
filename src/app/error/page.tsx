"use client";
import { useRouter } from "next/navigation";

export default function Error() {
  const route = useRouter();
  const handleBack = () => {
    route.back();
  };

  return (
    <>
      <head>
        <title>Coba</title>
      </head>
      <div className="min-h-screen flex flex-col justify-center items-center gap-5 text-center">
        <div>
          <h1 className="text-[66px]">401 :)</h1>
          <h1>Sorry, this page under maintenance</h1>
        </div>
        <span className="underline" onClick={handleBack}>
          Return Explore
        </span>
      </div>
    </>
  );
}
