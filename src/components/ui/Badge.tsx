import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'comfortable' | 'learning' | 'exploring' | 'building' | 'default';
  className?: string;
}

const variantStyles: Record<string, string> = {
  comfortable:
    'bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/20',
  learning:
    'bg-accent-500/10 text-accent-600 dark:text-accent-400 border-accent-500/20',
  exploring:
    'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  building:
    'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  default:
    'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
