import SiteLayout from "../components/layouts/site-layout";
import { AWOTD } from "../lib/awotd";
import Me from "../assets/me.png";
import Sun from "../assets/sun.svg";

const Landing = () => {
  return (
    <SiteLayout>
      <section className='bg-bg-dark text-text-white flex flex-col px-4 py-28 gap-14'>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex gap-6'>
            <img src={Me} alt='Cristian Dominguez' className='w-22' />

            <h1 className='flex flex-col font-medium'>
              <span className='text-base'>Full Stack</span>
              <span className='text-3xl'>Software Developer</span>
            </h1>
          </div>

          <p className='text-text-white/40 text-xl mx-auto flex gap-2'>
            <span>Based in San Diego, CA</span>
            <img src={Sun} alt='Sunrise' className='w-6' />
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
          <h4 className='pb-2'>Artwork of The Day</h4>
          <figure>
            <img src={AWOTD.image} alt={AWOTD.title} className='pb-2' />
            <figcaption>
              {AWOTD.title}, {AWOTD.artist} ({AWOTD.referred_year})
            </figcaption>
          </figure>
        </article>
      </section>
    </SiteLayout>
  );
};

export default Landing;
