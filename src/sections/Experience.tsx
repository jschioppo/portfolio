import { jobs } from "../assets/jobs";
import JobSection from "../components/JobSection";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#0d47a1] text-white px-4 py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold relative inline-block">Experience</h2>
      </div>

      <div className="relative items-center px-4 sm:px-6 md:px-16 lg:px-32">
        {/* Experience bar */}
        <div className="absolute left-4 sm:left-6 md:left-16 lg:left-32 top-0 h-full w-[2px] bg-[#22D3EE]" />
        {jobs.map((job) => (
          <JobSection {...job} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
