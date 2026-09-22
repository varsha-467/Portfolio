import { BarChart3, Code2, BrainCircuit } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';

type SkillLevel = 'comfortable' | 'learning' | 'exploring';

interface Skill {
  name: string;
  level: SkillLevel;
}

interface SkillCategory {
  icon: typeof BarChart3;
  title: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    icon: BarChart3,
    title: 'Data Analytics',
    skills: [
      { name: 'Excel', level: 'comfortable' },
      { name: 'SQL', level: 'learning' },
      { name: 'Power BI', level: 'comfortable' },
      { name: 'Python', level: 'learning' },
      { name: 'Pandas', level: 'exploring' },
      { name: 'NumPy', level: 'exploring' },
    ],
  },
  {
    icon: Code2,
    title: 'Programming & Development',
    skills: [
      { name: 'Python', level: 'learning' },
      { name: 'HTML', level: 'comfortable' },
      { name: 'CSS', level: 'comfortable' },
      { name: 'TypeScript', level: 'exploring' },
      { name: 'React Native', level: 'exploring' },
      { name: 'Git', level: 'comfortable' },
      { name: 'GitHub', level: 'comfortable' },
    ],
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning & AI',
    skills: [
      { name: 'Machine Learning', level: 'learning' },
      { name: 'AI', level: 'learning' },
      { name: 'Generative AI', level: 'exploring' },
      { name: 'LLMs', level: 'exploring' },
    ],
  },
];

const levelLabel: Record<SkillLevel, string> = {
  comfortable: 'Comfortable',
  learning: 'Learning',
  exploring: 'Exploring',
};

export function Skills() {
  return (
    <Section id="skills">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Skills"
          title="What I know & what I'm learning."
          description="Honest representation — not fake percentages. Here's where I actually stand with each technology."
          align="center"
        />

        {/* Legend */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {(['comfortable', 'learning', 'exploring'] as SkillLevel[]).map((lvl) => (
            <Badge key={lvl} variant={lvl}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {levelLabel[lvl]}
            </Badge>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="card-lift rounded-2xl border p-6 sm:p-7"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
                >
                  <cat.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-all hover:scale-105"
                    style={{ borderColor: 'var(--border)', background: 'var(--bg-soft)', color: 'var(--text)' }}
                  >
                    {skill.name}
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background:
                          skill.level === 'comfortable'
                            ? 'var(--primary)'
                            : skill.level === 'learning'
                            ? 'var(--accent)'
                            : '#f59e0b',
                      }}
                      title={levelLabel[skill.level]}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span key={skill.name} className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {skill.name}{' '}
                      <span style={{ color: 'var(--primary)' }}>·</span>{' '}
                      <span style={{ color: 'var(--text-soft)' }}>{levelLabel[skill.level]}</span>
                      {cat.skills.indexOf(skill) < cat.skills.length - 1 ? '  ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
