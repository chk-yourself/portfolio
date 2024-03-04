'use client';
import HomeSection from '@/components/HomeSection';

interface SkillProps {
  title: string;
  skills: string[];
  cssClass?: string;
}

const SKILLS: SkillProps[] = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Shopify Liquid'],
    cssClass: 'text-fuchsia-700 border-fuchsia-700',
  },
  {
    title: 'Frameworks/Libraries',
    skills: [
      'React',
      'Next.js',
      'Angular',
      'Sass',
      'Styled Components',
      'Emotion',
      'TailwindCSS',
      'Redux',
      'Express',
      'jQuery',
    ],
    cssClass: 'text-violet-700 border-violet-700',
  },
  {
    title: 'Tools/Platforms',
    skills: [
      'Git',
      'Webpack',
      'Babel',
      'Gulp',
      'AWS',
      'Microsoft Azure',
      'Firebase',
      'GraphQL',
      'Node.js',
      'PostgreSQL',
      'NoSQL',
      'Docker',
      'Strapi',
    ],
    cssClass: 'text-blue-700 border-blue-700',
  },
];

const Skills = () => {
  return (
    <HomeSection title="Skills" id="skills" className="">
      <div className="mx-auto my-0 md:mr-0 md:max-w-md">
        {SKILLS.map((skillset, i) => (
          <div
            key={skillset.title}
            className={`${i > 0 ? 'mt-8 md:mt-10' : ''}`}
          >
            <h3 className="text-xl font-bold tracking-tightest">
              {skillset.title}
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {skillset.skills.map((skill) => (
                <li
                  key={skill}
                  className={`border px-2 py-1 text-base leading-none ${skillset.cssClass}`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </HomeSection>
  );
};

export default Skills;
