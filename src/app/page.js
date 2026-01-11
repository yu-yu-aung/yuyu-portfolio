import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-900 w-full  py-14">
      <Header /> 
      <HeroSection/>
      <h2 className="w-full py-12 bg-blue-400 dark:bg-blue-900 text-6xl font-bold text-stone-700 dark:text-stone-300 text-lb-frame px-24" id="about-me">About Me</h2>
      <AboutMe />
      <div id="projects">
        <Projects/>
      </div>
      <Footer/>
    </div>
  );
}
