import Link from "next/link";

export default function Button({ text, route, options }) {
  return (
    <Link
      href={route}
      className={
        "w-fit  gap-2 rounded-md border-[#d4d4d4] border-[1px] bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-[#fdfdfd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-100" +
        options
      }
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 inline-block"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
    </Link>
  );
}
