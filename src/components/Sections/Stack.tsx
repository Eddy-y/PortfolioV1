import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';
import {SectionId} from '../../data/data';
import {StackSection} from '../../data/dataDef';
import Section from '../Layout/Section_Resume';
import {motion} from 'framer-motion';

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
    <Section className="bg-neutral-800" sectionId={SectionId.Stack}>
      <div className="flex flex-col items-center gap-y-8 ">
        <motion.h2
          className="self-center text-6xl font-bold text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
          variants={itemVariants}>
          {title}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full shadow-lg shadow-orange-500 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
          variants={containerVariants}>
            {groups.map((group, groupIndex) => (
            <div key={groupIndex} className="rounded-lg shadow-lg p-6 flex flex-col gap-y-4">
              <h3 className="text-lg font-bold text-white text-center">{group.name}</h3>
              <div className="grid grid-cols-3 gap-4">
                {group.items.map((item, itemIndex) => (
                  <a
                    href={item.href}
                    key={itemIndex}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classNames(
                      'flex flex-col items-center gap-y-2 transition-all duration-300 hover:scale-110 bg-neutral-700 rounded-lg p-4', // Added background here
                      item.href ? 'cursor-pointer' : 'cursor-default'
                    )}>
                    {item.imageSrc && (
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={itemVariants}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} // Ensure inner content is centered
                        >
                        <Image
                        src={item.imageSrc}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="h-16 w-16"
                        />
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
