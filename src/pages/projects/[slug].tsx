import Image from 'next/image';
import {useRouter} from 'next/router';
import {FC, memo} from 'react';

import Page from '../../components/Layout/Page';
import Footer from '../../components/Sections/Footer';
import Header from '../../components/Sections/Header';
import {homePageMeta, portfolioItems} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';

const ProjectDetails: FC = memo(() => {
  const router = useRouter();
  // Ensure the slug is a string for the lookup
  const slug = Array.isArray(router.query.slug) ? router.query.slug[0] : router.query.slug;

  const project = portfolioItems.find((item: PortfolioItem) => item.slug === slug);

  if (!project) {
    return (
      <Page description={homePageMeta.description} title={homePageMeta.title}>
        <Header />
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold text-white">Project not found</h1>
        </div>
        <Footer />
      </Page>
    );
  }

  // Determine the description content based on its type
  const pageDescription =
    typeof project.fullDescription === 'string' ? project.fullDescription : 'A detailed description of the project.';

  return (
    <Page description={pageDescription} title={`${project.title} | ${homePageMeta.title}`}>
      <Header />
      <div className="mx-auto p-8 pt-24 min-h-screen bg-neutral-100 ">
        <div className="mx-auto px-4 md:px-6 max-w-6xl">
          <div className="mb-4">
            <h1 className="text-5xl font-bold">{project.title}</h1>
            {/* Year moved to the left below the title */}
            <div className="text-lg font-bold text-orange-500 my-4">{project.year}</div>
          </div>
          {/* Full description with padding and max width */}
          <div className="flex justify-center my-12">
            <p className="normal-text mb-10 text orange-100">{project.fullDescription}</p>
          </div>

          {/* Render a single image centered below the text */}
          {project.images && project.images.length > 0 && (
            <div className="relative mx-auto w-full max-w-xl rounded-lg " key={0}>
              <Image alt={`${project.title} - Image 1`} layout="responsive" objectFit="cover" src={project.images[0]} />
            </div>
          )}

          {/* Repository button */}
          {project.repoUrl && (
            <div className="mt-8 text-center">
              <a
                className="inline-block px-6 py-3 border-2 border-orange-500 text-orange-500 font-medium text-sm leading-tight uppercase rounded-full hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                href={project.repoUrl}
                rel="noopener noreferrer"
                target="_blank">
                View Project
              </a>
            </div>
          )}
        </div>
      </div>
      <Footer className="bg-neutral-200" />
    </Page>
  );
});

export default ProjectDetails;
