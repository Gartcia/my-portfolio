"use client";
import Image from "next/image";
import html from "../assets/bxl-html5 1.svg";
import css from "../assets/bxl-css3-1.svg";
import js from "../assets/bxl-javascript 1.svg";
import bootstrap from "../assets/bxl-bootstrap 1.svg";
import tailwind from "../assets/bxl-tailwind-css 1.svg";
import react from "../assets/bxl-react 1.svg";
import redux from "../assets/bxl-redux 1.svg";
import sass from "../assets/bxl-sass 1.svg";
import nextjs from "../assets/next-logo.png";
import Button from "../components/Button";
import { motion } from "framer-motion";
const skills = [
  {
    label: "HTML",
    svg: html,
  },
  {
    label: "CSS",
    svg: css,
  },
  {
    label: "JS",
    svg: js,
  },
  {
    label: "Bootstrap",
    svg: bootstrap,
  },
  {
    label: "Sass",
    svg: sass,
  },
  {
    label: "Tailwind",
    svg: tailwind,
  },
  {
    label: "React",
    svg: react,
  },
  {
    label: "Redux",
    svg: redux,
  },
  {
    label: "Nextjs",
    svg: nextjs,
  },
];

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-2 overflow-hidden md:p-8">
      <div className="md:flex md:items-center md:justify-center md:mb-10 mt-5">
        <div className="h-[250px] w-[250px] rounded-full absolute top-0 left-0 bg-gradient-to-b from-[#00FFF0] to-white opacity-30 blur-3xl"></div>
        <div className="h-[250px] w-[250px] rounded-full absolute bottom-0 rigth-0 bg-gradient-to-b from-[#00FFF0] to-white opacity-30 blur-3xl"></div>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="z-10 italic text-center text-sm md:text-lg xl:text-2xl px-8 md:text-start after:block after:w-[75%] after:mx-auto after:my-4 after:bg-[#d4d4d4] after:h-[0.5px]"
        >
          Frontend Developer, currently working as{" "}
          <span className="text-[#0075FF]">Integration Specialist</span> at{" "}
          <span className="not-italic font-bold text-orange-500">FUDO</span>{" "}
          (gastronomic software).
          <br />
          <br />I studied computer science and now I&apos;m doing many courses
          to learn <span className="text-[#0075FF]">new technologies</span>.
          <br />
          <br />I love what I do and I{" "}
          <span className="text-[#0075FF]">always want to be better</span> and
          grow both as a person and as a worker.
          <br />
          <br />
          I like playing video games, especially Valorant (a shooter game).
          I&apos;m a Counter-Strike old player.
          <br />
          <br />
        </motion.p>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            animate={{
              y: [-15, 0, -15],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="bg-white rounded-lg justify-center grid grid-rows-3 gap-4 grid-flow-col p-8 m-8 border-[#d4d4d4] border-[0.7px] shadow-sm z-10"
          >
            {skills.map(({ svg, label }) => {
              return (
                <Image
                  src={svg}
                  className="w-[80px] h-[80px] md:max-w-[100px] md:max-h-[100px]"
                  key={label}
                  alt={label + " icon"}
                />
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="z-10"
      >
        <Button
          text={"Go to view CV"}
          route={"/cv"}
          options={"  z-10 text-lg lg:text-xl"}
        />
      </motion.div>
    </main>
  );
}
