"use client";
import Image from "next/image";
import Link from "next/link";
import cv_1 from "../assets/CV-1.png";
import cv_2 from "../assets/CV-2.png";
import Button from "../components/Button";
import { motion } from "framer-motion";

export default function Cv() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-2 overflow-hidden md:p-8">
      <div className="h-[250px] w-[250px] md:w-[500px] md:h-[500px] rounded-full absolute top-0 left-0 bg-gradient-to-b from-[#00FFF0] to-white opacity-30 blur-3xl"></div>
      <div className="h-[250px] w-[250px] md:w-[500px] md:h-[500px] rounded-full absolute bottom-0 rigth-0 bg-gradient-to-b from-[#00FFF0] to-white opacity-30 blur-3xl"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-2 items-center p-4 mt-14 overflow-x-hidden h-[400px] xl:h-[700px] backdrop-blur-xl"
      >
        <Image
          priority={true}
          alt="mi cv página 1"
          src={cv_1}
          className="border-[1px] border-[#d4d4d4] shadow-lg "
        />
        <Image
          priority={true}
          alt="mi cv página 2"
          src={cv_2}
          className="border-[1px] border-[#d4d4d4] shadow-lg "
        />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="z-10"
      >
        <Link
          href="https://drive.google.com/file/d/14ohykRb7KiO1nak9IBRGdf0lBiQxlezO/view?usp=share_link"
          target="_blank"
          className="rounded-lg flex justify-center items-center px-2.5 py-1.5 bg-black opacity-1 transition-all text-white"
        >
          Download{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </Link>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{ duration: 0.7, delay:0.4 }}
      >
        <Button
          text={"Go to projects"}
          route={"/projects"}
          options={"  z-10 text-lg lg:text-xl"}
        />
      </motion.div>
    </main>
  );
}
