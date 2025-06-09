import SiteLayout from '../components/layouts/site-layout';
import Carousel from '../components/ui/carousel/carousel';
import { IMAGES } from '../lib/carousel-images';

const About = () => {
  return (
    <SiteLayout>
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
      </section>
    </SiteLayout>
  );
};

export default About;
