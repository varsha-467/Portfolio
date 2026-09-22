import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';

export function Education() {
  return (
    <Section id="education">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Education"
          title="My academic foundation."
          description="Where I'm building my formal knowledge in data and analytics."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Main education card */}
          <div className="lg:col-span-7">
            <div
              className="card-lift relative overflow-hidden rounded-2xl border p-6 sm:p-8"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
                >
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold">BCA – Data Analytics</h3>
                  <p className="mt-1 text-sm font-medium" style={{ color: 'var(--text-soft)' }}>
                    Vidyavahini First Grade College
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Tumkur University
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <div
                      className="flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium"
                      style={{ borderColor: 'var(--border)', background: 'var(--bg-soft)' }}
                    >
                      <BookOpen className="h-3.5 w-3.5" style={{ color: 'var(--primary)' }} />
                      <span style={{ color: 'var(--text-soft)' }}>3rd Semester</span>
                    </div>
                    <div
                      className="flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium"
                      style={{ borderColor: 'var(--border)', background: 'var(--bg-soft)' }}
                    >
                      <Calendar className="h-3.5 w-3.5" style={{ color: 'var(--accent)' }} />
                      <span style={{ color: 'var(--text-soft)' }}>Expected Graduation: 2028</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t pt-6" style={{ borderColor: 'var(--border)' }}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                  My coursework covers fundamentals of computer applications with a specialization in
                  Data Analytics — including statistics, data visualization, database management,
                  Python programming, and an introduction to machine learning concepts.
                </p>
              </div>
            </div>
          </div>

          {/* Academic achievements */}
          <div className="lg:col-span-5">
            <div
              className="rounded-2xl border p-6 sm:p-8"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <div className="mb-4 flex items-center gap-3">
                <Award className="h-5 w-5" style={{ color: 'var(--primary)' }} />
                <h3 className="font-display text-base font-semibold">Academic Achievements</h3>
              </div>
              <div
                className="flex flex-col items-center justify-center rounded-xl border border-dashed py-10 text-center"
                style={{ borderColor: 'var(--border)', background: 'var(--bg-soft)' }}
              >
                <Award className="mb-3 h-8 w-8" style={{ color: 'var(--text-muted)' }} />
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Achievements will be added here as I earn them — certifications, course completions,
                  academic awards, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
