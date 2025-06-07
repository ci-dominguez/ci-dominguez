import SiteLayout from '../components/layouts/site-layout';

const Error = () => {
  return (
    <SiteLayout>
      <section className='bg-bg-dark text-bg-light py-28 lg:py-50'>
        <div className='px-4 xs:px-10 lg:px-20 w-full max-w-[1365px] mx-auto flex flex-col gap-14'>
          <h1>404</h1>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Error;
