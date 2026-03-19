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

      <div className="relative items-center px-32">
        <div className="absolute left-32 top-0 h-full w-[2px] bg-[#22D3EE]" />
        {jobs.map((job) => (
          <JobSection {...job} />
        ))}
        {/* Timeline items go here */}
      </div>
    </section>
  );
};

export default Experience;
