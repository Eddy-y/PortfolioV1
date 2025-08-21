import classNames from 'classnames';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import {StackSection} from '../../data/dataDef';
import Section from '../Layout/Section_Resume';

const Stack: FC<{stackData: StackSection}> = memo(({stackData}) => {
  const {title, groups} = stackData;

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 70},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Section className="backgroundColor" sectionId={SectionId.Stack}>
      <motion.h2
        className="title section-heading"
        initial="hidden"
        variants={itemVariants}
        viewport={{once: true, amount: 0.2}}
        whileInView="visible">
        {title}
      </motion.h2>
      <div className="flex flex-col gap-y-8 ">
        <p className="normal-text flex items-center gap-2">
          Technologies I use to provide solution to persistent problems
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full border border-gray-700 px-4 rounded-3xl"
          initial="hidden"
          variants={containerVariants}
          viewport={{once: true, amount: 0.2}}
          whileInView="visible">
          {groups.map((group, groupIndex) => (
            <div className="rounded-lg  p-6 flex flex-col gap-y-4" key={groupIndex}>
              <h3 className="subtitle ">{group.name}</h3>
              <div className="grid grid-cols-3 gap-4">
                {group.items.map((item, itemIndex) => (
                  <a
                    className={classNames(
                      'flex flex-col items-center gap-y-2 transition-all duration-300 hover:scale-110 bg-neutral-800 rounded-xl p-4', // Added background here
                      item.href ? 'cursor-pointer' : 'cursor-default',
                    )}
                    href={item.href}
                    key={itemIndex}
                    rel="noopener noreferrer"
                    target="_blank">
                    {item.imageSrc && (
                      <motion.div
                        initial="hidden"
                        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} // Ensure inner content is centered
                        variants={itemVariants}
                        viewport={{once: true, amount: 0.2}}
                        whileInView="visible">
                        <Image alt={item.name} className="h-16 w-16" height={64} src={item.imageSrc} width={64} />
                      </motion.div>
                    )}
                    <span className="text-xs font-medium text-white text-center">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
});

Stack.displayName = 'Stack';
export default Stack;
