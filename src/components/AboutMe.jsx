import React from 'react';

const AboutMe = () => {
  const techList = [
    { id: 1, name: 'HTML5' },
    { id: 2, name: 'CSS3' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'React' },
    { id: 5, name: 'Next.js' },
    { id: 6, name: 'Tailwind CSS' },
    { id: 7, name: 'TypeScript' },
    { id: 8, name: 'Git & GitHub' },
    { id: 9, name: 'Figma' },
  ];

  const languageList = [
    { id: 1, name: 'Burmese', level: 'Native' },
    { id: 2, name: 'English', level: 'Professional working proficiency' },
    { id: 3, name: 'Chinese', level: 'Conversational' },
  ];

  const softSkillList = [
    { id: 1, name: 'Problem Solving' },
    { id: 2, name: 'Communication' },
    { id: 3, name: 'Team Collaboration' },
    { id: 4, name: 'Time Management' },
    { id: 5, name: 'Adaptability' },
    { id: 6, name: 'Attention to Detail' },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 text-foreground sm:px-10 sm:py-18 lg:px-24 lg:py-24">
      <div className="mb-4 flex max-w-4xl flex-col items-center sm:mb-10">
        <p className="fade-up mb-10 text-center text-lg font-medium italic leading-relaxed text-foreground/90 sm:text-2xl">
          I&apos;m <span className="font-semibold text-brand">Yu Yu</span>, a Frontend Engineer based in Myanmar with a passion for building clean, user-centered web interfaces. I combine modern frontend technologies with a strong foundation in UI/UX design to create accessible and responsive applications.
        </p>
        <hr className="mt-2 w-xs border border-border sm:w-lg lg:w-3xl" />
      </div>

      <div className="image-rb-frame grid grid-cols-6 gap-4 px-2 py-10 sm:px-10 sm:py-14 lg:gap-0">
        <h3 className="col-span-full mb-4 text-2xl font-bold italic tracking-tight sm:mb-10 sm:text-4xl">
          Skills
        </h3>

        <div className="fade-up col-span-5 ml-auto flex rounded-lg border border-border bg-secondary/80 p-2 shadow-lg sm:col-span-4 lg:col-span-3">
          <h2 className="mr-2 rotate-180 text-base font-bold uppercase italic [writing-mode:vertical-rl] sm:text-lg lg:text-2xl">
            Tech Stacks
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {techList.map((tech) => (
              <p
                className="white-space-normal break-words border border-border bg-card px-2 py-1 text-start text-xs font-medium text-foreground sm:px-4 sm:py-2 sm:text-sm"
                key={tech.id}
              >
                {tech.name}
              </p>
            ))}
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-3" />
        <div className="col-span-1 sm:col-span-2 lg:col-span-3" />

        <div className="fade-up col-span-5 ml-auto mr-4 flex rounded-lg border border-border bg-secondary/80 p-2 shadow-lg sm:col-span-4 sm:mr-0 lg:col-span-3">
          <h2 className="mr-2 rotate-180 text-base font-bold uppercase italic [writing-mode:vertical-rl] sm:text-lg lg:text-2xl">
            Languages
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {languageList.map((lan) => (
              <p
                className="border border-border bg-card px-2 py-1 text-start text-xs font-medium text-foreground sm:px-4 sm:py-2 sm:text-sm"
                key={lan.id}
              >
                {lan.name} <span className="font-normal italic">({lan.level})</span>
              </p>
            ))}
          </div>
        </div>

        <div className="fade-up col-span-5 ml-auto flex rounded-lg border border-border bg-secondary/80 p-2 shadow-lg sm:col-span-4 lg:col-span-3">
          <h2 className="mr-2 rotate-180 text-base font-bold uppercase italic [writing-mode:vertical-rl] sm:text-lg lg:text-2xl">
            Softskills
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {softSkillList.map((soft) => (
              <p
                className="white-space-normal break-words border border-border bg-card px-2 py-1 text-start text-xs font-medium text-foreground sm:px-4 sm:py-2 sm:text-sm"
                key={soft.id}
              >
                {soft.name}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="text-lb-frame grid grid-cols-1 gap-16 px-2 py-10 sm:px-10 sm:py-14 lg:grid-cols-2">
        <div className="fade-up pl-6 sm:pl-10">
          <h3 className="mb-4 text-2xl font-bold italic tracking-tight sm:mb-10 sm:text-4xl">
            Education
          </h3>

          <div className="flex flex-col gap-4 sm:gap-6">
            {[
              {
                title: 'Associate Degree in Computer Science',
                org: 'University of the People, USA (Online)',
                date: 'April 2026',
              },
              {
                title: 'B.Sc in Computer Science',
                org: 'University of the People, USA (Online)',
                date: 'Expected April 2027',
              },
              {
                title: 'B.Tech in Architecture',
                org: 'Technological University, Thanlyin, Myanmar',
                date: '2016 – 2020',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card/80 p-2 shadow-sm backdrop-blur-md transition-all hover:scale-[1.02] sm:rounded-2xl sm:p-6"
              >
                <h4 className="mb-1 text-lg font-semibold sm:text-xl">{item.title}</h4>
                <p className="text-foreground/80">{item.org}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up pl-6 sm:pl-10">
          <h3 className="mb-4 text-2xl font-bold italic tracking-tight sm:mb-10 sm:text-4xl">
            Experience
          </h3>

          <div className="flex flex-col gap-4 sm:gap-6">
            {[
              {
                title: 'Frontend Developer',
                org: 'MMS IT Software Solutions — Internship (Online)',
                date: 'July 2025 – Feb 2026',
              },
              {
                title: 'Volunteer UI/UX Designer',
                org: "Brain Builders' Organization (Online)",
                date: 'Feb 2025 – Aug 2025',
              },
              {
                title: 'Chinese Translator',
                org: 'Lightion Myanmar Co. Ltd.',
                date: 'Aug 2023 – May 2025',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card/80 p-2 shadow-sm backdrop-blur-md transition-all hover:scale-[1.02] sm:rounded-2xl sm:p-6"
              >
                <h4 className="mb-1 text-lg font-semibold sm:text-xl">{item.title}</h4>
                <p className="text-foreground/80">{item.org}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
