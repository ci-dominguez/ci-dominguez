import type { CarouselImage } from '../lib/types/carousel-image';
import PeanutYawn from '../assets/images/peanut_1.webp';
import Flynn from '../assets/images/flynn.webp';
import PeanutStare from '../assets/images/peanut_2.webp';
import Paddles from '../assets/images/paddles.webp';
import GiraffeMobile from '../assets/images/giraffe_mobile.webp';
import TurtleMobile from '../assets/images/turtle_mobile.webp';
import FlamingoMobile from '../assets/images/flamingo_mobile.webp';
import Giraffe from '../assets/images/giraffe.webp';
import Turtle from '../assets/images/turtle.webp';
import Flamingo from '../assets/images/flamingo.webp';

const BASE_IMAGES: CarouselImage[] = [
  {
    src: PeanutYawn,
    alt: 'Peanut the cat having a big yawn by the window',
    caption: "Peanut's famous yawn",
  },
  {
    src: Flynn,
    alt: 'Flynn the puppy all cozy after bath time',
    caption: "Baby Flynn's peaceful nap while driving to Shake Shack",
  },
  {
    src: PeanutStare,
    alt: 'Peanut showing off those stunning green eyes',
    caption: 'Peanut with her adorable flower cone post-spay 🌼',
  },
  {
    src: Paddles,
    alt: 'Paddles the cat cuddling with a favorite stuffed lion',
    caption: 'Paddles chilling with her best friend 🦁',
  },
];

const MOBILE_ZOO_IMAGES: CarouselImage[] = [
  {
    src: GiraffeMobile,
    alt: 'Majestic giraffes showing their beautiful spotted patterns',
    caption: 'Giraffes (my fav animal) at the San Diego Zoo!',
  },
  {
    src: TurtleMobile,
    alt: 'A spotted turtle gliding through crystal clear water',
    caption: 'Turtle (aka Todd) going for a swim at the Zoo',
  },
  {
    src: FlamingoMobile,
    alt: 'Beautiful pink flamingos standing gracefully in their natural habitat',
    caption: 'Flamingos are funny-looking lol',
  },
];

const DESKTOP_ZOO_IMAGES: CarouselImage[] = [
  {
    src: Giraffe,
    alt: 'Majestic giraffes showing their beautiful spotted patterns',
    caption: 'Giraffes (my fav animal) at the San Diego Zoo!',
  },
  {
    src: Turtle,
    alt: 'A spotted turtle gliding through crystal clear water',
    caption: 'Turtle (aka Todd) going for a swim at the Zoo',
  },
  {
    src: Flamingo,
    alt: 'Beautiful pink flamingos standing gracefully in their natural habitat',
    caption: 'Flamingos are funny-looking lol',
  },
];

export const IMAGES: CarouselImage[] = [
  ...BASE_IMAGES,
  ...DESKTOP_ZOO_IMAGES,
  ...MOBILE_ZOO_IMAGES,
];
