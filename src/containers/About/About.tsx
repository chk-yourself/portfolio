import React from 'react';
import HomeSection from '@/components/HomeSection';

const About = () => {
  return (
    <HomeSection title="About" id="about">
      <div className="mx-auto my-0 md:mr-0 md:max-w-md">
        <p>
          User-centric frontend engineer with 7+ years of experience in crafting
          impactful, consumer-facing digital experiences.
        </p>
        <p className="mt-4">
          Self-taught, lifelong learner and tenacious problem solver with a keen
          attention to detail, adept in leveraging modern technologies and
          fostering team synergy to drive continuous refinement of the user
          experience, in tune with evolving user needs, business objectives, and
          web standards.
        </p>
      </div>
    </HomeSection>
  );
};

export default About;
