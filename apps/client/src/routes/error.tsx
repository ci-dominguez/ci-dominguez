import Meta from '../components/seo/meta';
import SiteLayout from '../components/layouts/site-layout';
import LostCat from '../assets/images/lost_cat.webp';

const Error = () => {
  return (
    <SiteLayout>
      <Meta
        title='404, Page Not Found'
        description='The page you are looking for does not exist.'
        canonicalUrl='https://cidominguez.com/'
      />

      <section className='py-28 lg:py-50 px-4 xs:px-10 lg:px-20 w-full max-w-[1365px] mx-auto flex flex-col gap-14'>
        <h1 className='font-medium'>
          <span className='block text-base sm:text-lg motion-delay-200 motion-preset-fade motion-duration-2000'>
            Uh oh...
          </span>
          <span className='block text-3xl sm:text-4xl md:text-5xl motion-delay-100 motion-preset-fade motion-duration-2000'>
            Let&apos;s get you to the right place.
          </span>
        </h1>

        <img
          src={LostCat}
          alt='A lost cat walking though a busy street'
          className='w-full h-auto motion-preset-slide-up motion-delay-300 motion-duration-700'
        />
      </section>
    </SiteLayout>
  );
};

export default Error;
