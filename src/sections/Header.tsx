import ParticlesBackground from "../components/ParticlesBackground";

const Header = () => {
  return (
    <section className="relative min-h-screen w-full" id="home">
      <ParticlesBackground />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
        <p className="text-6xl font-semibold">Hello, I’m Jacob</p>

        <p className="mt-4 text-4xl opacity-90">Full-stack developer</p>

        <p className="text-3xl opacity-70">
          Building modern web applications with React and Node.js
        </p>
      </div>
    </section>
  );
};

export default Header;
