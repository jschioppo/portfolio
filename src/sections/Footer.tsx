import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const ICON_CLASS =
    "w-10 h-10 transition-colors duration-200 hover:text-[rgb(63,185,80)]";

  return (
    <footer
      className="absolute  left-0 w-full h-16
         bg-[#0d47a1]/70 backdrop-blur-md
         border-t border-white/10
         flex items-center justify-center
         text-white text-sm"
    >
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/jschioppo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={ICON_CLASS} />
        </a>

        <a
          href="https://linkedin.com/in/jacobschioppo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={ICON_CLASS} />
        </a>
        <a href="mailto:jacobschioppo@gmail.com" title="Email me">
          <Mail className={ICON_CLASS} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
