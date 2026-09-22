import { BookOpen, Target, Lightbulb, Rocket, Code2 } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';

const traits = [
  {
    icon: BookOpen,
    title: 'Learning by Building',
    text: 'I don\'t just watch tutorials — I build real projects to understand concepts deeply. CareerOS is my current proof of that approach.',
  },
  {
    icon: Target,
    title: 'Goal: 2026 Internship',
    text: 'My immediate priority is securing an internship in Data Analytics, Data Science, ML, or AI by end of 2026.',
  },
  {
    icon: Lightbulb,
    title: 'Curiosity-Driven',
    text: 'I\'m fascinated by how data, ML and AI can solve practical problems. I explore GenAI and LLMs to understand where the field is heading.',
  },
  {
    icon: Rocket,
    title: 'Growing Every Day',
    text: 'I\'m honest about where I am — a 3rd-semester student actively strengthening Python, SQL, ML and AI fundamentals.',
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About Me"
          title="A student who learns by building."
          description="Get to know who I am, what drives me, and where I'm headed."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Personal intro */}
          <div className="lg:col-span-7">
            <div
              className="card-lift rounded-2xl border p-6 sm:p-8"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <div className="mb-4 flex items-center gap-3">
                <Code2 className="h-5 w-5 text-brand-500" />
                <h3 className="font-display text-lg font-semibold">My Story</h3>
              </div>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                <p>
                  I'm a <span style={{ color: 'var(--text)' }} className="font-medium">BCA Data Analytics</span> student
                  at Vidyavahini First Grade College, Tumkur University. What started as curiosity about
                  how spreadsheets turn into insights has grown into a serious interest in{' '}
                  <span style={{ color: 'var(--text)' }} className="font-medium">Data Analytics, Machine Learning, and AI</span>.
                </p>
                <p>
                  I learn best by building. Instead of only studying theory, I create projects that solve
                  real problems — <span style={{ color: 'var(--text)' }} className="font-medium">CareerOS</span>, my
                  career-roadmap app, is the latest example. It helps me track my own growth while sharpening
                  my technical skills.
                </p>
                <p>
                  Right now my focus is simple: <span style={{ color: 'var(--text)' }} className="font-medium">get stronger
                  at Python and SQL, understand Machine Learning deeply, and explore AI, GenAI and LLMs</span> —
                  all while preparing to land an internship in 2026.
                </p>
                <p>
                  I'm not here to pretend I know everything. I'm here to show that I'm learning,
                  building, experimenting, and genuinely preparing for a career in data and AI.
                </p>
              </div>
            </div>
          </div>

          {/* Trait cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
            {traits.map((trait, i) => (
              <div
                key={trait.title}
                className={`card-lift gradient-border group rounded-2xl border p-5 reveal reveal-delay-${i + 1}`}
                style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
              >
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
                >
                  <trait.icon className="h-5 w-5 text-white" />
                </div>
                <h4 className="mb-1.5 font-display text-sm font-semibold">{trait.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                  {trait.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
