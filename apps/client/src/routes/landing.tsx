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
      <section className='bg-bg-dark text-text-white flex flex-col px-4 py-28 gap-14'>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex gap-6'>
            <img src={Me} alt='Cristian Dominguez' className='w-22' />

            <h1 className='font-medium'>
              <span className='block text-base'>Full Stack</span>
              <span className='block text-3xl'>Software Developer</span>
            </h1>
          </div>

          <p className='text-text-white/40 text-xl mx-auto flex gap-2 items-center'>
            <span>Based in San Diego, CA</span>
            <SunHorizonIcon className='size-6' aria-hidden='true' />
          </p>
        </div>

        <p>
          Hi there ~<br /> <br /> As a developer, I&apos;m always experimenting
          with interesting tech. I primary work with Spring Boot with Java,
          React, Node, and TypeScript, but I&apos;ve grown quite fond of Go and
          Rust for personal backend use.
        </p>

        {/* TODO - Use art api instead of local metadata */}
        <article>
          <h2 className='pb-2'>Artwork of The Day</h2>
          <figure>
            <img
              src={AWOTD.image}
              alt={`Artwork titled ${AWOTD.title} by ${AWOTD.artist}`}
              className='pb-2'
            />
            <figcaption>
              {AWOTD.title}, {AWOTD.artist} ({AWOTD.referred_year})
            </figcaption>
          </figure>
        </article>
      </section>

      {/* TODO - Use db instead of local metadata */}
      <section className='flex flex-col px-4 py-28 gap-14'>
        <h2 className='text-3xl font-medium'>Programming</h2>
        <figure className='font-medium'>
          <blockquote className='italic'>
            “We are what we repeatedly do. Excellence, then, is not an act, but
            a habit.”
          </blockquote>
          <figcaption className='text-right mt-2'>— Aristotle</figcaption>
        </figure>

        <section className='flex flex-col gap-8'>
          <h3 className='text-2xl font-medium'>Experience</h3>

          {EXP.map((exp) => {
            return (
              <article key={exp.company}>
                <div className='flex items-center gap-2'>
                  <div
                    className='bg-bg-dark min-w-4 size-4'
                    aria-hidden='true'
                    role='presentation'
                  />
                  <h4 className='text-xl font-medium'>{exp.company}</h4>
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
          <h3 className='text-2xl font-medium'>Personal Work</h3>

          {PERSONAL_WORK.map((work) => (
            <article key={work.title} className='flex flex-col gap-2'>
              <figure>
                <img
                  src={work.image}
                  alt={work.title}
                  className='w-full h-auto'
                />
                <figcaption className='text-xl font-medium mt-2'>
                  {work.title}
                </figcaption>
              </figure>

              <p>{work.description}</p>

              <ul className='mt-2 flex flex-wrap gap-2'>
                {work.stack.map((tech) => (
                  <li
                    key={tech}
                    className='bg-btn-bg border-btn-border text-text-white py-1 px-2.5 rounded-md text-sm'
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className='flex gap-6 mt-2'>
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
          ))}
        </section>

        <section className='flex flex-col gap-8'>
          <h3 className='text-2xl font-medium'>Projects</h3>

          {PROJECTS.map((p) => (
            <article key={p.title} className='flex flex-col gap-2'>
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
                  className='hover:underline flex items-center gap-2 text-xl'
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

              <ul className='mt-2 flex flex-wrap gap-2 pl-6'>
                {p.stack.map((tech) => (
                  <li
                    key={tech}
                    className='bg-btn-bg border-btn-border text-text-white py-1 px-2.5 rounded-md text-sm'
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </section>
    </SiteLayout>
  );
};

export default Landing;
