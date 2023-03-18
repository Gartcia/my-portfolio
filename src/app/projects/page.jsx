"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import weather from "../assets/weather-app-preview.png";
import pomodoro from "../assets/pomodoro-preview.png";
import calculator from "../assets/calculator-preview.png";
import markdown from "../assets/markdown-preview.png";
import drum from "../assets/drum-preview.png";
import quotes from "../assets/quotes-preview.png";
import { motion } from "framer-motion";

const projects = [
  {
    label: "Weather app",
    img: weather,
    url: "https://artcia-weather.netlify.app/",
    git: "https://github.com/Gartcia/weather-app",
    stack: ["React", "TailwindCSS", "OpenWeatherMap API", "Luxon", "Toastify"],
  },
  {
    label: "Pomodoro app",
    img: pomodoro,
    url: "https://artcia-markdown.netlify.app",
    git: "https://github.com/Gartcia/weather-app",
    stack: ["React", "Bootstrap"],
  },
  {
    label: "Calculator app",
    img: calculator,
    url: "https://artcia-calculator.netlify.app",
    git: "https://github.com/Gartcia/weather-app",
    stack: ["React", "Bootstrap"],
  },
  {
    label: "Markdown editor",
    img: markdown,
    url: "https://artcia-markdown.netlify.app",
    git: "https://github.com/Gartcia/weather-app",
    stack: ["React", "Bootstrap"],
  },
  {
    label: "Drum machine",
    img: drum,
    url: "https://artcia-drum-machine.netlify.app",
    git: "https://github.com/Gartcia/weather-app",
    stack: ["React", "Bootstrap"],
  },
  {
    label: "Random quote machine",
    img: quotes,
    url: "https://random-artcia-quotes.netlify.app",
    git: "https://github.com/Gartcia/weather-app",
    stack: ["React", "Bootstrap", "RandomQuotes API"],
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-2 overflow-hidden md:p-8">
      <div className="h-[250px] w-[250px] rounded-full absolute top-0 left-0 bg-gradient-to-b from-[#00FFF0] to-white opacity-30 blur-3xl"></div>
      <div className="h-[250px] w-[250px] rounded-full absolute bottom-0 rigth-0 bg-gradient-to-b from-[#00FFF0] to-white opacity-30 blur-3xl"></div>
      <div className="w-[100%] md:pl-10">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-xl md:text-2xl xl:text-4xl text-center md:text-left mb-3"
        >
          My recent <span className="text-[#0075FF]">projects</span>
        </motion.h1>
      </div>
      <div className="flex flex-col justify-center items-center p-3 rounded-lg border-[#d4d4d4] border-[0.7px] shadow-md backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay:0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row m-8 lg:max-w-6xl max-h-[400px] xl:max-h-[600px] overflow-x-hidden"
        >
          {projects.map(({ label, img, url, stack, git }) => {
            return (
              <div
                key={label}
                className="relative rounded-lg overflow-hidden border-[#d4d4d4] border-[0.7px]"
              >
                <Image src={img} alt={label + " image preview"} />
                <div className="absolute w-[100%] h-[100%] top-0 left-0 bg-black opacity-0 hover:opacity-100 flex flex-col justify-evenly items-center gap-4 transition-opacity">
                  <h3 className="text-white text-xs lg:text-base">{label}</h3>
                  <div className="flex flex-wrap justify-center gap-2 items-center text-xs lg:text-base p-2">
                    {stack.map((tec) => {
                      return (
                        <div
                          className="px-2 py-1 text-white bg-slate-900"
                          key={tec}
                        >
                          {tec}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center items-center gap-2 text-xs lg:text-base">
                    <Link
                      className="rounded-sm px-3 py-1.5 text-black hover:opacity-95 transition-all bg-white"
                      href={url}
                      target={"_blank"}
                    >
                      Demo
                    </Link>
                    <Link
                      className="rounded-sm px-3 py-1.5 text-black hover:opacity-95 transition-all bg-white"
                      href={git}
                      target={"_blank"}
                    >
                      Git
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay:0.4 }}
          className="w-[100%] flex justify-center items-center z-[1] pb-3"
        >
          <Link
            className="flex justify-center items-center gap-2 px-4 py-1.5 bg-black hover:opacity-95 transition-all text-white md:text-lg rounded-lg"
            href={"https://github.com/Gartcia"}
            target={"_blank"}
          >
            See more in GitHub{" "}
            <Image
              width={20}
              height={20}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbdJREFUSEu1VQtRw0AU3FUAKAAUAAqgCgAFFAVQBYACigOqAFBAUUBx0DooCh6z7bvwcrk2gZncTCYzl7vdt/s+IXpe7BkfrQRmdgHgHMCxP4pp5s+U5GRbkBsJHPgRwEGLyjmAEcnX0rkigZndA7j7o31jkqP8ToPgn+AJ94nkbSSpEZjZGYB3P/AGQEqGAG5878vfR/6W/89+5sr3LqNdOYH83PeDDyRFADPbJbmMkcW9TPWc5GE6WxF4Ul8CyISkom9dBVuvSUrZb5mamTaSTH0bkJy2oq8VqoQ/S8FFBQI7TV6T1KXOy8zi/RnJk1yBPN5xxA+SSnjnlRGA5Cr4qMACWi8EUeKS5F7n8Nd5iA4sSK4mQFSQJ1ntP+5CYmZqLo2VtKoK3FSm354P9YG6s9YDCUW94JWXB9IsU10yMzWaEj0AoKhS2aqrh4nIgaVYVSeSuCp7ahY5QRoVilhllkCqrg7R55amT7X+KQ275GdxOgaC0sTdPuzC5USiH4vUKGmr1t9C0FDZsCgDkF0C1fArWZQULDw/xbHS5ZcpIvWF1EQFGiUHm/5k6WArQZc+2Hamd4IfXwTFGbCHxBkAAAAASUVORK5CYII="
              alt="github icon"
            />
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 20, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="z-10"
      >
        <Button
          text={"Go to contact"}
          route={"/contact"}
          options={"  xl:text-2xl z-10 text-lg"}
        />
      </motion.div>
    </main>
  );
}
