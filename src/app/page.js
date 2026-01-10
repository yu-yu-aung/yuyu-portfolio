import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950 w-full  py-14">
      <Header /> 
      <HeroSection/>
      <AboutMe />
      <Projects/>
    </div>
  );
}
