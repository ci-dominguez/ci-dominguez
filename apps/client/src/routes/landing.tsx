import { useEffect, useState } from 'react';
import useArtwork from '../hooks/use-artwork';
import Meta from '../components/seo/meta';
import SiteLayout from '../components/layouts/site-layout';
import { EXP } from '../lib/experience';
import { PERSONAL_WORK } from '../lib/personal-work';
import { PROJECTS } from '../lib/projects';
import { ArrowSquareOutIcon, SunHorizonIcon } from '@phosphor-icons/react';
import Me from '../assets/images/me.webp';
import Lightbox from 'yet-another-react-lightbox';
import { Captions } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';

const delayClasses = [
  'motion-delay-[600ms]',
  'motion-delay-[700ms]',
  'motion-delay-[800ms]',
  'motion-delay-[900ms]',
  'motion-delay-[1000ms]',
  'motion-delay-[1100ms]',
];

const Landing = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { fetchAndEnrichArtwork, artwork, isLoading } = useArtwork();
  const [slides, setSlides] = useState([
    {
      src: '',
      title: '',
      description: '',
    },
  ]);

  useEffect(() => {
    fetchAndEnrichArtwork();
  }, []);

  // update slide when artwork is defined
  useEffect(() => {
    if (artwork) {
      setSlides([
        {
          src: artwork.fullImageUrl,
          title: artwork.title,
          description: `Made by ${artwork.artist} in ${artwork.inferredYear}. Medium: ${artwork.medium}.`,
        },
      ]);
    }
  }, [artwork]);

  return (
    <SiteLayout>
      <Meta
        title='Cristian Dominguez, Software Developer'
        description={`Portfolio of Cristian Dominguez, a full stack Software Developer based in San Diego, CA. View his professional experience, personal work, and side projects.`}
        canonicalUrl='https://cidominguez.com/'
      />

      <section className='bg-bg-dark text-bg-light py-28 lg:py-50'>
        <div className='px-4 xs:px-10 lg:px-20 w-full max-w-[1365px] mx-auto flex flex-col gap-14'>
          <div className='flex flex-col items-center gap-4'>
            <div className='flex gap-6 sm:self-start'>
              <img
                src={Me}
                alt='Cristian Dominguez'
                className='w-22 xs:w-32 sm:w-38 md:w-48 lg:w-30 motion-preset-blur-right motion-duration-1000'
              />

              <h1 className='text-base font-medium xs:hidden'>
                <span className='block text-base motion-delay-200 motion-preset-fade motion-duration-1000'>
                  Full Stack
                </span>
                <span className='block text-3xl motion-preset-fade motion-duration-1000'>
                  Software Developer
                </span>
              </h1>

              <div className='hidden xs:flex flex-col'>
                <h1 className='text-base font-medium'>
                  <span className='block text-base sm:text-lg motion-delay-200 motion-preset-fade motion-duration-2000'>
                    Full Stack
                  </span>
                  <span className='block text-3xl sm:text-4xl md:text-5xl motion-delay-100 motion-preset-fade motion-duration-2000'>
                    Software Developer
                  </span>
                </h1>

                <p className='text-bg-light/40 text-xl mx-auto sm:mx-0 flex gap-2 items-center'>
                  <span className='motion-delay-500 motion-preset-fade motion-duration-2000'>
                    Based in San Diego, CA
                  </span>
                  <SunHorizonIcon
                    className='size-6 hidden sm:flex motion-preset-slide-up motion-delay-1000'
                    aria-hidden='true'
                  />
                </p>
              </div>
            </div>

            <p className='text-bg-light/40 text-xl mx-auto flex gap-2 items-center xs:hidden'>
              <span className='motion-delay-500 motion-preset-fade motion-duration-2000'>
                Based in San Diego, CA
              </span>
              <SunHorizonIcon
                className='size-6 motion-preset-slide-up motion-delay-1000'
                aria-hidden='true'
              />
            </p>
          </div>

          <div>
            <h2 className='text-3xl sm:text-4xl font-medium motion-preset-slide-down motion-delay-100 motion-duration-1000'>
              Hey, I'm Cristian{' '}
              <span className='motion-preset-wobble motion-loop-twice motion-duration-[0.50s]/rotate motion-delay-1000 inline-block'>
                👋
              </span>
            </h2>
            <p className='max-w-[590px] pt-6 motion-delay-500 motion-preset-slide-up motion-preset-fade motion-duration-1500'>
              A developer who builds with Java, React, Node, SQL, and
              TypeScript. On the side, I mess around with Go and Rust while
              hunting down the best matcha and milk tea spots in San Diego.
              I&apos;m big on clean abstractions, strong typing, and finding
              tech that just <i>feels right</i>.
            </p>
          </div>

          <article className='md:max-w-[500px] mx-auto lg:mx-0 lg:self-end lg:max-w-[370px]'>
            <h3 className='pb-2 sm:text-lg sm:text-center motion-preset-slide-up motion-delay-500 motion-duration-1500'>
              <span className='opacity-70'>
                Random artwork, courtesy of the{' '}
              </span>
              <a
                href='https://art.cidominguez.com'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold inline-flex items-center gap-2 opacity-70 hover:opacity-100 hover:underline hover:text-[#FFFF00] transition-all duration-300'
              >
                <span>Art API</span>
                <ArrowSquareOutIcon className='size-4 stroke-bg-dark group-hover:motion-preset-seesaw motion-loop-once motion-duration-500 motion-delay-200' />
              </a>
            </h3>

            {isLoading || !artwork ? (
              <div className='animate-pulse space-y-2 max-w-[370px] h-[370px'>
                <div className='w-full lg:w-[370px] aspect-square bg-neutral-700 motion-preset-slide-up motion-delay-700 motion-duration-1000' />
                <div className='w-full lg:w-full mx-auto h-4 bg-neutral-600 motion-preset-slide-up motion-delay-1000 motion-duration-1000' />
                <div className='w-5/6 mx-auto h-4 bg-neutral-600 motion-preset-slide-up motion-delay-1000 motion-duration-1000' />
              </div>
            ) : (
              <figure className='flex flex-col space-y-2 max-w-[370px]'>
                <button
                  className='group hover:cursor-pointer'
                  onClick={() => setIsLightboxOpen(true)}
                >
                  <img
                    src={artwork.thumbnailImageUrl}
                    alt={`Artwork titled ${artwork.title} by ${artwork.artist}`}
                    className='w-full max-h-[370px] aspect-square object-cover motion-preset-fade motion-duration-1000 group-hover:scale-105 group-hover:transition-all group-hover:duration-150'
                  />
                </button>
                <figcaption className='sm:mx-auto motion-preset-fade motion-delay-300 motion-duration-1000 text-center'>
                  {artwork.title}, {artwork.artist} ({artwork.inferredYear})
                </figcaption>
              </figure>
            )}
          </article>
        </div>
      </section>

      <Lightbox
        open={isLightboxOpen}
        close={() => {
          setIsLightboxOpen(false);
        }}
        slides={slides}
        controller={{
          closeOnPullUp: true,
          closeOnPullDown: true,
          closeOnBackdropClick: true,
          disableSwipeNavigation: true,
        }}
        styles={{
          captionsTitle: {
            textAlign: 'center',
            fontWeight: 'normal',
            fontFamily: 'var(--font-family-sans)',
          },
          captionsDescription: {
            textAlign: 'center',
            fontWeight: 'normal',
            fontFamily: 'var(--font-family-sans)',
          },
        }}
        plugins={[Captions]}
        captions={{ showToggle: true }}
      />

      <section
        className='flex flex-col px-4 xs:px-10 lg:px-20 py-28 lg:py-50 gap-14 lg:gap-30 w-full max-w-[1365px] mx-auto'
        aria-label='programming-heading'
      >
        <h2
          id='programming-heading'
          className='hidden text-3xl sm:text-4xl font-medium intersect-once intersect:motion-preset-slide-down motion-delay-300 motion-duration-1000'
        >
          Programming
        </h2>

        <figure className='text-xl sm:max-w-[400px] xl:max-w-[600px] sm:mx-auto'>
          <blockquote className='italic intersect-once intersect:motion-preset-expand motion-delay-300'>
            “We are what we repeatedly do. Excellence, then, is not an act, but
            a habit.”
          </blockquote>
          <figcaption className='text-right mt-2 intersect-once intersect:motion-preset-expand motion-delay-500'>
            — Aristotle
          </figcaption>
        </figure>

        <section className='flex flex-col gap-8'>
          <h3 className='text-2xl sm:text-3xl font-medium intersect-once intersect:motion-preset-slide-down motion-delay-400 motion-duration-1000'>
            Experience
          </h3>

          {EXP.map((exp) => {
            return (
              <article key={exp.company} className='max-w-[525px]'>
                <div className='flex items-center gap-2'>
                  <div
                    className='bg-bg-dark min-w-4 size-4 intersect-once intersect:motion-preset-fade motion-delay-300 motion-duration-1000'
                    aria-hidden='true'
                    role='presentation'
                  />
                  <h4 className='text-xl sm:text-2xl font-medium intersect-once intersect:motion-preset-fade motion-delay-[400ms] motion-duration-1000'>
                    {exp.company}
                  </h4>
                </div>

                <p className='pl-6 intersect-once intersect:motion-preset-fade motion-delay-[500ms] motion-duration-1000'>
                  {exp.title} <br /> {exp.start} - {exp.end}
                </p>
                <ul className='list-disc pl-10 mt-2'>
                  {exp.responsibilities.map((resp, index) => {
                    return (
                      <li
                        key={index}
                        className={`intersect-once intersect:motion-preset-fade motion-duration-1000 ${
                          delayClasses[index] || 'motion-delay-[900ms]'
                        }`}
                      >
                        {resp}
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </section>

        <section className='flex flex-col gap-8'>
          <h3 className='text-2xl sm:text-3xl font-medium intersect-once intersect:motion-preset-slide-down motion-delay-400 motion-duration-1000'>
            Personal Work
          </h3>

          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-8 md:gap-x-6 xl:gap-16'>
            {PERSONAL_WORK.map((work) => (
              <li key={work.title}>
                <article className='flex flex-col h-full gap-2'>
                  <figure>
                    <img
                      src={work.image}
                      alt={work.title}
                      className='w-full h-auto intersect-once intersect:motion-preset-blur-right motion-duration-1000'
                    />
                    <figcaption className='text-xl sm:text-2xl font-medium mt-2 intersect-once intersect:motion-preset-fade motion-duration-1000 motion-delay-[400ms]'>
                      {work.title}
                    </figcaption>
                  </figure>

                  <p className='intersect-once intersect:motion-preset-fade motion-duration-2000 motion-delay-500'>
                    {work.description}
                  </p>

                  <ul className='pt-2 flex flex-wrap gap-2 md:mt-auto'>
                    {work.stack.map((tech) => (
                      <li
                        key={tech}
                        className='bg-btn-bg border-[1px] border-btn-border text-bg-light py-1 px-2.5 rounded-sm text-sm intersect-once intersect:motion-preset-fade motion-delay-[600ms] motion-duration-2000'
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className='flex gap-6 pt-2'>
                    {work.site_url && (
                      <a
                        href={work.site_url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:underline flex items-center gap-2 intersect-once intersect:motion-preset-fade motion-delay-700 motion-duration-2000 hover:text-link-active transition-all duration-300 group'
                        aria-label={`Visit live site for ${work.title}`}
                      >
                        <span>Visit</span>
                        <ArrowSquareOutIcon
                          className='size-4 stroke-bg-dark group-hover:motion-preset-seesaw motion-loop-once motion-duration-500 motion-delay-200'
                          aria-hidden='true'
                        />
                      </a>
                    )}
                    <a
                      href={work.repo_url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:underline flex items-center gap-2 intersect-once intersect:motion-preset-fade motion-delay-[800ms] motion-duration-2000 hover:text-link-active transition-all duration-300 group'
                      aria-label={`View source code for ${work.title}`}
                    >
                      <span>View Code</span>
                      <ArrowSquareOutIcon
                        className='size-4 stroke-bg-dark group-hover:motion-preset-seesaw motion-loop-once motion-duration-500 motion-delay-200'
                        aria-hidden='true'
                      />
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className='flex flex-col gap-8'>
          <h3 className='text-2xl sm:text-3xl font-medium intersect-once intersect:motion-preset-slide-down motion-delay-400 motion-duration-1000'>
            Projects
          </h3>

          <ul className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-2 gap-y-8 xl:gap-16'>
            {PROJECTS.map((p) => (
              <li key={p.title}>
                <article key={p.title} className='flex flex-col h-full gap-2'>
                  <div className='flex items-center gap-2'>
                    <div
                      className='bg-bg-dark min-w-4 size-4 intersect-once intersect:motion-preset-fade motion-delay-300 motion-duration-1000'
                      aria-hidden='true'
                      role='presentation'
                    />
                    <a
                      href={p.repo_url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:underline flex items-center gap-2 text-xl sm:text-2xl intersect-once intersect:motion-preset-fade motion-duration-1000 motion-delay-[400ms] hover:text-link-active transition-all duration-300 group'
                      aria-label={`View source code for ${p.title}`}
                    >
                      <span>{p.title}</span>
                      <ArrowSquareOutIcon
                        className='min-w-4 size-4 stroke-bg-dark group-hover:motion-preset-seesaw motion-loop-once motion-duration-500 motion-delay-200'
                        aria-hidden='true'
                      />
                    </a>
                  </div>

                  <p className='pl-6 intersect-once intersect:motion-preset-fade motion-duration-2000 motion-delay-500'>
                    {p.description}
                  </p>

                  <ul className='pt-2 flex flex-wrap gap-2 pl-6 md:mt-auto'>
                    {p.stack.map((tech) => (
                      <li
                        key={tech}
                        className='bg-btn-bg border-btn-border text-bg-light py-1 sm:py-1.5 px-2.5 sm:px-3 rounded-sm text-sm intersect-once intersect:motion-preset-fade motion-delay-[600ms] motion-duration-2000'
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </SiteLayout>
  );
};

export default Landing;
