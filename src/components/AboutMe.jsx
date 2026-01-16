
import React from "react";

const AboutMe = () => {

  const techList = [
  { id: 1, name: "HTML5" },
  { id: 2, name: "CSS3" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "React" },
  { id: 5, name: "Next.js" },
  { id: 6, name: "Tailwind CSS" },
  { id: 7, name: "TypeScript" },
  { id: 8, name: "Git & GitHub" },
  { id: 9, name: "Figma" },
];

const languageList = [
  { id: 1, name: "Burmese", level: "Native" },
  { id: 2, name: "English", level: "Professional working proficiency" },
  { id: 3, name: "Chinese", level: "Conversational" },
];

const softSkillList = [
  { id: 1, name: "Problem Solving" },
  { id: 2, name: "Communication" },
  { id: 3, name: "Team Collaboration" },
  { id: 4, name: "Time Management" },
  { id: 5, name: "Adaptability" },
  { id: 6, name: "Attention to Detail" },
]; 
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-12 sm:py-18 lg:py-24 text-stone-900 dark:text-stone-200">
  
      {/* Intro */}
      <div className="mb-4 sm:mb-10 max-w-4xl flex flex-col items-center ">
        <p className="text-lg sm:text-2xl leading-relaxed font-medium italic opacity-90 mb-10 text-center fade-up">
          I’m <span className="font-semibold">Yu Yu</span>, a Frontend Engineer based in Myanmar with a passion for building clean, user-centered web interfaces. I combine modern frontend technologies with a strong foundation in UI/UX design to create accessible and responsive applications.
        </p>
        <hr className="text-blue-900 dark:to-blue-200 w-xs sm:w-lg lg:w-3xl border mt-2" />
      </div>
      
      {/* Skill Sets */}
      <div className="grid grid-cols-6 image-rb-frame px-2 sm:px-10 py-10 sm:py-14 gap-4 lg:gap-0">
        <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-10 tracking-tight italic col-span-full">
            Skills
        </h3>

        {/* Tech */}
        <div className=" col-span-5 sm:col-span-4 lg:col-span-3 flex p-2 rounded-lg border bg-blue-100/30 dark:bg-blue-900/20 border-blue-200/30 dark:border-blue-900/20 shadow-lg dark:shadow-[0_8px_30px_rgba(0,0,0,0.35) ml-auto fade-up">
          <h2 className="text-base sm:text-lg lg:text-2xl font-bold uppercase italic mr-2 [writing-mode:vertical-rl] rotate-180">Tech Stacks</h2>
          <div className="grid grid-cols-3 gap-2">
            {techList?.map((tech) => (
              <p className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium bg-blue-200 dark:bg-blue-900 border border-stone-200/60 dark:border-stone-700/60 text-start break-words white-space-normal" key={tech.id}>{tech.name}</p>
            ))}
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
        </div>

        {/* Language */}
        <div className=" col-span-5 sm:col-span-4 lg:col-span-3 flex p-2 rounded-lg border bg-blue-100/30 dark:bg-blue-900/20 border-blue-200/30 dark:border-blue-900/20 shadow-lg dark:shadow-[0_8px_30px_rgba(0,0,0,0.35) ml-auto mr-4 sm:mr-0 fade-up">
          <h2 className="text-base sm:text-lg lg:text-2xl font-bold uppercase italic mr-2 [writing-mode:vertical-rl] rotate-180">Languages</h2>
          <div className="grid grid-cols-1 gap-2">
            {languageList?.map((lan) => (
              <p className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium bg-blue-200 dark:bg-blue-900 border border-stone-200/60 dark:border-stone-700/60 text-start" key={lan.id}>{lan.name} <span className="italic font-normal">({lan.level})</span></p>
            ))}

          </div>
        </div>

        {/* softskills */}
        <div className=" col-span-5 sm:col-span-4 lg:col-span-3 flex p-2 rounded-lg border bg-blue-100/30 dark:bg-blue-900/20 border-blue-200/30 dark:border-blue-900/20 shadow-lg dark:shadow-[0_8px_30px_rgba(0,0,0,0.35) ml-auto fade-up">
          <h2 className="text-base sm:text-lg lg:text-2xl font-bold uppercase italic mr-2 [writing-mode:vertical-rl] rotate-180">Softskills</h2>
          <div className="grid grid-cols-2 gap-2">
            {softSkillList?.map((soft) => (
              <p className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium bg-blue-200 dark:bg-blue-900 border border-stone-200/60 dark:border-stone-700/60 text-start break-words white-space-normal" key={soft.id}>{soft.name}</p>
            ))}
          </div>
        </div>
      </div>
      
      {/* Education + Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-2 sm:px-10 text-lb-frame py-10 sm:py-14">
        
        {/* Education */}
        <div className=" pl-6 sm:pl-10 fade-up">
          <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-10 tracking-tight italic">
            Education
          </h3>

          <div className="flex flex-col gap-4 sm:gap-6">
            {[
              {
                title: "Associate Degree in Computer Science",
                org: "University of the People, USA (Online)",
                date: "Expected March 2026",
              },
              {
                title: "B.Sc in Computer Science",
                org: "University of the People, USA (Online)",
                date: "In Progress",
              },
              {
                title: "B.Tech in Architecture",
                org: "Technological University, Thanlyin, Myanmar",
                date: "2016 – 2020",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg sm:rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-blue-100/60 dark:bg-blue-900/40 backdrop-blur-md p-2 sm:p-6 shadow-sm transition-all hover:scale-105"
              >
                <h4 className="text-lg sm:text-xl font-semibold mb-1">
                  {item.title}
                </h4>
                <p className="text-stone-700 dark:text-stone-400">
                  {item.org}
                </p>
                <p className="mt-2 text-sm text-stone-500 dark:text-stone-500">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className=" pl-6 sm:pl-10 fade-up">
          <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-10 tracking-tight italic">
            Experience
          </h3>

          <div className="flex flex-col gap-4 sm:gap-6">
            {[
              {
                title: "Frontend Developer",
                org: "MMS IT Software Solutions — Internship (Online)",
                date: "July 2025 – Present",
              },
              {
                title: "Volunteer UI/UX Designer",
                org: "Brain Builders' Organization (Online)",
                date: "Feb 2025 – Aug 2025",
              },
              {
                title: "Chinese Translator",
                org: "Lightion Myanmar Co. Ltd.",
                date: "Aug 2023 – May 2025",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg sm:rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-blue-100/60 dark:bg-blue-900/40 backdrop-blur-md p-2 sm:p-6 shadow-sm transition-all hover:scale-105"
              >
                <h4 className="text-lg sm:text-xl font-semibold mb-1">
                  {item.title}
                </h4>
                <p className="text-stone-700 dark:text-stone-400">
                  {item.org}
                </p>
                <p className="mt-2 text-sm text-stone-500 dark:text-stone-500">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

  );
};

export default AboutMe;
