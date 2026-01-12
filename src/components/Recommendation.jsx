import { GithubIcon, LinkedinIcon, Mail } from "lucide-react"
import Link from "next/link"


const Recommendation = () => {
  return (
    <section className="grid grid-cols-5 text-stone-800 py-1 bg-[url('/gradient.png')] bg-cover h-4/5 bg-no-repeat my-12 py-12">
      <h3 className="text-5xl font-bold mb-10 tracking-tight italic col-span-full text-center">Why hire me?</h3>
      <div className="ml-auto col-span-2 my-auto pl-24 mr-12">
        <div className="w-[300px] h-[300px] rounded-full border-6 border-blue-600  overflow-hidden">
          <img src="/yuyu_high_reso.png" alt="Yu Yu Portrait" className="w-full object-cover"/>
        </div>
      </div>
      <div className="col-span-3 flex flex-col items-start gap-4 py-4 pr-24">
        <p className="text-xl font-medium italic mb-4">
          I am passionate about programming.
        </p>

        <p className="text-xl font-medium italic mb-4">
          I transitioned into computer science while working full-time as a Chinese translator,<br/> teaching myself frontend development and UI/UX design.<br/> This journey strengthened my resilience, adaptability, and eagerness to learn.
        </p>

        <p className="text-xl font-medium italic">
          I’m eager to bring my skills, creativity, and dedication to build impactful, user-centered products.
        </p>
      </div>
      
    </section>
    
  )
}

export default Recommendation