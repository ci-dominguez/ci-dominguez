import { useState } from 'react';
import { Link } from 'react-router';
import LinkButton from '../ui/link-button/link-button';
import { SOCIALS } from '../../lib/social-links';
import { LINKS, NAV_SOCIALS } from '../../lib/nav-links';
import Logo from '../ui/icons/logo';
import { ListIcon, XIcon, ArrowSquareOutIcon } from '@phosphor-icons/react';

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header className='fixed inset-0 z-40'>
        <div className='bg-btn-bg/70 backdrop-blur-[100px] shadow-header rounded-xl fixed inset-x-4 top-4 z-50 py-3 px-5 flex items-center justify-between'>
          <Link
            to='/'
            aria-label='Cristian Dominguez Homepage'
            className='flex items-center gap-2'
          >
            <Logo className='size-6 fill-bg-light' />
            <span className='font-semibold text-bg-light'>
              Cristian Dominguez
            </span>
          </Link>

          <button
            className='bg-btn-bg border-btn-border p-1 rounded-sm cursor-pointer'
            onClick={() => setOpenMenu(!openMenu)}
            aria-label='Toggle menu'
            aria-expanded={openMenu}
          >
            {openMenu ? (
              <XIcon className='size-6 fill-bg-light' />
            ) : (
              <ListIcon className='size-6 fill-bg-light' />
            )}
          </button>
        </div>

        {openMenu && (
          <div className='relative h-screen w-full'>
            <div className='absolute inset-0 bg-[conic-gradient(from_162.29deg_at_50%_50%,#bba67e_0deg,#000000_83.08deg,#2b261d_257.88deg,#5e5440_299.42deg,#bba67e_360deg)]' />
            <div className='absolute inset-0 backdrop-blur-[100px] bg-bg-light/10' />
            <div className='absolute inset-x-4 top-32 flex flex-col z-10 gap-12 text-bg-light'>
              <section
                className='flex flex-col gap-2'
                aria-labelledby='nav-heading'
              >
                <h2 id='nav-heading' className='text-lg text-bg-light'>
                  Navigate
                </h2>
                <nav>
                  <ul className='flex flex-wrap gap-2'>
                    {LINKS.map((link, index) => {
                      return (
                        <LinkButton
                          key={index}
                          to={link.href}
                          type='internal'
                          variant='default'
                        >
                          <div className='bg-btn-bg border-btn-border rounded-sm p-1'>
                            {link.icon}
                          </div>
                          <span>{link.text}</span>
                        </LinkButton>
                      );
                    })}
                  </ul>
                </nav>
              </section>

              <section
                className='flex flex-col gap-2'
                aria-labelledby='connect-heading'
              >
                <h2 id='connect-heading' className='text-lg text-bg-light'>
                  Connect
                </h2>
                <ul className='flex flex-wrap gap-2'>
                  {NAV_SOCIALS.map((s, index) => {
                    return (
                      <li key={index}>
                        <LinkButton
                          to={s.href}
                          type='external'
                          variant='default'
                        >
                          <span>{s.text}</span>
                          <span className='sr-only'>(opens in a new tab)</span>
                          <ArrowSquareOutIcon className='size-4 stroke-bg-dark' />
                        </LinkButton>
                      </li>
                    );
                  })}
                </ul>
              </section>

              <p className='lg:hidden'>
                Cursor options are disabled on mobile devices.
              </p>

              {/* TODO - Create cursor options for desktop */}
              <div className='hidden lg:flex'>
                <span>cursor options will go here</span>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className='min-h-screen scroll-smooth'>{children}</main>

      <footer className='px-4 pb-28'>
        <Link to='/' className='flex items-center gap-2'>
          <Logo className='size-6 fill-btn-bg' />
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
                    <ArrowSquareOutIcon className='size-4 stroke-bg-dark' />
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
