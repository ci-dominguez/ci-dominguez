import { useState } from 'react';
import { Link } from 'react-router';
import LinkButton from '../ui/link-button/link-button';
import { SOCIALS } from '../../lib/social-links';
import { LINKS } from '../../lib/nav-links';
import Logo from '../ui/icons/logo';
import { ListIcon, XIcon, ArrowSquareOutIcon } from '@phosphor-icons/react';

interface SiteLayoutProps {
  children: React.ReactNode;
}

const delayClasses = [
  'motion-delay-[550ms]',
  'motion-delay-[600ms]',
  'motion-delay-[650ms]',
  'motion-delay-[700ms]',
];

const SiteLayout = ({ children }: SiteLayoutProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header className='fixed z-40'>
        <div className='min-h-14 bg-btn-bg/70 backdrop-blur-[100px] shadow-header rounded-xl fixed inset-x-4 xs:inset-x-10 lg:inset-x-20 max-w-[1365px] mx-auto top-4 lg:top-10 z-50 py-3 px-5 flex items-center justify-between xl:justify-normal'>
          <Link
            to='/'
            aria-label='Cristian Dominguez Homepage'
            className='flex items-center gap-2'
          >
            <Logo className='size-6 fill-bg-light' />
            <span className='font-medium text-bg-light'>
              Cristian Dominguez
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className='hidden xl:block bg-bg-light/30 w-[2px] h-[20px] ml-5 mr-1' />

          <nav className='hidden xl:block'>
            <ul className='flex'>
              {LINKS.map((link, index) => {
                return (
                  <li key={index}>
                    <LinkButton to={link.href} type='internal' variant='ghost'>
                      <div className='bg-btn-bg border-[1px] border-btn-border rounded-sm p-1'>
                        {link.icon}
                      </div>
                      <span>{link.text}</span>
                    </LinkButton>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ul className='hidden xl:flex ml-auto'>
            {SOCIALS.map((s, index) => {
              return (
                <li key={index}>
                  <LinkButton to={s.href} type='external' variant='ghost'>
                    <span>
                      {s.text === 'cdom27@outlook.com' ? 'Email' : s.text}
                    </span>
                    <span className='sr-only'>(opens in a new tab)</span>
                    <ArrowSquareOutIcon
                      className='size-4 stroke-bg-dark'
                      aria-hidden='true'
                    />
                  </LinkButton>
                </li>
              );
            })}
          </ul>

          <button
            className='bg-btn-bg border-[1px] border-btn-border p-1 rounded-sm cursor-pointer xl:hidden'
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

        {/* Mobile menu and navigation */}
        {openMenu && (
          <div className='fixed inset-0 h-screen w-full xl:hidden'>
            <div className='absolute inset-0 bg-[conic-gradient(from_162.29deg_at_50%_50%,#bba67e_0deg,#000000_83.08deg,#2b261d_257.88deg,#5e5440_299.42deg,#bba67e_360deg)]' />
            <div className='absolute inset-0 backdrop-blur-[100px] bg-bg-light/10' />
            <div className='absolute inset-x-4 xs:inset-x-10 lg:inset-x-20 max-w-[1365px] top-32 flex flex-col z-10 gap-12 text-bg-light'>
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
                        <li key={index}>
                          <LinkButton
                            to={link.href}
                            type='internal'
                            variant='default'
                          >
                            <div className='bg-btn-bg border-[1px] border-btn-border rounded-sm p-1'>
                              {link.icon}
                            </div>
                            <span>{link.text}</span>
                          </LinkButton>
                        </li>
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
                  {SOCIALS.map((s, index) => {
                    return (
                      <li key={index}>
                        <LinkButton
                          to={s.href}
                          type='external'
                          variant='default'
                        >
                          <span>{s.text}</span>
                          <span className='sr-only'>(opens in a new tab)</span>
                          <ArrowSquareOutIcon
                            className='size-4 stroke-bg-dark'
                            aria-hidden='true'
                          />
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

      <footer className='px-4 xs:px-10 lg:px-20 w-full max-w-[1365px] mx-auto pb-28 flex flex-col xl:flex-row xl:justify-between'>
        <Link
          to='/'
          className='flex items-center gap-2 self-start intersect-once intersect:motion-preset-slide-up motion-delay-500 motion-duration-1500'
        >
          <Logo className='size-6 fill-btn-bg' />
          <span className='font-semibold'>Cristian Dominguez</span>
        </Link>

        <p className='mt-2.5 xl:mt-0 self-start intersect-once intersect:motion-preset-slide-up motion-delay-500 motion-duration-1500'>
          I enjoy building things on the web.
        </p>

        <address className='flex flex-col gap-2 mt-8 xl:mt-0 xl:flex-row xl:gap-4 not-italic self-start'>
          <h4 className='font-semibold intersect-once intersect:motion-preset-slide-up motion-delay-500 motion-duration-1000'>
            Connect With Me
          </h4>
          <ul className='flex flex-col gap-2 xl:flex-row xl:gap-4 '>
            {SOCIALS.map((s, index) => {
              return (
                <li
                  key={index}
                  className={`self-start intersect-once intersect:motion-preset-fade motion-duration-1000 ${
                    delayClasses[index] || 'motion-delay-[900ms]'
                  }`}
                >
                  <a
                    href={s.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 hover:underline'
                  >
                    <span>{s.text}</span>
                    <ArrowSquareOutIcon
                      className='size-4 stroke-bg-dark'
                      aria-hidden='true'
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
