import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, MapPin } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }, 1200);
  };

  return (
    <Section id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Let's build something meaningful."
          description="Whether you're a recruiter with an internship opportunity, a fellow student, or someone who wants to collaborate — I'd love to hear from you."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Contact info */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              <a
                href="mailto:varshinigowda040907@gmail.com"
                className="card-lift group flex items-center gap-4 rounded-2xl border p-5"
                style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
                >
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Email</div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>varshinigowda040907@gmail.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/varshini-t-g-7856a635a"
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift group flex items-center gap-4 rounded-2xl border p-5"
                style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>LinkedIn</div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>varshini-t-g</div>
                </div>
              </a>

              <a
                href="https://github.com/varsha-467/CareerOS"
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift group flex items-center gap-4 rounded-2xl border p-5"
                style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
                >
                  <Github className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>GitHub</div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>varsha-467</div>
                </div>
              </a>

              <div
                className="flex items-center gap-4 rounded-2xl border p-5"
                style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: 'var(--bg-soft)' }}
                >
                  <MapPin className="h-5 w-5" style={{ color: 'var(--primary)' }} />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Location</div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>Bengaluru, Karnataka, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border p-6 sm:p-8"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-brand-500/50"
                    style={{
                      borderColor: 'var(--border)',
                      background: 'var(--bg-soft)',
                      color: 'var(--text)',
                    }}
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-brand-500/50"
                    style={{
                      borderColor: 'var(--border)',
                      background: 'var(--bg-soft)',
                      color: 'var(--text)',
                    }}
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-brand-500/50"
                  style={{
                    borderColor: 'var(--border)',
                    background: 'var(--bg-soft)',
                    color: 'var(--text)',
                  }}
                  placeholder="I'd like to talk about an internship opportunity..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting || sent}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-70"
                style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent!
                  </>
                ) : submitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
              {sent && (
                <p className="mt-3 text-center text-xs" style={{ color: 'var(--primary)' }}>
                  Thank you for reaching out — I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
