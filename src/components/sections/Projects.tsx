import { Github, ArrowUpRight, FolderGit2, BarChart3, BrainCircuit, Sparkles, Zap } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';

interface Project {
  title: string;
  description: string;
  problem?: string;
  features: string[];
  tech: string[];
  github?: string;
  status: 'building' | 'planned';
  icon: typeof FolderGit2;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'CareerOS',
    description:
      'A personal career roadmap and opportunity-tracking application that I am actively developing. It helps students plan their career journey, track progress, and discover internships, hackathons, and events — all in one place.',
    problem:
      'Students struggle to keep track of opportunities, deadlines, and their own learning progress across scattered sources. CareerOS brings everything into a single, structured roadmap.',
    features: [
      'Career roadmap',
      'Personal progress tracking',
      'Internship opportunities',
      'Hackathons & events feed',
      'Achievements & planner',
      'Saved opportunities',
      'AI-focused features',
      'Personalized career planning',
    ],
    tech: ['Expo', 'React Native', 'TypeScript', 'Supabase'],
    github: 'https://github.com/varsha-467/CareerOS',
    status: 'building',
    icon: FolderGit2,
    featured: true,
  },
  {
    title: 'Data Analytics Project',
    description:
      'A planned project focused on cleaning, analyzing, and visualizing a real-world dataset to extract meaningful insights. Details coming soon.',
    features: ['Data cleaning', 'Exploratory analysis', 'Visualization', 'Insights report'],
    tech: ['Python', 'Pandas', 'Matplotlib'],
    status: 'planned',
    icon: BarChart3,
  },
  {
    title: 'Power BI Dashboard',
    description:
      'An interactive Power BI dashboard project planned to demonstrate data modeling, DAX, and storytelling through visual analytics.',
    features: ['Data modeling', 'DAX measures', 'Interactive visuals', 'KPI tracking'],
    tech: ['Power BI', 'DAX', 'Excel'],
    status: 'planned',
    icon: BarChart3,
  },
  {
    title: 'Machine Learning Project',
    description:
      'A planned ML project to apply supervised or unsupervised learning techniques on a real dataset — from preprocessing to model evaluation.',
    features: ['Feature engineering', 'Model training', 'Evaluation', 'Comparison'],
    tech: ['Python', 'Scikit-learn', 'Pandas'],
    status: 'planned',
    icon: BrainCircuit,
  },
  {
    title: 'AI / GenAI Project',
    description:
      'A planned project exploring Generative AI and LLMs — potentially a prompt-driven tool, assistant, or data-aware AI application.',
    features: ['LLM integration', 'Prompt engineering', 'Practical use case'],
    tech: ['Python', 'LLM API', 'GenAI'],
    status: 'planned',
    icon: Sparkles,
  },
  {
    title: 'Real-World Problem Solving',
    description:
      'A planned project aimed at solving a practical, everyday problem using data and technology. The exact problem statement is being identified.',
    features: ['Problem identification', 'Data-driven solution', 'Impact focus'],
    tech: ['Python', 'Data Analytics'],
    status: 'planned',
    icon: Zap,
  },
];

export function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <Section id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Featured Projects"
          title="Things I'm building."
          description="Real, ongoing work — not just polished demos. CareerOS is my main focus right now; the rest are planned projects I'll build as I grow."
        />

        {/* Featured project */}
        <div
          className="card-lift mb-6 overflow-hidden rounded-3xl border lg:rounded-3xl"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <div className="grid lg:grid-cols-12">
            {/* Left: info */}
            <div className="p-6 sm:p-10 lg:col-span-7">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
                >
                  <featured.icon className="h-6 w-6 text-white" />
                </div>
                <div className="relative">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    Currently Building
                  </span>
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold sm:text-3xl">{featured.title}</h3>
              <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                {featured.description}
              </p>

              {featured.problem && (
                <div
                  className="mt-5 rounded-xl border-l-2 p-4 text-sm leading-relaxed"
                  style={{
                    borderColor: 'var(--primary)',
                    background: 'var(--bg-soft)',
                    color: 'var(--text-soft)',
                  }}
                >
                  <span className="font-semibold" style={{ color: 'var(--text)' }}>
                    Problem it solves:{' '}
                  </span>
                  {featured.problem}
                </div>
              )}

              {/* Features grid */}
              <div className="mt-6">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-2">
                  {featured.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: 'var(--text-soft)' }}
                    >
                      <span
                        className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full"
                        style={{ background: 'var(--primary)' }}
                      >
                        <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6L5 8.5L9.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border px-2.5 py-1 font-mono text-xs font-medium"
                    style={{ borderColor: 'var(--border)', background: 'var(--bg-soft)', color: 'var(--text-soft)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Button */}
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>

            {/* Right: visual */}
            <div
              className="relative flex items-center justify-center p-8 lg:col-span-5"
              style={{ background: 'var(--bg-soft)' }}
            >
              <div className="grid-bg absolute inset-0 opacity-50" />
              <div className="relative z-10 w-full max-w-xs space-y-3">
                {/* Mock app cards */}
                <div className="rounded-xl border p-3 shadow-lg" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold" style={{ color: 'var(--text)' }}>Career Roadmap</span>
                    <Badge variant="building" className="text-[10px]">Active</Badge>
                  </div>
                  <div className="mt-2 space-y-1.5">
                    {[80, 60, 40, 20].map((w, i) => (
                      <div key={i} className="h-1.5 rounded-full" style={{ background: 'var(--border)' }}>
                        <div className="h-full rounded-full" style={{ width: `${w}%`, background: 'linear-gradient(90deg, var(--primary), var(--accent))' }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border p-3 shadow-lg" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: 'var(--primary)' }}>
                      <Zap className="h-3.5 w-3.5 text-white" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold" style={{ color: 'var(--text)' }}>Internship Found</div>
                      <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Data Analytics · 2026</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border p-3 shadow-lg" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="text-xs font-semibold" style={{ color: 'var(--text)' }}>Progress</div>
                  <div className="mt-1.5 flex items-end gap-1 h-12">
                    {[40, 55, 35, 70, 60, 85, 75].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: 'linear-gradient(180deg, var(--primary), var(--accent))' }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other projects */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <div
              key={p.title}
              className="card-lift gradient-border group relative flex flex-col rounded-2xl border p-6"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{ background: 'var(--bg-soft)' }}
                >
                  <p.icon className="h-5 w-5" style={{ color: 'var(--primary)' }} />
                </div>
                <Badge variant="exploring">Planned</Badge>
              </div>
              <h3 className="font-display text-base font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border px-2 py-0.5 font-mono text-[11px] font-medium"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm" style={{ color: 'var(--text-muted)' }}>
          More projects coming as I learn. This section is designed to grow with me.
        </p>
      </div>
    </Section>
  );
}
