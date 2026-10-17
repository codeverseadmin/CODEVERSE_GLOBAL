import { cn } from '@/lib/utils/cn';
import type { ProjectStatus } from '@/types/project';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'violet' | 'emerald' | 'cyan' | 'amber';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide',
        {
          default: 'bg-[var(--color-surface-3)] text-[var(--color-text-secondary)]',
          violet: 'bg-[var(--color-violet)]/15 text-[var(--color-violet-light)]',
          emerald: 'bg-[var(--color-emerald)]/15 text-[var(--color-emerald)]',
          cyan: 'bg-[var(--color-cyan)]/15 text-[var(--color-cyan)]',
          amber: 'bg-amber-500/15 text-amber-400',
        }[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

const STATUS_MAP: Record<ProjectStatus, { label: string; variant: BadgeProps['variant'] }> = {
  live: { label: 'Live', variant: 'emerald' },
  completed: { label: 'Completed', variant: 'violet' },
  'in-development': { label: 'In Development', variant: 'amber' },
  experiment: { label: 'Experiment', variant: 'cyan' },
};

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const { label, variant } = STATUS_MAP[status];
  return (
    <Badge variant={variant} className={className}>
      {status === 'live' && (
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-emerald)] animate-pulse" aria-hidden="true" />
      )}
      {label}
    </Badge>
  );
}
