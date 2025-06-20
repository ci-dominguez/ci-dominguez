import ArtAPI from '../assets/images/art_api.webp';
import Oxen from '../assets/images/oxen.webp';
import Vale from '../assets/images/vale.png';

export const PERSONAL_WORK = [
  {
    title: 'Art REST API with Key-Based Auth',
    image: ArtAPI,
    description:
      'A RESTful API for managing art collections, featuring key-based authentication and CRUD operations.',
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
    repo_url: 'https://github.com/cdom27',
  },
  {
    title: 'Construction Business Site with Admin CRM',
    image: Oxen,
    description:
      'A web application for managing construction projects, featuring an admin CRM for client management and project tracking.',
    stack: [
      'Spring Boot',
      'Java',
      'PostgreSQL',
      'Vite',
      'React',
      'TypeScript',
      'AWS',
      'S3',
      'CloudFront CDN',
      'Docker',
      'GitHub Actions',
    ],
    site_url: 'https://cidominguez.com',
    repo_url: 'https://github.com/cdom27',
  },
  {
    title: 'Subscription-Based Habit Tracker',
    image: Vale,
    description:
      'Something about the business value and the tech stack used to build it.',
    stack: [
      'Go',
      'Vite',
      'React',
      'TypeScript',
      'PostgreSQL',
      'GCP',
      'Cloud Run',
      'Docker',
      'GitHub Actions',
    ],
    site_url: 'https://cidominguez.com',
    repo_url: 'https://github.com/cdom27',
  },
];
