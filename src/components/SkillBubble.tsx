interface SkillBubbleProps {
  children?: any;
  label: string;
}

const SkillBubble = ({ children, label }: SkillBubbleProps) => {
  return (
    <div className="w-24 h-24 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center text-white">
      {children}
      <span className="mt-2 text-xs tracking-wide ">{label}</span>
    </div>
  );
};

export default SkillBubble;
