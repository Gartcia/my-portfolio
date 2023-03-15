import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata = {
  title: "Artcia's Portfolio",
  description:
    "This is my portfolio V2.1 here is where you can meet me and kown in what i'm working on",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="absolute top-0 min-w-full z-20">
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
