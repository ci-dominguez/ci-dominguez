import SiteLayout from '../components/layouts/site-layout';
import { AWOTD } from '../lib/awotd';
import { EXP } from '../lib/experience';
import { PERSONAL_WORK } from '../lib/personal-work';
import { PROJECTS } from '../lib/projects';
import { ArrowSquareOutIcon, SunHorizonIcon } from '@phosphor-icons/react';
import Me from '../assets/me.png';

const Landing = () => {
  return (
    <SiteLayout>
      <section className='bg-bg-dark text-bg-light py-28 lg:py-50'>
        <div className='px-4 xs:px-10 lg:px-20 w-full max-w-[1365px] mx-auto flex flex-col gap-14'>
          <div className='flex flex-col items-center gap-4'>
            <div className='flex gap-6 sm:self-start'>
              <img
                src={Me}
                alt='Cristian Dominguez'
                className='w-22 xs:w-32 sm:w-38 md:w-48 lg:w-30'
              />

              <h1 className='font-medium xs:hidden'>
                <span className='block text-base'>Full Stack</span>
                <span className='block text-3xl'>Software Developer</span>
              </h1>

              <div className='hidden xs:flex flex-col'>
                <h1 className='font-medium'>
                  <span className='block text-base sm:text-lg'>Full Stack</span>
                  <span className='block text-3xl sm:text-4xl md:text-5xl'>
                    Software Developer
                  </span>
                </h1>

                <p className='text-bg-light/40 text-xl mx-auto sm:mx-0 flex gap-2 items-center'>
                  <span>Based in San Diego, CA</span>
                  <SunHorizonIcon
                    className='size-6 hidden sm:flex'
                    aria-hidden='true'
                  />
                </p>
              </div>
            </div>

            <p className='text-bg-light/40 text-xl mx-auto flex gap-2 items-center xs:hidden'>
              <span>Based in San Diego, CA</span>
              <SunHorizonIcon className='size-6' aria-hidden='true' />
            </p>
          </div>

          <p className='max-w-[580px]'>
            Hi there ~<br /> <br /> As a developer, I&apos;m always
            experimenting with interesting tech. I primary work with Spring Boot
            with Java, React, Node, and TypeScript, but I&apos;ve grown quite
            fond of Go and Rust for personal backend use.
          </p>

          {/* TODO - Use art api instead of local metadata */}
          <article className='md:max-w-[500px] mx-auto lg:mx-0 lg:self-end lg:max-w-[400px]'>
            <h2 className='pb-2 opacity-70 sm:text-lg sm:text-center'>
              Artwork of The Day
            </h2>
            <figure className='flex flex-col'>
              <img
                src={AWOTD.image}
                alt={`Artwork titled ${AWOTD.title} by ${AWOTD.artist}`}
                className='pb-2'
              />
              <figcaption className='sm:mx-auto'>
                {AWOTD.title}, {AWOTD.artist} ({AWOTD.referred_year})
              </figcaption>
            </figure>
          </article>
        </div>
      </section>

      {/* TODO - Use db instead of local metadata */}
      <section className='flex flex-col px-4 xs:px-10 lg:px-20 py-28 lg:py-50 gap-14 lg:gap-30 w-full max-w-[1365px] mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-medium'>Programming</h2>

        <figure className='font-medium sm:max-w-[400px] sm:mx-auto'>
          <blockquote className='italic'>
            “We are what we repeatedly do. Excellence, then, is not an act, but
            a habit.”
          </blockquote>
          <figcaption className='text-right mt-2'>— Aristotle</figcaption>
        </figure>

        <section className='flex flex-col gap-8'>
          <h3 className='text-2xl sm:text-3xl font-medium'>Experience</h3>

          {EXP.map((exp) => {
            return (
              <article key={exp.company} className='max-w-[580px]'>
                <div className='flex items-center gap-2'>
                  <div
                    className='bg-bg-dark min-w-4 size-4'
                    aria-hidden='true'
                    role='presentation'
                  />
                  <h4 className='text-xl sm:text-2xl font-medium'>
                    {exp.company}
                  </h4>
                </div>

                <p className='pl-6'>
                  {exp.title} <br /> {exp.start} - {exp.end}
                </p>
                <ul className='list-disc pl-10 mt-2'>
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </section>

        <section className='flex flex-col gap-8'>
          <h3 className='text-2xl sm:text-3xl font-medium'>Personal Work</h3>

          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-8 md:gap-x-6'>
            {PERSONAL_WORK.map((work) => (
              <li key={work.title}>
                <article className='flex flex-col h-full gap-2'>
                  <figure>
                    <img
                      src={work.image}
                      alt={work.title}
                      className='w-full h-auto'
                    />
                    <figcaption className='text-xl sm:text-2xl font-medium mt-2'>
                      {work.title}
                    </figcaption>
                  </figure>

                  <p>{work.description}</p>

                  <ul className='pt-2 flex flex-wrap gap-2 md:mt-auto'>
                    {work.stack.map((tech) => (
                      <li
                        key={tech}
                        className='bg-btn-bg border-[1px] border-btn-border text-bg-light py-1 px-2.5 rounded-sm text-sm'
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
                        className='hover:underline flex items-center gap-2'
                        aria-label={`Visit live site for ${work.title}`}
                      >
                        <span>Visit</span>
                        <ArrowSquareOutIcon
                          className='size-4 stroke-bg-dark'
                          aria-hidden='true'
                        />
                      </a>
                    )}
                    <a
                      href={work.repo_url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:underline flex items-center gap-2'
                      aria-label={`View source code for ${work.title}`}
                    >
                      <span>View Code</span>
                      <ArrowSquareOutIcon
                        className='size-4 stroke-bg-dark'
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
          <h3 className='text-2xl sm:text-3xl font-medium'>Projects</h3>

          <ul className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-2 gap-y-8'>
            {PROJECTS.map((p) => (
              <li key={p.title}>
                <article key={p.title} className='flex flex-col h-full gap-2'>
                  <div className='flex items-center gap-2'>
                    <div
                      className='bg-bg-dark min-w-4 size-4'
                      aria-hidden='true'
                      role='presentation'
                    />
                    <a
                      href={p.repo_url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:underline flex items-center gap-2 text-xl sm:text-2xl'
                      aria-label={`View source code for ${p.title}`}
                    >
                      <span>{p.title}</span>
                      <ArrowSquareOutIcon
                        className='min-w-4 size-4 stroke-bg-dark'
                        aria-hidden='true'
                      />
                    </a>
                  </div>

                  <p className='pl-6'>{p.description}</p>

                  <ul className='pt-2 flex flex-wrap gap-2 pl-6 md:mt-auto'>
                    {p.stack.map((tech) => (
                      <li
                        key={tech}
                        className='bg-btn-bg border-btn-border text-bg-light py-1 sm:py-1.5 px-2.5 sm:px-3 rounded-sm text-sm'
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
