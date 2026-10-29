import React from 'react'

const ExperienceCard = ({experience}) => {
  return (
    <article className="fade-up w-full max-w-4xl">
      <div className="mb-5 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-bold leading-relaxed text-heading sm:text-xl">
            {experience.role}
          </h3>

          <p className="mt-1 font-medium text-brand">
            {experience.company}
          </p>
        </div>

        <span className="w-fit shrink-0 rounded-full border border-border px-3 py-1 font-mono text-xs text-body">
          {experience.period}
        </span>
      </div>

      <p className="mb-5 text-base leading-relaxed text-body sm:text-lg">
        {experience.description}
      </p>

      <ul className="mb-6 space-y-3">
        {experience.responsibilities.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm leading-relaxed text-body sm:text-base"
          >
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div>
        <h4 className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-heading">
          {experience.company === "Lightion Myanmar Co., Ltd."
            ? "Core Skills"
            : "Tech Stack"}
        </h4>

        <div className="flex flex-wrap gap-2">
          {experience.stack.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-border bg-foreground/[0.03] px-3 py-1.5 text-xs text-body transition-colors hover:border-brand/50 hover:text-brand sm:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard
