import type { Job } from "../assets/jobs";

const JobSection = ({ role, company, dates, bullets }: Job) => {
  return (
    <div className="relative mb-10">
      <div className="absolute left-0 top-6 h-[2px] w-6 bg-[#22D3EE]" />

      <div className="pl-8">
        <h3 className="text-2xl font-semibold">
          {role} <span className="text-[#22D3EE] font-bold">@{company}</span>
        </h3>

        <p className="text-sm text-white/80 mb-2">{dates}</p>

        {bullets.map((bullet) => (
          <p className="text-white mb-4">&gt; {bullet}</p>
        ))}
      </div>
    </div>
  );
};

export default JobSection;
