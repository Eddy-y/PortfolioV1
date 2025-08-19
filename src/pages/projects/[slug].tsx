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

  // Determine the description content based on its type
  const pageDescription = typeof project.fullDescription === 'string' 
    ? project.fullDescription 
    : 'A detailed description of the project.';

  return (
    <Page title={`${project.title} | ${homePageMeta.title}`} description={pageDescription}>
      <Header />
      <div className="container mx-auto p-8 pt-24 min-h-screen bg-neutral-100 ">
        <div className="mx-auto px-4 md:px-6 max-w-6xl"> 
          <div className="mb-4">
            <h1 className="text-6xl font-bold">{project.title}</h1>
            {/* Year moved to the left below the title */}
            <div className="text-lg font-bold text-orange-500 my-4">{project.year}</div>
          </div>
          {/* Full description with padding and max width */}
          <div className="flex justify-center my-12">
              <p className="text-neutral-600 mb-10 text orange-100">{project.fullDescription}</p>
          </div>
          
          {/* Render a single image centered below the text */}
          {project.images && project.images.length > 0 && (
            <div key={0} className="relative mx-auto w-full max-w-xl h-80 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src={project.images[0]} 
                alt={`${project.title} - Image 1`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}

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
      </div>
      <Footer className="bg-neutral-200" />
    </Page>
  );
};

export default ProjectDetails;
