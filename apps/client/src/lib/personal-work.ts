import ArtAPI from '../assets/images/art_api.webp';
import Oxen from '../assets/images/oxen.webp';
import Vale from '../assets/images/vale.png';

export const PERSONAL_WORK = [
  {
    title: 'Art REST API with Key-Based Auth',
    image: ArtAPI,
    description:
      'A public REST API centered around artist metadata and artwork image assets, with secure key-based authentication and origin validation. Supports rate-limited access and CI/CD deployment on GCP.',
    stack: [
      'Express.js',
      'TypeScript',
      'PostgreSQL',
      'Drizzle',
      'GCP',
      'Cloud Run',
      'Cloud Storage',
      'Docker',
      'GitHub Actions',
    ],
    site_url: 'https://art.cidominguez.com',
    repo_url: 'https://github.com/cdom27/art-api',
  },
  {
    title: 'Construction Business Site with Admin CRM',
    image: Oxen,
    description:
      'A dual-purpose site for a construction company to showcase services and manage customer inquiries. Includes a lightweight CRM to track customer communication and assign appointments.',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Spring Boot',
      'Java',
      'JWTs',
      'PostgreSQL',
      'AWS',
      'EC2',
      'S3',
      'CloudFront',
    ],
    site_url: 'https://oxen.cidominguez.com',
    repo_url: 'https://github.com/cdom27/construction-business-site-with-crm',
  },
  {
    title: 'Subscription-Based Habit Tracker',
    image: Vale,
    description:
      'A responsive habit tracker with user authentication and Stripe-based subscriptions. Supports habit logging, progress tracking, and is optimized for mobile and desktop.',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Go',
      'Fiber',
      'PostgreSQL',
      'Clerk',
      'Stripe',
      'GCP',
      'Cloud Run',
      'Docker',
    ],
    site_url: 'https://vale.cidominguez.com',
    repo_url: 'https://github.com/cdom27/subscription-based-habit-tracker',
  },
];
