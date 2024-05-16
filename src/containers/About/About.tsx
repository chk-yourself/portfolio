/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import HomeSection from '@/components/HomeSection';

const About = () => {
  return (
    <HomeSection title="About" id="about">
      <div className="mx-auto my-0 md:mr-0 md:max-w-md">
        <p>
          Unicorn web developer/designer with over 7 years of experience in
          engineering impactful, consumer-facing digital experiences. Rooted in
          a strong foundation in UX/UI design, I specialize in marrying
          technical functionality with intuitive, user-centered design,
          prioritizing web performance, responsive design, cross-platform
          compatibility, accessibility, and scalability.
        </p>
        <p className="mt-4">
          Starting from humble origins as a self-taught engineer, my career
          highlights include designing and developing custom web solutions for
          renowned global brands. In partnership with Microsoft, Porsche, Honda,
          Guess, Puma, and 88rising, I've orchestrated the successful launch of
          innovative microsites and impactful landing pages for global marketing
          campaigns, honing my ability to lead cross-functional teams to
          innovate and execute technical solutions that advance diverse business
          objectives.
        </p>
      </div>
    </HomeSection>
  );
};

export default About;
