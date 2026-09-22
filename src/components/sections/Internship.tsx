import { Briefcase, Mail, ArrowUpRight, BarChart3, BrainCircuit, Database } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';

const areas = [
  { icon: BarChart3, label: 'Data Analytics' },
  { icon: Database, label: 'Data Science' },
  { icon: BrainCircuit, label: 'Machine Learning' },
  { icon: BrainCircuit, label: 'AI' },
];

export function Internship() {
  return (
    <Section id="internship">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl border p-8 sm:p-12 lg:p-16"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          {/* Decorative orbs */}
          <div
            className="absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-10 blur-2xl"
            style={{ background: 'var(--primary)' }}
          />
          <div
            className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full opacity-10 blur-2xl"
            style={{ background: 'var(--accent)' }}
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
                >
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-500">
                    Internship / Experience
                  </span>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Actively seeking internship opportunities.
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                I'm a 3rd-semester BCA Data Analytics student looking for an internship where I can
                apply my growing skills in Python, SQL, and data analysis to real-world problems.
                I'm eager to learn from a team, contribute meaningfully, and grow as a professional.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {areas.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium"
                    style={{ borderColor: 'var(--border)', background: 'var(--bg-soft)' }}
                  >
                    <a.icon className="h-4 w-4" style={{ color: 'var(--primary)' }} />
                    {a.label}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
                >
                  <Mail className="h-4 w-4" />
                  Get in touch
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="rounded-2xl border p-6"
                style={{ background: 'var(--bg-soft)', borderColor: 'var(--border)' }}
              >
                <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  What I bring
                </h3>
                <ul className="space-y-3">
                  {[
                    'Strong foundation in Python, SQL & Excel',
                    'Hands-on project building (CareerOS)',
                    'Eager to learn ML, AI & GenAI',
                    'Comfortable with Git & GitHub workflows',
                    'Self-driven, curiosity-based learning approach',
                    'Ready to contribute and grow with a team',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-soft)' }}>
                      <span
                        className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full"
                        style={{ background: 'var(--primary)' }}
                      >
                        <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6L5 8.5L9.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="relative mt-8 text-sm italic" style={{ color: 'var(--text-muted)' }}>
            No prior work experience yet — but actively building the skills and projects to earn my first role.
          </p>
        </div>
      </div>
    </Section>
  );
}
