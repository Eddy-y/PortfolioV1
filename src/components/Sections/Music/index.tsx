// src/components/Sections/MusicCarousel.tsx

import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useMemo, useState} from 'react';

import {MusicCarouselSection, Song} from '../../../data/dataDef';
import {SectionId} from '../../../data/data';
import Section from '../../Layout/Section';

const MusicCarousel: FC<{musicCarouselData: MusicCarouselSection}> = memo(({musicCarouselData}) => {
  const {title, songs} = musicCarouselData;
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = useMemo(() => {
    if (songs.length === 0) {
      return null;
    }
    const clonedSongs = [...songs, ...songs, ...songs];
    return clonedSongs;
  }, [songs]);

  const goToPrev = () => setActiveIndex(prevIndex => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));
  const goToNext = () => setActiveIndex(prevIndex => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));

  if (!carouselItems) {
    return null;
  }

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Music}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">{title}</h2>
        <div className="relative">
          <div className="flex overflow-hidden scroll-smooth">
            {songs.map((song, index) => (
              <div
                key={index}
                className={classNames(
                  'w-full flex-shrink-0 transition-transform duration-500',
                  `transform translate-x-${activeIndex * -100}`,
                )}>
                <SongItem song={song} />
              </div>
            ))}
          </div>
          <button className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-700/50 p-2 rounded-full" onClick={goToPrev}>
            &lt;
          </button>
          <button className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-700/50 p-2 rounded-full" onClick={goToNext}>
            &gt;
          </button>
        </div>
      </div>
    </Section>
  );
});

const SongItem: FC<{song: Song}> = memo(({song}) => {
  return (
    <a href={song.spotifyUrl} target="_blank" rel="noopener noreferrer" className="block p-4">
      <Image 
        src={song.imageSrc} 
        alt={song.name} 
        width={300} 
        height={300} 
        className="rounded-lg shadow-lg mx-auto"
      />
      <div className="text-center mt-4 text-white">
        <p className="font-bold">{song.name}</p>
        <p className="text-sm">{song.artist}</p>
      </div>
    </a>
  );
});

export default MusicCarousel;