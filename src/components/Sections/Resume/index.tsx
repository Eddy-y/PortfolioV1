import {FC, memo} from 'react';

import {education, experience, SectionId, skills, additionalSkills} from '../../../data/data';
import Section from '../../Layout/Section_Resume';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';
import {AdditionalSkills} from './AdditionalSkills'; // Import the new component


const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8">
          {/* First Column */}
          <div className="flex flex-col gap-y-4">
            <ResumeSection title="Education">
              {education.map((item, index) => (
                <TimelineItem item={item} key={`${item.title}-${index}`} />
              ))}
            </ResumeSection>
            <ResumeSection title="Skills">
              <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {skills.map((skillgroup, index) => (
                  <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
                ))}
              </div>
            </ResumeSection>
            <ResumeSection title="Additional Skills">
              <AdditionalSkills additionalSkills={additionalSkills} />
            </ResumeSection>
          </div>
          {/* Second Column */}
          <ResumeSection title="Work">
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
        </div>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
