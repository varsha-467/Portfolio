import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative flex h-10 w-10 items-center justify-center rounded-lg border transition-all hover:scale-105 active:scale-95"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--bg-elevated)',
      }}
    >
      <Sun
        className={`absolute h-5 w-5 transition-all duration-300 ${
          theme === 'dark' ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
        }`}
        style={{ color: 'var(--primary)' }}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-300 ${
          theme === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'
        }`}
        style={{ color: 'var(--primary)' }}
      />
    </button>
  );
}
