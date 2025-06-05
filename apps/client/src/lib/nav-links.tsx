import { CodeIcon, UserIcon, FileIcon } from '@phosphor-icons/react';

export const LINKS = [
  {
    text: 'Programming',
    href: '/',
    icon: <CodeIcon className='size-4 fill-bg-light' />,
  },
  {
    text: 'Me',
    href: '/about',
    icon: <UserIcon className='size-4 fill-bg-light' />,
  },
  {
    text: 'Resume',
    href: '/assets/cristian-dominguez-resume.pdf',
    icon: <FileIcon className='size-4 fill-bg-light' />,
  },
];

export const NAV_SOCIALS = [
  {
    text: 'GitHub',
    href: 'https://github.com/cdom27',
  },
  {
    text: 'LinkedIn',
    href: 'https://linkedin.com/in/cdom27/',
  },
  {
    text: 'Email',
    href: 'mailto:cdom27@outlook.com',
  },
];
