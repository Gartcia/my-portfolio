import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import weather from "../assets/weather-app-preview.png"

const projects = [
  {
    label: "Weather app",
    img: weather,
    url: "https://artcia-weather.netlify.app/",
    git: "https://github.com/Gartcia/weather-app",
    stack: ["react", "tailwindcss"],
  },
  {
    label: "Weather app",
    img: weather,
    url: "https://artcia-weather.netlify.app/",
    git: "https://github.com/Gartcia/weather-app",
    stack: ["react", "tailwindcss"],
  },
  {
    label: "Weather app",
    img: weather,
    url: "https://artcia-weather.netlify.app/",
    git: "https://github.com/Gartcia/weather-app",
    stack: ["react", "tailwindcss"],
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-2 overflow-hidden md:p-8">
      <div className="bg-white rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-col p-8 m-8 border-[#d4d4d4] border-[0.7px] shadow-sm z-10">
        {projects.map(({ label, img, url, stack, git }) => {
          return (
            <div key={label}>
              <Image src={img} />
              <div className="absolute w-[100%] h-[100%] top-0 left-0 bg-black hover:opacity-60 opacity-0 transition-opacity flex flex-col justify-center items-center gap-2">
                <h3>{label}</h3>
                <div className="flex justify-center items-center gap-2">
                  {stack.map((tec) => {
                    <div className="px-2 py-1 text-white bg-slate-900">
                      {tec}
                    </div>;
                  })}
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Link href={url} target={"_blank"}>
                    Demo
                  </Link>
                  <Link href={git} target={"_blank"}>
                    Git
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Button
        text={"Go to contact"}
        route={"/contact"}
        options={"  z-10 text-lg"}
      />
    </main>
  );
}
