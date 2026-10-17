import { cn } from '@/lib/utils/cn';
import type { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] disabled:opacity-50 disabled:pointer-events-none',
        {
          // Variants
          primary:
            'bg-[var(--color-violet)] text-white hover:bg-[var(--color-violet-dark)] shadow-lg shadow-violet-900/25',
          secondary:
            'bg-[var(--color-surface-2)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-3)]',
          ghost:
            'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]',
          outline:
            'border border-[var(--color-violet)] text-[var(--color-violet-light)] hover:bg-[var(--color-violet)]/10',
        }[variant],
        {
          // Sizes
          sm: 'text-xs px-3 py-1.5',
          md: 'text-sm px-4 py-2.5',
          lg: 'text-base px-6 py-3',
        }[size],
        className
      )}
    >
      {children}
    </button>
  );
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  children: ReactNode;
}

/** Button-styled anchor — use for navigation, not form submission */
export function LinkButton({ variant = 'primary', size = 'md', className, children, ...props }: LinkButtonProps) {
  return (
    <a
      {...props}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]',
        {
          primary:
            'bg-[var(--color-violet)] text-white hover:bg-[var(--color-violet-dark)] shadow-lg shadow-violet-900/25',
          secondary:
            'bg-[var(--color-surface-2)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-3)]',
          ghost:
            'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]',
          outline:
            'border border-[var(--color-violet)] text-[var(--color-violet-light)] hover:bg-[var(--color-violet)]/10',
        }[variant],
        {
          sm: 'text-xs px-3 py-1.5',
          md: 'text-sm px-4 py-2.5',
          lg: 'text-base px-6 py-3',
        }[size],
        className
      )}
    >
      {children}
    </a>
  );
}
