import { cn } from '@/lib/utils/cn';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleItalic?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  titleItalic,
  description,
  align = 'left',
  className,
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="text-label text-[var(--color-violet-light)]">{eyebrow}</span>
      )}
      <h2 id={id} className="text-display-lg text-[var(--color-text-primary)]">
        {title}
        {titleItalic && (
          <>
            {' '}
            <em className="not-italic gradient-text-violet">{titleItalic}</em>
          </>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            'text-base text-[var(--color-text-secondary)] leading-relaxed',
            align === 'center' ? 'max-w-2xl' : 'max-w-xl'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
