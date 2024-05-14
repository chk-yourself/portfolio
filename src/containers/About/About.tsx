import React from 'react';
import HomeSection from '@/components/HomeSection';

const About = () => {
  return (
    <HomeSection title="About" id="about">
      <div className="mx-auto my-0 md:mr-0 md:max-w-md">
        <p>
          Frontend engineer with over 7 years of experience in crafting
          impactful, consumer-facing digital experiences, specializing in
          marrying technical functionality with intuitive, user-centered design.
        </p>
        <p className="mt-4">
          Self-taught, lifelong learner and tenacious problem solver with a
          trained eye for detail, stemming from a robust foundation in UX
          design.
        </p>
        <p className="mt-4">
          Adept in leveraging cutting-edge technologies and methodologies to
          meet evolving user demands in line with the latest web standards.
        </p>
        <p className="mt-4">
          Proven leadership in guiding cross-functional teams to innovate and
          execute technical solutions that advance strategic business
          objectives, committed to fostering a culture of continuous improvement
          and innovation.
        </p>
      </div>
    </HomeSection>
  );
};

export default About;
