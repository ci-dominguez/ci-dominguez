import { ArrowSquareOutIcon } from '@phosphor-icons/react';
import Meta from '../components/seo/meta';
import SiteLayout from '../components/layouts/site-layout';
import Carousel from '../components/ui/carousel/carousel';
import FAQCard, {
  FAQCardBody,
  FAQCardHeading,
  FAQCardList,
} from '../components/ui/faq-card/faq-card';
import { IMAGES } from '../lib/carousel-images';

const About = () => {
  return (
    <SiteLayout>
      <Meta
        title='Cristian Dominguez, Personal Life'
        description='Lean more about what drives Cristian as a developer, his journey into programming, and his educational background as a Software Developer based in San Diego, CA.'
        canonicalUrl='https://cidominguez.com/about'
      />
      <section className='py-28 lg:py-50 px-4 xs:px-10 lg:px-20 w-full max-w-[1365px] mx-auto flex flex-col gap-14'>
        <h1 className='font-medium'>
          <span className='block text-base sm:text-lg motion-delay-200 motion-preset-fade motion-duration-2000'>
            Hey again,
          </span>
          <span className='block text-3xl sm:text-4xl md:text-5xl motion-delay-100 motion-preset-fade motion-duration-2000'>
            I&apos;m Cristian. Thanks for dropping by!
          </span>
        </h1>

        <Carousel images={IMAGES} autoPlaySpeed={5000} />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
          <FAQCard>
            <FAQCardHeading level='h2'>Where I&apos;ve studied</FAQCardHeading>
            <FAQCardBody>
              I&apos;m currently a senior at Western Governors University,
              finishing up my <b>B.S. in Software Engineering</b>. Before that,
              I earned an A.S. in Web Development from San Diego Mesa College.
              School gave me a foundation, but most of my learning has come from
              building, breaking, and rebuilding on my own time.
            </FAQCardBody>
            <FAQCardList
              itemContent={[
                <>
                  B.S Sofware Engineer, <i>Western Govenors University</i>
                </>,
                <>
                  A.S. Web Development, <i>San Diego Mesa College</i>
                </>,
              ]}
            />
          </FAQCard>

          <FAQCard>
            <FAQCardHeading level='h2'>
              What kind of developer are you?
            </FAQCardHeading>
            <FAQCardBody>
              I work full-stack but have found myself leaning more into backend
              development lately. I&apos;m big on systems that make sense, APIs
              that are a pleasure to use, and logic that holds up under
              pressure. Right now, I&apos;m building something called{' '}
              <a
                href='https://art.cidominguez.com'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold inline-flex items-center gap-2 hover:underline hover:text-link-active transition-all duration-300 group'
              >
                <span>The Art API</span>
                <ArrowSquareOutIcon
                  className='size-4 stroke-bg-dark group-hover:motion-preset-seesaw motion-loop-once motion-duration-500 motion-delay-200'
                  aria-hidden='true'
                />
              </a>
              , which pulls together public domain data about artists and their
              work into a developer-friendly API. It&apos;s taught me a lot
              about QA, testing, and delivering something useful from scratch.
            </FAQCardBody>
          </FAQCard>

          <FAQCard>
            <FAQCardHeading level='h2'>
              How did you get into programming?
            </FAQCardHeading>
            <FAQCardBody>
              It all started in 6th grade with a janky Minecraft server and some
              very questionable Java code. My server plugins didn&apos;t work
              very well—but it opened a door. Ever since then, I&apos;ve been
              hooked on building things with logic, persistence, and just enough
              caffeine.
            </FAQCardBody>
          </FAQCard>

          <FAQCard>
            <FAQCardHeading level='h2'>
              What do you outside of programming?
            </FAQCardHeading>
            <FAQCardBody>
              On my free time I enjoy repairing and reselling used or broken
              electronics and computer hardware like GPUs, CPUs, Phones, and
              Monitors. I enjoy the process of taking something non-functional
              and giving it a second life. It honestly scratches the same itch
              as coding: solving problems and making things work better than
              before.
            </FAQCardBody>
          </FAQCard>

          <FAQCard>
            <FAQCardHeading level='h2'>On a personal note...</FAQCardHeading>
            <FAQCardBody>
              I live in San Diego, CA with a calico named Peanut, who turns one
              in July, my girlfriend&apos;s tortie, Paddles, and a dog named
              Flynn. When I&apos;m not coding, I&apos;m probably watching a
              horror flick (or rewatching one), on a dog walk, or obsessing over
              creating the perfect Spotify playlist. <br /> <br /> Have a
              question or interested in connecting? Let's do it ⬇️
            </FAQCardBody>
          </FAQCard>
        </div>
      </section>
    </SiteLayout>
  );
};

export default About;
