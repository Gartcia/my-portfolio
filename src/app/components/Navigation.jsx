"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "View CV",
    route: "/cv",
  },
  {
    label: "Projects",
    route: "/projects",
  },
  {
    label: "Contact",
    route: "/contact",
  },
];

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="md:justify-center lg:justify-end md:flex items-center p-6 px-40">
      <div
        className={
          "md:hidden text-black px-1 py-1 rounded-md fixed right-10 top-10 cursor-pointer transition-all z-10"
        }
        onClick={() => setShowNav(!showNav)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 25 25"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <ul
        className={
          "pt-32 md:pt-0 md:pl-0 fixed right-0 top-0 w-[0rem] h-screen md:h-auto md:w-auto md:static flex flex-col md:flex-row md:gap-6 transition-all overflow-hidden z-20" +
          (showNav ? " w-[15rem] bg-white" : "")
        }
      >
        <div className="absolute right-10 top-10 px-1 py-1 md:hidden cursor-pointer" onClick={() => setShowNav(!showNav)} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {links.map(({ label, route }) => {
          return (
            <li key={route} className="py-2 pl-10 md:pl-0 md:py-2 hover:bg-black md:hover:bg-transparent hover:text-white md:hover:text-black" >
              <Link
                href={route}
                className="md:px-3 md:py-2 md:flex md:items-center md:justify-center text-base font-sans z-10 md:border-b-[0px] md:hover:border-b-[0.7px] border-black"
                onClick={() => setShowNav(!showNav)}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
