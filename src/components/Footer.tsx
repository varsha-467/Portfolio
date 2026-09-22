import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-soft)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <div className="flex items-center gap-2.5 font-display font-bold">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white"
                style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
              >
                VT
              </span>
              <span>Varshini T. G.</span>
            </div>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              Learning, building, and preparing for a career in Data, ML & AI.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:varshini.tg@example.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-lg border transition-all hover:scale-110"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)', color: 'var(--text-soft)' }}
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/varshini-t-g-7856a635a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border transition-all hover:scale-110"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)', color: 'var(--text-soft)' }}
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/varsha-467/CareerOS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border transition-all hover:scale-110"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)', color: 'var(--text-soft)' }}
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-lg border transition-all hover:scale-110"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)', color: 'var(--text-soft)' }}
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          className="mt-8 flex flex-col items-center gap-2 border-t pt-6 text-center text-xs sm:flex-row sm:justify-between sm:text-left"
          style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
        >
          <p>© {new Date().getFullYear()} Varshini T. G. — BCA Data Analytics Student</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-3 w-3 text-brand-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
