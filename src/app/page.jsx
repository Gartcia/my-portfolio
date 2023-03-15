import Button from "./components/Button";
import me from "./assets/ME.svg";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-2 bg-[url('./assets/bg-hero-portfolio.png')] bg-cover overflow-hidden">
      <div className="h-[100%] w-[100%] absolute top-0 left-0 bg-gradient-to-b from-[#00FFF0] to-black opacity-30"></div>
      <div className="h-1/2 md:h-auto md:w-1/2 z-10 md:pl-20">
        <h1 className="text-white mb-10 text-center md:text-start">
          <span className="tracking-widest text-sm md:text-xl uppercase leading-[100px]">
            Hello there! 👋
          </span>
          <br />
          <p className="text-2xl md:text-4xl leading-3">I'm Gaston,</p>
          <br />
          <p className="text-xl md:text-3xl">
            Better known as{" "}
            <span className="font-extralight tracking-widest uppercase">
              artcia
            </span>
          </p>
          <br />
          <span className="text-3xl md:text-6xl">
            Frontend Developer <br />
            <span className="text-lg">
              (actual Integration Specialist at{" "}
              <span className="text-orange-500 font-bold">FUDO</span>)
            </span>
          </span>
        </h1>
        <div className="flex justify-center items-center w-[100%] md:inline-block md:w-auto">
          <Button options={" text-xl"} text={"Go to about"} route={"/about"} />
        </div>
      </div>
      <Image src={me} className="z-10 translate-y-16 w-[270px] md:w-auto" />
    </main>
  );
}
