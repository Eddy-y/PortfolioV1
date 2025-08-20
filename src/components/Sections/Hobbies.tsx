// src/components/Sections/Hobbies.tsx

import {FC, memo} from 'react';
import {SectionId} from '../../data/data';
import {HobbiesSection} from '../../data/dataDef';
import Section from '../Layout/Section_Resume';
import {motion} from 'framer-motion';


const Hobbies: FC<{hobbiesData: HobbiesSection}> = memo(({hobbiesData}) => {
  const {title, items} = hobbiesData;

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
    hidden: {opacity: 0, y: 30},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Section className="bg-neutral-900" sectionId={SectionId.Hobbies}>
      <div className="flex flex-col items-center gap-y-8 bg-neutral-900">
        <div className="border-2 border-neutral-700 rounded-3xl p-6 w-full">
          <motion.h2
            className="title section-heading mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
            variants={itemVariants}>
            {title}
            </motion.h2>
          <motion.div 
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
            variants={containerVariants}>
            {items.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col p-4 "
                variants={itemVariants}>
                <div className=' flex items-center rounded-lg shadow-md bg-neutral-800 border border-gray-500 w-max'>
                    <item.Icon className="h-10 w-10 p-2 text-neutral-600 text-orange-500" />
                    <h3 className="font-bold text-white text-sm mb-0 pr-6">{item.title}</h3>
                </div>
                <p className="font-semibold text-sm normal-text pt-4">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
});

Hobbies.displayName = 'Hobbies';
export default Hobbies;