'use client';
import HomeSection from '@/components/HomeSection';

interface SkillProps {
  title: string;
  skills: string[];
  color: string;
}

const SKILLS: SkillProps[] = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Shopify Liquid'],
    color: 'fuchsia',
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
    color: 'violet',
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
    color: 'blue',
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
            <ul
              className={`mt-2 flex flex-wrap gap-2 text-${skillset.color}-600`}
            >
              {skillset.skills.map((skill) => (
                <li
                  key={skill}
                  className={`border border-${skillset.color}-600 px-2 py-1 text-base leading-none`}
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
