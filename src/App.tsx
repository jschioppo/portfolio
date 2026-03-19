import "./App.css";
import NavBar from "./components/NavBar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Header from "./sections/Header";

function App() {
  const onNavClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen">
      <NavBar onClickCallback={onNavClick} />
      <Header />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
