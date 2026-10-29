import React from 'react';
import SquareDivider from './SquareDivider';

const AboutMe = () => {
  return (

      <section className="mx-auto w-full max-w-7xl px-6 py-12 text-foreground sm:px-10 sm:py-18 lg:px-24 lg:py-24 flex flex-col items-center">
        {/* Intro */}
        <div className="mb-12 flex max-w-4xl flex-col items-start sm:mb-16 fade-up ">
          <div className="mb-4 border-b border-accent px-2 font-mono font-bold sm:mb-6">
            Intro
          </div>

          <p className="space-y-5 text-start text-base leading-relaxed text-body sm:text-lg">
            I&apos;m <span className="font-semibold text-brand">Yu Yu</span>, a software engineer with a strong foundation in full-stack development, UI/UX design, and applied AI/ML. <br/> From crafting responsive interfaces to developing backend features and exploring AI-powered solutions, I enjoy turning complex ideas into usable software. 
          </p>
        </div>

        <SquareDivider squareCount={7}/>

        {/* Technical Skills */}
        <div className="mb-12 flex max-w-4xl flex-col items-start sm:mb-16 fade-up ">
          <div className="mb-4 border-b border-accent px-2 font-mono font-bold sm:mb-6">
            Technical Skills
          </div>

          <div className="space-y-5 text-start text-base leading-relaxed text-body sm:text-lg">
            <p>
              <span className="font-semibold text-brand">Frontend Development:</span>{" "}
              React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, responsive design, and component-based architecture.
            </p>

            <p>
              <span className="font-semibold text-brand">Backend Development & Databases:</span>{" "}
              PHP, Laravel, REST API integration, MySQL, PostgreSQL, MongoDB and Supabase.
            </p>

            <p>
              <span className="font-semibold text-brand">AI & Machine Learning:</span>{" "}
              Python, Neural network fundamentals, artificial neural networks (ANNs), convolutional neural networks (CNNs), computer vision fundamentals, and AI integration concepts.
            </p>

            <p>
              <span className="font-semibold text-brand">Tools & Deployment:</span>{" "}
              Git, GitHub, Docker, Vercel, Coolify, Cloudflare, Kubernetes and Linux development environments.
            </p>

            <p>
              <span className="font-semibold text-brand">UI/UX & Software Practices:</span>{" "}
              Figma, user-centered design, prototyping, Agile methodology, debugging, and maintainable code organization.
            </p>
          </div>
        </div>

        <SquareDivider squareCount={7}/>

        {/* Education */}
        <div className="mb-12 flex max-w-4xl flex-col items-start sm:mb-16 fade-up w-full">
          <div className="mb-4 border-b border-accent px-2 font-mono font-bold sm:mb-6">
            Educational Background
          </div>

          <div className="fade-up space-y-6 text-start text-base leading-relaxed text-body sm:text-lg">
            <div>
              <h3 className="font-semibold text-brand">
                Bachelor of Science in Computer Science
              </h3>
              <p>University of the People, USA</p>
              <p className="text-foreground/60 font-body">In progress, Expected graduation: March 2027</p>
            </div>

            <div>
              <h3 className="font-semibold text-brand">
                Associate of Science in Computer Science
              </h3>
              <p>University of the People, USA</p>
              <p className="text-foreground/60 font-body">April 2024 - April 2026</p>
            </div>

            <div>
              <h3 className="font-semibold text-brand">
                Bachelor of Technology in Architecture
              </h3>
              <p>Technological University, Thanlyin, Myanmar</p>
              <p className="text-foreground/60 font-body">2016–2020</p>
            </div>
          </div>
        </div>
      
        <SquareDivider squareCount={7}/>

        {/* Professional Strengths & Languages */}
        <div className="mb-4 flex max-w-4xl flex-col items-start sm:mb-10">
          <div className="mb-4 border-b border-accent px-2 font-mono font-bold sm:mb-6">
            Professional Strengths & Languages
          </div>

          <div className="fade-up space-y-5 text-start text-base leading-relaxed text-body sm:text-lg">
            <p>
              <span className="font-semibold text-brand">Professional Strengths:</span>{" "}
              Problem-solving, attention to detail, adaptability, cross-functional communication, collaboration, technical documentation, continuous learning, and high emotional intelligence.
            </p>

            <p className='font-body italic text-disabled'>
              My experiences in different work environments has strengthened my ability to investigate issues systematically, communicate complex information clearly, and collaborate across technical and cultural boundaries.
            </p>

            <p>
              <span className="font-semibold text-brand">Languages:</span>{" "}
              Burmese (Native), English (Professional Proficiency), and Chinese (Conversational; HSK 5 passed).
            </p>
          </div>
        </div>
    </section>
  );
};

export default AboutMe;
