import { ArrowDown, Download, Github, Linkedin, FolderGit2, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background grid */}
      <div className="grid-bg absolute inset-0 -z-10" />

      {/* Floating orbs */}
      <div
        className="absolute -left-20 top-40 -z-10 h-72 w-72 rounded-full opacity-30 blur-3xl animate-float"
        style={{ background: 'radial-gradient(circle, var(--primary), transparent)' }}
      />
      <div
        className="absolute -right-20 bottom-20 -z-10 h-80 w-80 rounded-full opacity-20 blur-3xl animate-float"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent)', animationDelay: '2s' }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {/* Status badge */}
            <div
              className="mb-6 inline-flex animate-fade-in-down items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span style={{ color: 'var(--text-soft)' }}>
                Open to 2026 Internships
              </span>
            </div>

            <h1 className="animate-fade-in-up font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm Varshini{' '}
              <span className="inline-block animate-bounce-slow">👋</span>
            </h1>

            <p
              className="mt-4 animate-fade-in-up font-display text-xl font-medium sm:text-2xl md:text-3xl"
              style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
            >
              <span className="gradient-text">Data Analytics Student</span>
              <span style={{ color: 'var(--text-muted)' }}> · </span>
              <span className="gradient-text">Aspiring Data Analyst</span>
              <span style={{ color: 'var(--text-muted)' }}> · </span>
              <span className="gradient-text">ML & AI Enthusiast</span>
            </p>

            <p
              className="mt-6 max-w-xl animate-fade-in-up text-base leading-relaxed sm:text-lg"
              style={{ color: 'var(--text-soft)', animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
            >
              I build projects, analyze data, and explore AI to solve real-world problems.
              Currently in my 3rd semester of BCA – Data Analytics, actively preparing for
              a career at the intersection of Data, Machine Learning, and AI.
            </p>

            {/* Buttons */}
            <div
              className="mt-8 flex animate-fade-in-up flex-wrap items-center gap-3"
              style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
              >
                <FolderGit2 className="h-4 w-4" />
                View Projects
                <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="/Varshini.T.G.pdf"
                download
                className="flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all hover:scale-105"
                style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)', color: 'var(--text)' }}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="https://github.com/varsha-467/CareerOS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-xl border transition-all hover:scale-110"
                style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)', color: 'var(--text)' }}
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/varshini-t-g-7856a635a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-xl border transition-all hover:scale-110"
                style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)', color: 'var(--text)' }}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Code card */}
          <div className="lg:col-span-5">
            <div
              className="animate-scale-in rounded-2xl border p-6 font-mono text-sm shadow-2xl"
              style={{
                borderColor: 'var(--border)',
                background: 'var(--code-bg)',
                animationDelay: '0.4s',
                opacity: 0,
                animationFillMode: 'forwards',
              }}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                  varshini_profile.py
                </span>
              </div>
              <pre className="overflow-x-auto leading-relaxed" style={{ color: 'var(--text-soft)' }}>
<span style={{ color: 'var(--accent)' }}>class</span> <span style={{ color: 'var(--primary)' }}>Student</span>:{'\n'}
{'  '}name = <span style={{ color: '#f59e0b' }}>"Varshini T. G."</span>{'\n'}
{'  '}degree = <span style={{ color: '#f59e0b' }}>"BCA – Data Analytics"</span>{'\n'}
{'  '}semester = <span style={{ color: 'var(--accent)' }}>3</span>{'\n'}
{'  '}college = <span style={{ color: '#f59e0b' }}>"Vidyavahini"</span>{'\n'}
{'  '}graduation = <span style={{ color: '#f59e0b' }}>"2028"</span>{'\n'}
{'  '}interests = [<span style={{ color: '#f59e0b' }}>"Data"</span>, <span style={{ color: '#f59e0b' }}>"ML"</span>, <span style={{ color: '#f59e0b' }}>"AI"</span>]{'\n'}
{'  '}building = <span style={{ color: '#f59e0b' }}>"CareerOS"</span>{'\n'}
{'  '}status = <span style={{ color: '#f59e0b' }}>"Seeking internship"</span>{'\n'}
{'\n'}
<span style={{ color: 'var(--accent)' }}>def</span> <span style={{ color: 'var(--primary)' }}>learn</span>(self):{'\n'}
{'  '}  <span style={{ color: 'var(--accent)' }}>while</span> <span style={{ color: 'var(--primary)' }}>True</span>:{'\n'}
{'  '}    build() <span style={{ color: 'var(--text-muted)' }}># always</span>{'\n'}
{'  '}    grow()<span className="animate-blink">|</span>
              </pre>
              <div
                className="mt-4 flex items-center gap-2 border-t pt-4 text-xs"
                style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
              >
                <Sparkles className="h-3.5 w-3.5 text-brand-500" />
                Actively building & learning
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-xs font-mono uppercase tracking-widest"
            style={{ color: 'var(--text-muted)' }}
          >
            Scroll
          </span>
          <div
            className="flex h-9 w-5 items-start justify-center rounded-full border-2 p-1"
            style={{ borderColor: 'var(--text-muted)' }}
          >
            <div
              className="h-2 w-1 animate-bounce rounded-full"
              style={{ background: 'var(--text-muted)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
