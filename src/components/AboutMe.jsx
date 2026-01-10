import React from 'react';

const AboutMe = () => {
  return (
    <section className="max-w-4xl mx-24 py-12 text-stone-900 dark:text-stone-200">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg mb-4">
        I'm Yu Yu Aung, a Frontend Engineer based in Myanmar with a passion for building clean, user-centered web interfaces. I combine modern frontend technologies with a strong foundation in UI/UX design to create accessible and responsive applications.
      </p>
      <p className="text-lg mb-6">
        Originally from a small town in Upper Myanmar, I enjoy bridging technology and design to solve real-world problems.
      </p>

      <h3 className="text-2xl font-semibold mb-3">Education</h3>
      <ul className="space-y-3 list-disc list-inside">
        <li>
          <strong>Associate Degree in Computer Science</strong> — University of the People, USA (Online)  
          <em>Expected March 2026</em>
        </li>
        <li>
          <strong>B.Sc in Computer Science</strong> — University of the People, USA (Online)  
          <em>In Progress</em>
        </li>
        <li>
          <strong>B.Tech in Architecture</strong> — Technological University, Thanlyin, Myanmar (2016-2020)
        </li>
      </ul>
    </section>
  );
};

export default AboutMe;
