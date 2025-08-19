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
      <div className="flex flex-col ">
        {/* Corrected parent grid to accommodate the column spans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-32 ">
          {/* First Column */}
          <div className="flex flex-col gap-y-4 md:col-span-1 ">
            <ResumeSection title="Education">
              {education.map((item, index) => (
                <TimelineItem item={item} key={`${item.title}-${index}`} />
              ))}
            </ResumeSection>
            <ResumeSection title="Skills">
              <p className="pb-8"></p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {skills.map((skillgroup, index) => (
                  <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
                ))}
              </div>
            </ResumeSection>
          </div>
          {/* Second Column */}
          <div className="md:col-span-2">
            <ResumeSection title="Work">
              <div className="flex flex-col divide-y-2 divide-neutral-300">
                {experience.map((item, index) => (
                  <TimelineItem item={item} key={`${item.title}-${index}`} />
                ))}
              </div>
            </ResumeSection>
          </div>
        </div>
          {/* <ResumeSection title="Stack">
              <AdditionalSkills additionalSkills={additionalSkills} />
            </ResumeSection> */}
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
