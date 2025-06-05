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
    default: 'bg-btn-bg/70 backdrop-blur-[100px]',
    ghost: 'bg-transparent hover:bg-btn-bg/70 hover:backdrop-blur-[100px]',
  };

  const classes = `flex items-center gap-2 py-2 px-4 rounded-lg hover:underline ${
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
