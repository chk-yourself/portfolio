import React from 'react';
import HomeSection from '@/components/HomeSection';

const About = () => {
  return (
    <HomeSection title="About" id="about">
      <div className="mx-auto my-0 md:mr-0 md:max-w-md">
        <p>
          Self-taught, user-centric web engineer with 7+ years of experience in
          crafting impactful, consumer-facing digital experiences.
        </p>
        {/*
        <p className="mt-4">
          Starting my journey in UX/UI design, I specialize in marrying
          technical functionality with intuitive, user-centered
          design. As a self-taught, lifelong learner and tenacious problem solver with
          a trained eye for detail, stemming from a robust foundation in UX
          design.
        </p>
        <p className="mt-4">
          Adept in leveraging modern technologies and fostering team synergy to
          drive continuous innovation and refinement of the user experience, in
          tune with evolving user needs, business objectives, and web standards.
        </p>
        <p className="mt-4">
          Proven leadership in guiding cross-functional teams to innovate and
          execute technical solutions that advance strategic business
          objectives, committed to fostering a culture of continuous improvement
          and innovation.
        </p>
        */}
      </div>
    </HomeSection>
  );
};

export default About;
