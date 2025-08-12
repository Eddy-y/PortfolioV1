// src/components/Sections/MusicCarousel.tsx

import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useCallback, useMemo, useRef, useState} from 'react';
import useInterval from '../../../hooks/useInterval';

import {MusicCarouselSection, Song} from '../../../data/dataDef';
import {SectionId} from '../../../data/data';
import Section from '../../Layout/Section';

const MusicCarousel: FC<{musicCarouselData: MusicCarouselSection}> = memo(({musicCarouselData}) => {
  const {title, songs} = musicCarouselData;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const goToNext = useCallback(() => {
    setActiveIndex(current => (current + 1) % songs.length);
  }, [songs.length]);

  const goToPrev = useCallback(() => {
    setActiveIndex(current => (current - 1 + songs.length) % songs.length);
  }, [songs.length]);

  useInterval(goToNext, 5000); // Auto-scroll every 5 seconds

  const songItems = useMemo(() => {
    return songs.map((song, index) => (
      <SongItem key={index} song={song} totalSongs={songs.length} /> // Pass totalSongs as a prop
    ));
  }, [songs]);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Music}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">{title}</h2>
        <div className="relative overflow-hidden">
          <div
            ref={scrollContainer}
            className={classNames(
              'flex transition-transform duration-500 ease-in-out'
            )}
            style={{
              width: `${songs.length * 100}%`,
              transform: `translateX(-${activeIndex * (100 / songs.length)}%)`
            }}>
            {songItems}
          </div>
          <button className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-700/50 p-2 rounded-full text-white" onClick={goToPrev}>
            &lt;
          </button>
          <button className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-700/50 p-2 rounded-full text-white" onClick={goToNext}>
            &gt;
          </button>
        </div>
        <div className="flex justify-center gap-x-2">
          {songs.map((_, index) => (
            <button
              key={index}
              className={classNames(
                'h-3 w-3 rounded-full bg-gray-300 transition-all duration-500',
                activeIndex === index ? 'scale-100 opacity-100' : 'scale-75 opacity-60'
              )}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </Section>
  );
});

const SongItem: FC<{song: Song; totalSongs: number}> = memo(({song, totalSongs}) => {
  return (
    <a href={song.spotifyUrl} target="_blank" rel="noopener noreferrer" className="block p-4 flex-shrink-0" style={{width: `calc(100% / ${totalSongs})`}}>
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