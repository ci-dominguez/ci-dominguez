import { type ElementType, type ReactNode } from 'react';

type FAQCardHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface FAQCardHeadingProps {
  level: FAQCardHeadingLevel;
  children: ReactNode;
  className?: string;
}

export const FAQCardHeading = ({
  level,
  children,
  className = '',
}: FAQCardHeadingProps) => {
  const Tag = level as ElementType;

  return (
    <Tag
      className={`text-2xl sm:text-3xl font-medium intersect-once intersect:motion-preset-slide-down motion-delay-400 motion-duration-1000 ${className}`}
    >
      {children}
    </Tag>
  );
};

interface FAQCardBodyProps {
  children: ReactNode;
  className?: string;
}

export const FAQCardBody = ({ children, className = '' }: FAQCardBodyProps) => {
  return (
    <p
      className={`intersect-once intersect:motion-preset-fade motion-delay-[500ms] motion-duration-1000 ${className}`}
    >
      {children}
    </p>
  );
};

interface FAQCardListProps {
  itemContent: ReactNode[];
}

export const FAQCardList = ({ itemContent }: FAQCardListProps) => {
  return (
    <ul className='mt-2'>
      {itemContent.map((i, index) => {
        return (
          <li
            key={index}
            className='intersect-once intersect:motion-preset-fade motion-duration-1000 motion-delay-[600ms]'
          >
            <div className='flex items-center gap-2'>
              <div
                className='bg-bg-dark min-w-4 size-4 intersect-once intersect:motion-preset-fade motion-delay-300 motion-duration-1000'
                aria-hidden='true'
                role='presentation'
              />
              <span className='font-medium intersect-once intersect:motion-preset-fade motion-delay-[400ms] motion-duration-1000'>
                {i}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

interface FAQCardProps {
  children: ReactNode;
}
const FAQCard = ({ children }: FAQCardProps) => {
  return <div className='flex flex-col gap-2'>{children}</div>;
};

export default FAQCard;
