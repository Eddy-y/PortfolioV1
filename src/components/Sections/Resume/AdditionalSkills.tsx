import {FC, memo} from 'react';
import {AdditionalSkillSection} from '../../../data/dataDef';

export const AdditionalSkills: FC<{additionalSkills: AdditionalSkillSection}> = memo(({additionalSkills}) => {
  const {title, skills} = additionalSkills;
  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold">{title}</span>
      <div className="flex flex-wrap gap-2 justify-center mt-2">
        {skills.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className={`rounded-full px-3 py-1 text-sm font-medium text-white ${skill.color}`}>
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
});

AdditionalSkills.displayName = 'AdditionalSkills';