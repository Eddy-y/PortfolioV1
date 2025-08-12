import {useRouter} from 'next/router';
import Image from 'next/image';
import {FC} from 'react';

import Footer from '../../components/Sections/Footer';
import Header from '../../components/Sections/Header';
import Page from '../../components/Layout/Page';
import {portfolioItems, homePageMeta} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';


const ProjectDetails: FC = () => {
  const router = useRouter();
  // Ensure the slug is a string for the lookup
  const slug = Array.isArray(router.query.slug) ? router.query.slug[0] : router.query.slug;
  
  const project = portfolioItems.find((item: PortfolioItem) => item.slug === slug);

  if (!project) {
    return (
      <Page title={homePageMeta.title} description={homePageMeta.description}>
        <Header />
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold text-white">Project not found</h1>
        </div>
        <Footer />
      </Page>
    );
  }

  return (
    <Page title={`${project.title} | ${homePageMeta.title}`} description={project.fullDescription}>
      <Header />
      <div className="container mx-auto p-8 pt-24 min-h-screen">
        {/* Title in the top left */}
        <h1 className="text-4xl font-bold text-neutral-800 mb-4">{project.title}</h1>
        
        {/* Full description */}
        <p className="prose prose-lg text-neutral-600 mb-10">{project.fullDescription}</p>
        
        {/* Two images with a fixed size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images.slice(0, 2).map((imageSrc, index) => (
            <div key={index} className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src={imageSrc} 
                alt={`${project.title} - Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        {/* Repository button */}
        {project.repoUrl && (
          <div className="mt-8 text-center">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-orange-500 text-orange-500 font-medium text-sm leading-tight uppercase rounded-full hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-150 ease-in-out">
              View Project
            </a>
          </div>
        )}
      </div>
      <Footer />
    </Page>
  );
};

export default ProjectDetails;