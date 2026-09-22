import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  const { ref, revealed } = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${revealed ? 'revealed' : ''} relative py-20 sm:py-28 ${className}`}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 sm:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}>
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-brand-500" />
        <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-500">
          {label}
        </span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed sm:text-lg" style={{ color: 'var(--text-soft)' }}>
          {description}
        </p>
      )}
    </div>
  );
}
