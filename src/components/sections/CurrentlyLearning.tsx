import { BookOpen, Code2, Database, BrainCircuit, Sparkles, MessageSquare, Zap, BarChart3 } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';

const learningItems = [
  { icon: Code2, label: 'Python', color: 'var(--primary)' },
  { icon: Database, label: 'SQL', color: 'var(--accent)' },
  { icon: BrainCircuit, label: 'Machine Learning', color: 'var(--primary)' },
  { icon: Sparkles, label: 'AI', color: 'var(--accent)' },
  { icon: BookOpen, label: 'Generative AI', color: 'var(--primary)' },
  { icon: Sparkles, label: 'LLMs', color: 'var(--accent)' },
  { icon: BarChart3, label: 'Data Analytics', color: 'var(--primary)' },
  { icon: MessageSquare, label: 'Problem Solving', color: 'var(--accent)' },
  { icon: Zap, label: 'Communication', color: 'var(--primary)' },
];

export function CurrentlyLearning() {
  return (
    <Section id="learning">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Currently Learning"
          title="What I'm actively improving."
          description="These are the areas I'm working on right now — not things I've mastered, but things I'm genuinely investing time into."
          align="center"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {learningItems.map((item) => (
            <div
              key={item.label}
              className="card-lift group relative overflow-hidden rounded-2xl border p-6"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              {/* Progress shimmer */}
              <div
                className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
              />

              <div className="flex items-center gap-4">
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{ background: `${item.color}15` }}
                >
                  <item.icon className="h-5 w-5" style={{ color: item.color }} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold sm:text-base">{item.label}</h4>
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span
                        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                        style={{ background: item.color }}
                      />
                      <span
                        className="relative inline-flex h-2 w-2 rounded-full"
                        style={{ background: item.color }}
                      />
                    </span>
                    <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                      In Progress
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm" style={{ color: 'var(--text-muted)' }}>
          I dedicate time every day to practice, build, and explore these areas.
        </p>
      </div>
    </Section>
  );
}
