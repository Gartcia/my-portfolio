"use client";
import Button from "./components/Button";
import me from "./assets/ME.svg";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-2 overflow-hidden -z-20">
      <div className="h-[250px] w-[250px] rounded-full absolute top-0 left-0 bg-gradient-to-b from-[#00FFF0] to-white opacity-30 blur-3xl"></div>
      <div className="h-[250px] w-[250px] rounded-full absolute bottom-0 rigth-0 bg-gradient-to-b from-[#00FFF0] to-white opacity-30 blur-3xl"></div>
      <div className="h-1/2 md:h-auto md:w-1/2 z-10 md:pl-20">
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-black mb-10 text-center md:text-start"
        >
          <span 
          className="tracking-widest text-sm md:text-xl uppercase leading-[100px]">
            Hello there! 👋
          </span>
          <br />
          <p className="text-2xl md:text-4xl leading-3">I&apos;m Gaston,</p>
          <br />
          <p className="text-xl md:text-3xl">
            Better known as{" "}
            <span className="font-extralight tracking-widest uppercase text-[#0075FF]">
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
        </motion.h1>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center items-center w-[100%] md:inline-block md:w-auto"
        >
          <Button options={" text-xl"} text={"Go to about"} route={"/about"} />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
        animate={{
          y:[-15, 0, -15]
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        >
        <Image
          src={me}
          className="z-10 translate-y-16 w-[270px] md:w-auto filter drop-shadow-lg"
          alt="this is an image of me"
        />
        </motion.div>
      </motion.div>
    </main>
  );
}
