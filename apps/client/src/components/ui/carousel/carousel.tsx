import { useState, useEffect, useCallback, useRef } from 'react';
import type { CarouselImage } from '../../../lib/types/carousel-image';

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlaySpeed?: number;
  className?: string;
}

export default function ImageCarousel({
  images,
  autoPlaySpeed = 4000,
  className = '',
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isGalleryMode, setIsGalleryMode] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const currentIndexRef = useRef(currentIndex);
  const isPausedRef = useRef(isPaused);
  const isTransitioningRef = useRef(isTransitioning);

  const sliderRef = useRef<HTMLDivElement>(null);

  // keep refs in sync with state
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    isTransitioningRef.current = isTransitioning;
  }, [isTransitioning]);

  // check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsGalleryMode(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // change images depending on screen size
  if (!isGalleryMode) {
    // mobile
    const first = images.slice(0, 4);
    const last = images.slice(7, 10);

    images = [...first, ...last];
  } else {
    // desktop
    images = images.slice(0, 7);
  }

  const nextImage = useCallback(() => {
    if (isTransitioningRef.current) return;

    setIsTransitioning(true);

    if (sliderRef.current) {
      const newIndex = (currentIndexRef.current + 1) % images.length;
      setCurrentIndex(newIndex);
      setProgress(0);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  }, [images.length]);

  const prevImage = useCallback(() => {
    if (isTransitioningRef.current) return;

    setIsTransitioning(true);

    if (sliderRef.current) {
      const newIndex =
        (currentIndexRef.current - 1 + images.length) % images.length;
      setCurrentIndex(newIndex);
      setProgress(0);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  }, [images.length]);

  const goToImage = useCallback((index: number) => {
    if (isTransitioningRef.current || index === currentIndexRef.current) return;

    setIsTransitioning(true);
    setCurrentIndex(index);
    setProgress(0);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, []);

  // auto-play
  useEffect(() => {
    let animationFrameId: number | null = null;
    let lastTimestamp = 0;

    const updateProgress = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;

      const elapsed = timestamp - lastTimestamp;

      if (!isPausedRef.current) {
        setProgress((prev) => {
          const increment = (elapsed / autoPlaySpeed) * 100;
          const newProgress = prev + increment;

          if (newProgress >= 100) {
            if (!isTransitioningRef.current) {
              const nextIndex = (currentIndexRef.current + 1) % images.length;
              setCurrentIndex(nextIndex);
              setIsTransitioning(true);

              setTimeout(() => {
                setIsTransitioning(false);
              }, 300);
            }
            return 0;
          }

          return newProgress;
        });
      }

      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    if (!isPaused) {
      animationFrameId = requestAnimationFrame(updateProgress);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [autoPlaySpeed, images.length, isPaused]);

  if (!images.length) return null;

  // gallery mode
  if (isGalleryMode) {
    return (
      <div
        className={`w-full mx-auto overflow-hidden ${className}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredIndex(null);
        }}
      >
        <div className='h-[1.5px] bg-link-active/30 w-[100px] mx-auto'>
          <div
            className='h-full bg-link-active transition-all duration-100 ease-linear'
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className='text-center my-2'>
          {images[hoveredIndex !== null ? hoveredIndex : currentIndex]?.caption}
        </p>

        <div className='p-2 pt-0'>
          <div className='grid grid-cols-4 gap-1.5 mb-1.5'>
            {images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden cursor-pointer transition-all duration-200 ${
                  (hoveredIndex !== null ? hoveredIndex : currentIndex) ===
                  index
                    ? 'ring-2 ring-link-active transition-all duration-500 ease-in-out'
                    : 'hover:scale-102'
                }`}
                onClick={() => goToImage(index)}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <img
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  className='w-full h-full object-cover'
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className='absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200' />
              </div>
            ))}
          </div>

          {images.length > 4 && (
            <div className='grid grid-cols-3 gap-1.5 mx-auto'>
              {images.slice(4, 7).map((image, index) => {
                const actualIndex = index + 4;
                return (
                  <div
                    key={actualIndex}
                    className={`relative overflow-hidden cursor-pointer transition-all duration-200 ${
                      (hoveredIndex !== null ? hoveredIndex : currentIndex) ===
                      actualIndex
                        ? 'ring-2 ring-link-active transition-all duration-500 ease-in-out'
                        : 'hover:scale-102'
                    }`}
                    onClick={() => goToImage(actualIndex)}
                    onMouseEnter={() => setHoveredIndex(actualIndex)}
                  >
                    <img
                      src={image.src || '/placeholder.svg'}
                      alt={image.alt}
                      className='w-full h-full object-cover'
                      loading='lazy'
                    />
                    <div className='absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-200' />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  // carousel mode
  return (
    <div
      className={`relative w-full max-w-md mx-auto overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className='absolute top-0 left-0 right-0 h-[1.5px] z-20'>
        <div
          className='h-full bg-link-active transition-all duration-100 ease-linear'
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className='relative overflow-hidden'>
        <div
          ref={sliderRef}
          className='flex transition-transform duration-300 ease-in-out will-change-transform'
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className='relative my-auto'
              style={{ width: `${100 / images.length}%` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className='w-full object-cover'
                loading={index === 0 || index === 1 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevImage}
          disabled={isTransitioning}
          className='absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 disabled:opacity-50 z-10'
          aria-label='Previous image'
        >
          <svg width='16' height='16' viewBox='0 0 16 16' fill='currentColor'>
            <path d='M10 2L4 8l6 6V2z' />
          </svg>
        </button>

        <button
          onClick={nextImage}
          disabled={isTransitioning}
          className='absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 disabled:opacity-50 z-10'
          aria-label='Next image'
        >
          <svg width='16' height='16' viewBox='0 0 16 16' fill='currentColor'>
            <path d='M6 2l6 6-6 6V2z' />
          </svg>
        </button>

        <div className='absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm z-10'>
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <p className='text-gray-800 text-center font-medium pt-2'>
        {images[currentIndex]?.caption}
      </p>
    </div>
  );
}
