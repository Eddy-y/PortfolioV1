import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';
import {SectionId} from '../../data/data';
import {StackSection} from '../../data/dataDef';
import Section from '../Layout/Section';

const Stack: FC<{stackData: StackSection}> = memo(({stackData}) => {
  const {title, groups} = stackData;

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Stack}>
      <div className="flex flex-col items-center gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {groups.map((group, groupIndex) => (
            <div key={groupIndex} className="bg-neutral-700 rounded-lg shadow-lg p-6 flex flex-col gap-y-4">
              <h3 className="text-lg font-bold text-white text-center">{group.name}</h3>
              <div className="grid grid-cols-3 gap-4">
                {group.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classNames(
                      'flex flex-col items-center gap-y-2 transition-all duration-300 hover:scale-110',
                      item.href ? 'cursor-pointer' : 'cursor-default'
                    )}>
                    {item.imageSrc && (
                      <Image
                        src={item.imageSrc}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="h-10 w-10"
                      />
                    )}
                    <span className="text-xs font-medium text-white text-center">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

Stack.displayName = 'Stack';
export default Stack;
