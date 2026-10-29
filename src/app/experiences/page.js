import ExperienceCard from "@/components/ExperienceCard";
import SquareDivider from "@/components/SquareDivider";
import React from "react";

const experiences = [
  {
    company: "ROM Dynamics Co., Ltd.",
    role: "Full-stack Software Engineer",
    period: "Current",
    description:
      "Contribute to developing web applications across the frontend and backend, focusing on maintainable architecture, functional interfaces, and reliable application workflows.",
    responsibilities: [
      "Develop user-facing interfaces and administrative features using Next.js and React.",
      "Build and integrate backend functionality with Laravel and relational databases.",
      "Work with Docker and deployment infrastructure to support application delivery."
    ],
    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "PHP",
      "Laravel",
      "PostgreSQL",
      "Docker",
      "Nginx"
    ]
  },
  {
    company: "DeepBlue AI Labs",
    role: "AI Engineer (Volunteer)",
    period: "Volunteer",
    description:
      "Explore AI and machine learning concepts through technical research and practical experimentation, with an interest in bringing AI capabilities into real-world software and edge devices.",
    responsibilities: [
      "Study neural network architectures, computer vision, and model behavior.",
      "Explore small language models and the trade-offs between model quality, memory usage, and inference performance on edge hardware.",
      "Investigate practical approaches to integrating AI models into software systems."
    ],
    stack: [
      "Python",
      "PyTorch",
      "Neural Networks",
      "Computer Vision",
      "LLMs / SLMs",
      "NVIDIA Jetson"
    ]
  },
  {
    company: "Karmine Labs",
    role: "Full-stack Developer (Part-time)",
    period: "Part-time",
    description:
      "Develop practical software solutions with a focus on business workflows, maintainable web applications, and AI integration. My current focus includes a gym management SaaS platform designed to simplify day-to-day gym operations.",
    responsibilities: [
      "Build gym management features and business workflows using PHP and Laravel.",
      "Design and implement database-backed functionality for managing application data.",
      "Explore opportunities to integrate AI capabilities into practical business software."
    ],
    stack: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "React",
      "Next.js",
      "REST APIs",
      "Git"
    ]
  },
  {
    company: "MMS IT",
    role: "Frontend Engineer (Remote Internship)",
    period: "Remote",
    description:
      "Develop responsive web interfaces and frontend features using modern JavaScript frameworks, with an emphasis on reusable components, maintainable code, and a consistent user experience.",
    responsibilities: [
      "Build and refine interfaces using React, Next.js, and TypeScript.",
      "Integrate frontend components with APIs and manage application state.",
      "Work with Git, Docker, and deployment tools as part of the development workflow."
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Flowbite",
      "Docker",
      "Coolify"
    ]
  },
  {
    company: "Brain Builders Organization",
    role: "UI/UX Designer (Internship)",
    period: "Internship",
    description:
      "Designed user-centered mobile interfaces by translating product requirements into clear user flows, high-fidelity screens, and consistent visual design systems.",
    responsibilities: [
      "Create high-fidelity mobile UI designs and interactive prototypes in Figma.",
      "Design approximately 50 mobile screens while maintaining consistent typography, color, and component patterns.",
      "Apply usability principles and responsive design considerations to improve the overall user experience."
    ],
    stack: [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "User-Centered Design"
    ]
  },
  {
    company: "Lightion Myanmar Co., Ltd.",
    role: "OQC Assistant Supervisor & Chinese–Burmese Translator",
    period: "Aug 2023 – May 2025",
    description:
      "Combined quality-control operations, technical translation, and team coordination in a manufacturing environment, helping bridge communication between Chinese-speaking and Burmese-speaking colleagues.",
    responsibilities: [
      "Translate technical documents and workplace instructions between Chinese and Burmese.",
      "Support OQC training, quality documentation, and communication of inspection procedures.",
      "Coordinate and support a team of three leaders and three supervisors."
    ],
    stack: [
      "Chinese–Burmese Translation",
      "Technical Documentation",
      "Quality Control",
      "Team Coordination",
      "Training",
      "Cross-cultural Communication"
    ]
  }
];


const Page = () => {
  return (
    <section className="min-h-full w-full bg-background">
      {/* Section heading */}
      <header className="border-b border-border px-4 py-4 text-heading sm:px-10 sm:py-6 lg:px-24 lg:py-8">
        <h2 className="font-heading text-xl font-bold sm:text-2xl lg:text-3xl">
          Experiences
        </h2>
      </header>

      {/* Experience timeline */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-12 sm:px-10 sm:py-16 lg:px-24 lg:py-20">
        {experiences.map((experience, index) => (
          <React.Fragment key={experience.company}>
            <ExperienceCard experience={experience} />

            {index < experiences.length - 1 && (
              <div className="my-10 w-full sm:my-14">
                <SquareDivider squareCount={7} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Page;
