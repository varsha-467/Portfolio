import { GraduationCap, BarChart3, Code2, FolderGit2, Trophy, Briefcase, BrainCircuit, Sparkles, Rocket } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';

interface JourneyStep {
  icon: typeof GraduationCap;
  label: string;
  status: 'done' | 'active' | 'next';
}

const steps: JourneyStep[] = [
  { icon: GraduationCap, label: 'BCA Started', status: 'done' },
  { icon: BarChart3, label: 'Data Analytics', status: 'done' },
  { icon: Code2, label: 'Python & SQL', status: 'active' },
  { icon: FolderGit2, label: 'Projects', status: 'active' },
  { icon: Trophy, label: 'Hackathons', status: 'next' },
  { icon: Briefcase, label: 'Internship', status: 'next' },
  { icon: BrainCircuit, label: 'Machine Learning', status: 'next' },
  { icon: Sparkles, label: 'AI / GenAI', status: 'next' },
  { icon: Rocket, label: 'Future Specialization', status: 'next' },
];

const statusConfig = {
  done: {
    ring: 'var(--primary)',
    bg: 'var(--primary)',
    text: 'text-brand-600 dark:text-brand-400',
    label: 'Completed',
  },
  active: {
    ring: 'var(--accent)',
    bg: 'var(--accent)',
    text: 'text-accent-600 dark:text-accent-400',
    label: 'In Progress',
  },
  next: {
    ring: 'var(--border)',
    bg: 'var(--bg-soft)',
    text: '',
    label: 'Upcoming',
  },
};

export function Journey() {
  return (
    <Section id="journey">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="My Learning Journey"
          title="Where I've been & where I'm going."
          description="An evolving path — not a finished story. Each step represents a real phase of my growth."
          align="center"
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, var(--primary), var(--accent), transparent)' }}
          />

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, i) => {
              const cfg = statusConfig[step.status];
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={step.label}
                  className={`relative flex items-center gap-6 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-1/2 z-10 -translate-x-1/2">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full border-2 shadow-lg transition-transform hover:scale-110"
                      style={{
                        borderColor: cfg.ring,
                        background: 'var(--bg)',
                      }}
                    >
                      {step.status === 'active' && (
                        <span
                          className="absolute h-12 w-12 animate-ping rounded-full opacity-30"
                          style={{ background: cfg.bg }}
                        />
                      )}
                      <step.icon
                        className="h-5 w-5"
                        style={{ color: step.status === 'next' ? 'var(--text-muted)' : cfg.bg }}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`ml-16 sm:ml-0 sm:w-1/2 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <div
                      className="card-lift inline-block rounded-xl border px-5 py-4"
                      style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
                    >
                      <div className={`flex items-center gap-2 ${isLeft ? 'sm:justify-end' : ''}`}>
                        <h4 className="font-display text-sm font-semibold sm:text-base">{step.label}</h4>
                      </div>
                      <div className={`mt-1.5 flex items-center gap-1.5 text-xs ${isLeft ? 'sm:justify-end' : ''}`}>
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: cfg.bg }}
                        />
                        <span style={{ color: 'var(--text-muted)' }}>{cfg.label}</span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
