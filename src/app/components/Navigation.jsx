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
    <nav className="md:justify-center lg:justify-end md:flex items-center p-6 px-40 overflow-hidden">
      <div
        className={
          "md:hidden fixed right-10 top-10 z-10 text-white cursor-pointer transition-all" +
          (showNav ? " text-black" : "")
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
          "pt-32 pl-10 md:pt-0 md:pl-0 fixed right-0 top-0 w-[0rem] min-h-screen md:w-auto md:min-h-auto md:static flex flex-col md:flex-row gap-6 transition-all overflow-hidden text-white" +
          (showNav ? " w-[15rem] bg-white text-black" : "")
        }
      >
        {links.map(({ label, route }) => {
          return (
            <li key={route}>
              <Link href={route} className="text-base font-sans">
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
