"use client"
import Button from "../components/Button";
import MapChart from "../components/MapChart";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center lg:items-start justify-center gap-2 overflow-hidden md:p-8">
      <div className="h-[250px] w-[250px] rounded-full absolute top-0 left-0 bg-gradient-to-b from-[#00FFF0] to-white opacity-30 blur-3xl"></div>
      <div className="h-[250px] w-[250px] rounded-full absolute bottom-0 rigth-0 bg-gradient-to-b from-[#00FFF0] to-white opacity-30 blur-3xl"></div>
      <div className="w-[100%] md:pl-10">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-center md:text-left mb-4">
          Do you want to work <span className="text-[#0075FF]">with me?</span>
          <br />
          Contact me here!
        </h1>
      </div>
      <div className="flex gap-2 md:justify-start justify-center items-center w-[100%] relative">
      <div className="z-40 flex flex-col justify-start items-center p-3 lg:ml-10 rounded-lg border-[#d4d4d4] border-[0.7px] shadow-md md:min-w-[55%] lg:min-w-[50%] h-[500px] md:h-[600px] backdrop-blur-xl">
        <div className="flex gap-2 justify-between items-start w-full p-4">
          <input
            className="rounded-md border-[#d4d4d4] border-[0.7px] px-2 py-2  placeholder:pl-2 w-full focus-within:outline-[#0075FF]"
            placeholder="name..."
            type="text"
          />
          <input
            className="rounded-md border-[#d4d4d4] border-[0.7px] px-2 py-2 placeholder:pl-2 w-full focus-within:outline-[#0075FF]"
            placeholder="email@example.com..."
            type="email"
          />
        </div>
        <div className="w-full px-4 h-full mb-4">
          <textarea
            className="rounded-md border-[#d4d4d4] border-[0.7px] py-2 placeholder:pl-2 w-full resize-none h-full focus-within:outline-[#0075FF]"
            name="message"
            placeholder="message..."
            id="message"
          ></textarea>
        </div>
        <div className="flex justify-end w-full px-4">
          <div className="flex justify-center gap-1 hover:gap-2 rounded-md cursor-pointer items-center px-5 py-1.5 bg-[#0075FF] opacity-95 hover:opacity-90 transition-all text-white font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
            Send
          </div>
        </div>
      </div>
      <MapChart />
      </div>
      <div className="w-[100%] flex justify-center items-center">
        <Button
          text={"Go back to home"}
          route={"/"}
          options={"  lg:text-2xl md:text-xl z-10 text-lg mt-4"}
        />
      </div>
    </main>
  );
}