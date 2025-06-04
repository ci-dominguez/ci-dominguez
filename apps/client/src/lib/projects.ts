export const PROJECTS = [
  {
    title: 'Encrypted Desktop Password Manager',
    description:
      'It features a simple GUI interface and uses a master password to encrypt and decrypt stored credentials. Master password hashing is handled with PBKDF2, while AES encryption secures service credentials.',
    stack: ['Java', 'Swing', 'JCE', 'PBKDF2', 'AES'],
    repo_url: 'https://github.com/cdom27',
  },
  {
    title: 'Expense Tracking Discord Bot',
    description:
      'A Discord bot that helps users track their expenses and manage their budgets.',
    stack: [
      'TypeScript',
      'Bun.js',
      'Prisma',
      'Discord.js',
      'PostgreSQL',
      'Fly.io',
    ],
    repo_url: 'https://github.com/cdom27',
  },
  {
    title: 'Bluesky Music Review Bot',
    description:
      'A bot that posts music reviews on Bluesky. Uses Pitchfork RSS feeds and the Spoify Web API to fetch and post reviews.',
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Drizzle', 'Fly.io'],
    repo_url: 'https://github.com/cdom27',
  },
];
