import { NavLink } from 'react-router';

interface LinkButtonProps {
  to: string;
  type: 'internal' | 'external';
  variant?: 'default' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

const LinkButton = ({
  to,
  type,
  children,
  className,
  variant,
}: LinkButtonProps) => {
  const variantStylesMap: Record<string, string> = {
    default:
      'bg-btn-bg/70 backdrop-blur-[100px] active:bg-btn-bg transitional-all',
    ghost:
      'bg-transparent hover:bg-btn-bg/70 hover:backdrop-blur-[100px] transition-all duration-300 delay-100 text-bg-light active:bg-btn-bg active:duration-0 active:delay-0',
  };

  const classes = `flex items-center gap-2 py-2 px-4 rounded-lg ${
    variantStylesMap[variant || 'default']
  } ${className}`;

  return type === 'external' ? (
    <a href={to} className={classes} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  ) : (
    <NavLink to={to} className={classes}>
      {children}
    </NavLink>
  );
};

export default LinkButton;
