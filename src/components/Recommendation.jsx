import { GithubIcon, LinkedinIcon, Mail } from "lucide-react"
import Link from "next/link"


const Recommendation = () => {
  return (
    <section className="relative  text-stone-800 my-8 sm:my-12 py-8 sm:py-12 overflow-hidden">

      <img src="/gradient.png" alt="blue gradient image" aria-hidden className="absolute inset-0 h-full w-auto object-cover object-top pointer-events-none select-none"/>
      <div className="relative z-10 flex flex-col items-center justify-between lg:grid lg:grid-cols-5">
        <h3 className="text-3xl sm:text-5xl font-bold mb-10 tracking-tight italic sm:col-span-full text-center">Why hire me?</h3>
      <div className="lg:ml-auto lg:col-span-2 lg:my-auto lg:pl-24 lg:mr-12">
        <div className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] rounded-full border-4 sm:border-6 border-blue-600 overflow-hidden">
          <img src="/yuyu_high_reso.png" alt="Yu Yu Portrait" className="w-full object-cover"/>
        </div>
      </div>
      <div className="lg:col-span-3 flex flex-col items-center justify-between lg:items-start gap-2 lg:gap-4 py-2 lg:pr-24 px-4 sm:px-8">
        <p className="text-sm sm:text-xl font-medium italic mb-2 sm:mb-4 lg:text-start">
          I am passionate about programming.
        </p>

        <p className="text-sm sm:text-xl font-medium italic mb-2 sm:mb-4 text-center lg:text-start">
          I transitioned into computer science while working full-time as a Chinese translator, teaching myself frontend development and UI/UX design.<br/> This journey strengthened my resilience, adaptability, and eagerness to learn.
        </p>

        <p className="text-sm sm:text-xl font-medium italic text-center lg:text-start">
          I’m eager to bring my skills, creativity, and dedication to build impactful, user-centered products.
        </p>
      </div>
      </div>    
    </section>
    
  )
}

export default Recommendation