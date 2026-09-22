import { Target, TrendingUp, GraduationCap, Compass } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';

const pillars = [
  {
    icon: Target,
    title: 'Short-Term',
    text: 'Secure a 2026 internship in Data Analytics, Data Science, ML or AI. Build strong fundamentals in Python and SQL.',
  },
  {
    icon: TrendingUp,
    title: 'Mid-Term',
    text: 'Deepen my Machine Learning expertise. Explore AI, GenAI, and LLMs through hands-on projects and real-world applications.',
  },
  {
    icon: GraduationCap,
    title: 'Long-Term',
    text: 'Build deep expertise at the intersection of Data Analytics, ML, and AI — and pursue higher studies in a related specialization.',
  },
];

export function CareerVision() {
  return (
    <Section id="vision">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl border p-8 sm:p-12 lg:p-16"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <div className="grid-bg absolute inset-0 opacity-30" />
          <div
            className="absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-10 blur-3xl"
            style={{ background: 'var(--primary)' }}
          />

          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <Compass className="h-5 w-5 text-brand-500" />
              <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-500">
                Career Vision
              </span>
            </div>

            <h2 className="max-w-3xl font-display text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              My long-term goal is to build expertise at the intersection of{' '}
              <span className="gradient-text">Data Analytics, Machine Learning, and AI</span> — and
              eventually pursue higher studies in a related specialization.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className={`reveal reveal-delay-${i + 1} relative rounded-2xl border p-6`}
                  style={{ background: 'var(--bg-soft)', borderColor: 'var(--border)' }}
                >
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
                  >
                    <p.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-2 font-display text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
