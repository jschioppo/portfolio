import { Code, FileText, Home, User } from "lucide-react";

interface NavBarProps {
  onClickCallback: (section: string) => void;
}
const NavBar = ({ onClickCallback }: NavBarProps) => {
  const ICON_SIZE = 18;
  const LINK_CLASS =
    "flex items-center gap-2 text-white hover:opacity-70 transition bg-transparent border-none cursor-pointer";
  return (
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4"
      id="header-nav"
    >
      <div className="flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-6 py-3 text-white ">
        <div className="font-bold text-xl mr-2">Jacob Schioppo</div>

        <div className="flex flex-wrap gap-2 md:gap-6 text-sm md:text-lg">
          <button
            onClick={() => onClickCallback("home")}
            className={LINK_CLASS}
          >
            <Home size={18} />
            Home
          </button>
          <button
            onClick={() => onClickCallback("about")}
            className={LINK_CLASS}
          >
            <User size={18} />
            About
          </button>
          <button
            onClick={() => onClickCallback("experience")}
            className={LINK_CLASS}
          >
            <FileText size={ICON_SIZE} />
            Experience
          </button>

          <a
            href="https://github.com/jschioppo/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASS}
          >
            <Code size={ICON_SIZE} />
            View Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
