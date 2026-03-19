import SkillBubble from "../components/SkillBubble";
import { FaReact, FaAngular, FaNodeJs, FaJira, FaGitAlt } from "react-icons/fa";
import {
  SiDotnet,
  SiRecoil,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiSocketdotio,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0d47a1] text-white  px-4 py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold relative inline-block">About</h2>
      </div>

      <div className="flex items-center max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT: About Text */}
        <div>
          <div className="text-lg leading-8 text-white/80 text-justify">
            <p>
              My career has been focused on full-stack web development, building
              modern web applications across a range of environments, from
              defense contractors to consulting firms and product focused
              companies. Over that time, I’ve built a strong foundation across
              the full stack, developing user-facing features, building backend
              services and APIs, and working with data to support real-world
              applications.
            </p>
            <br />
            <p>
              What I enjoy most about web development is how tangible it is. You
              can take an idea and turn it into something people can actually
              use every day, then continue improving it in rapid iterations. I
              enjoy solving problems, refining user experience, and pushing
              applications from functional to polished.
            </p>
            <br />
            <p>
              Outside of work, I spend my time gaming, working on cosplay
              projects, visiting theme parks, and getting together with friends
              for board and card games.
            </p>
          </div>
        </div>

        {/* RIGHT: Skills Panel */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md h-[600px] border border-white/20 rounded-2xl flex items-center justify-center text-white/40">
            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-3">
                <p className="text-md text-white uppercase tracking-wider">
                  Frontend
                </p>

                <div>
                  <SkillBubble label="React">
                    <FaReact size={32} className="text-[#61DAFB]" />
                  </SkillBubble>
                </div>

                <div>
                  <SkillBubble label="Angular">
                    <FaAngular size={32} className="text-[#DD0031]" />
                  </SkillBubble>
                </div>

                <div>
                  <SkillBubble label="TailWind CSS">
                    <SiTailwindcss size={32} className="text-[#38BDF8]" />
                  </SkillBubble>
                </div>
                <div>
                  <SkillBubble label="Redux">
                    <SiRedux size={32} className="text-[#764ABC]" />
                  </SkillBubble>
                </div>
                <div>
                  <SkillBubble label="Recoil">
                    <SiRecoil size={32} className="text-[#3578E5]" />
                  </SkillBubble>
                </div>
              </div>
              <div className="flex flex-col items-center gap-6">
                <p className="text-md text-white uppercase tracking-wider">
                  Backend
                </p>
                <div>
                  <SkillBubble label="Node.js">
                    <FaNodeJs size={32} className="text-[#339933]" />
                  </SkillBubble>
                </div>
                <div>
                  <SkillBubble label="Express">
                    <SiExpress size={32} className="text-white" />
                  </SkillBubble>
                </div>
                <div>
                  <SkillBubble label="Socket.IO">
                    <SiSocketdotio size={32} className="text-white/80" />
                  </SkillBubble>
                </div>
                <div>
                  <SkillBubble label=".NET / C#">
                    <SiDotnet size={32} className="text-purple-300" />
                  </SkillBubble>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6">
                <p className="text-md text-white uppercase tracking-wider">
                  Tools
                </p>
                <div>
                  <SkillBubble label="Git">
                    <FaGitAlt size={32} className="text-[#F05032]" />
                  </SkillBubble>
                </div>

                <div>
                  <SkillBubble label="Jira">
                    <FaJira size={32} className="text-blue-300" />
                  </SkillBubble>
                </div>

                <div>
                  <SkillBubble label="SQL">
                    <span className="text-white font-semibold text-lg">
                      SQL
                    </span>
                  </SkillBubble>
                </div>

                <div>
                  <SkillBubble label="Azure">
                    <VscAzure size={32} className="text-[#0078D4]" />
                  </SkillBubble>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
