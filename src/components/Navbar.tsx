import { useEffect, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Events', href: '#events' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => document.querySelector(l.href));
      const current = sections.findIndex((s) => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current !== -1) setActive(navLinks[current].href);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
              scrolled ? 'border backdrop-blur-xl' : 'border-transparent'
            }`}
            style={{
              borderColor: scrolled ? 'var(--border)' : 'transparent',
              background: scrolled ? 'var(--bg-elevated)' : 'transparent',
              boxShadow: scrolled ? '0 4px 20px -8px rgba(0,0,0,0.15)' : 'none',
            }}
          >
            <a href="#home" className="flex items-center gap-2.5 font-display font-bold">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold"
                style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                  color: 'white',
                }}
              >
                VT
              </span>
              <span className="hidden text-base sm:block">
                Varshini<span style={{ color: 'var(--primary)' }}>.</span>
              </span>
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                    active === link.href
                      ? 'text-brand-500'
                      : 'hover:text-brand-500'
                  }`}
                  style={{ color: active === link.href ? undefined : 'var(--text-soft)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href="https://github.com/varsha-467/CareerOS"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105 sm:flex"
                style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
              >
                <Terminal className="h-4 w-4" />
                GitHub
              </a>
              <button
                onClick={() => setOpen(!open)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden"
                style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
                aria-label="Toggle menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 border-l p-6 pt-24 transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-brand-500/10"
                style={{ color: 'var(--text-soft)' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/varsha-467/CareerOS"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white"
              style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
            >
              <Terminal className="h-4 w-4" />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
