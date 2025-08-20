import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../../config';
import {portfolioItems, SectionId} from '../../../data/data';
import {PortfolioItem} from '../../../data/dataDef';
import useDetectOutsideClick from '../../../hooks/useDetectOutsideClick';
import Section from '../../Layout/Section_Resume';

const Portfolio: FC = memo(() => {
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
    <Section className="backgroundColor" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <motion.h2
          className="title"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
          variants={itemVariants}>
          My projects - and Dogs
        </motion.h2>
        <p className="normal-text flex items-center gap-2">
            Here are some of the projects I've worked on, showcasing my skills in
            various technologies and problem domains.
          </p>
        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"> */}
        <motion.div
          className="w-full columns-1 md:columns-2 lg:columns-3"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
          variants={containerVariants}>
          {portfolioItems.map((item, index) => {
            const {title, image, description, noClick, slug, technologies} = item;

            if (noClick) {
              return (
                <motion.div
                  key={`${title}-${index}`}
                  className="pb-6"
                  variants={itemVariants}>
                  <div
                    className={classNames(
                      'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105',
                    )}>
                    <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                    <ItemOverlay item={item} />
                  </div>
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  key={`${title}-${index}`}
                  className="pb-6"
                  variants={itemVariants}>
                  <div className="overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl bg-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:scale-105 border border-gray-700">
                    <div className="relative">
                      <Image alt={title} className="h-full w-full object-cover" placeholder="blur" src={image} />
                    </div>
                    <Link href={`/projects/${slug}`}>
                      <div className="p-4 cursor-pointer transition-all duration-300">
                        <h3 className="text-lg font-bold text-white">{title}</h3>
                        {technologies && (
                          <div className="mt-2 flex flex-wrap justify-start gap-2">
                            {technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="rounded-full bg-neutral-800 px-2 py-1 text-xs text-white border border-orange-500">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        <p className="mt-2 text-sm normal-text">{description}</p>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              );
            }
          })}
        </motion.div>
      </div>
    </Section>
  );
});
Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item}) => {
  const {title, description, repoUrl} = item;
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      href={repoUrl}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});