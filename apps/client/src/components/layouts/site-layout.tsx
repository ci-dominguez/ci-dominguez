import { Link } from 'react-router';
import Logo from '../../assets/logo.svg';
import ExternalLink from '../../assets/link.svg';
import { SOCIALS } from '../../lib/social-links';

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <>
      {/* <header className='px-4 py-4'>
        <nav>Start</nav>
      </header> */}
      <main className='min-h-screen scroll-smooth'>{children}</main>

      <footer className='px-4 pb-28'>
        <Link to='/' className='flex items-center gap-2'>
          <img src={Logo} alt='Logo' className='size-6' />
          <span className='font-semibold'>Cristian Dominguez</span>
        </Link>

        <p className='mt-2.5'>I enjoy building things on the web.</p>

        <address className='flex flex-col gap-2 mt-8 not-italic'>
          <h4 className='font-semibold'>Connect With Me</h4>
          <ul className='flex flex-col gap-2'>
            {SOCIALS.map((s, index) => {
              return (
                <li key={index} className='self-start'>
                  <a
                    href={s.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 hover:underline'
                  >
                    <span>{s.text}</span>
                    <img
                      src={ExternalLink}
                      alt=''
                      aria-hidden='true'
                      className='w-4'
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </address>
      </footer>
    </>
  );
};

export default SiteLayout;
