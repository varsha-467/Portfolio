import { Trophy, Calendar, MapPin, ExternalLink, Award, Plus } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';

interface EventItem {
  name: string;
  date: string;
  location: string;
  learned: string;
  certificate?: string;
  link?: string;
  type: 'hackathon' | 'event' | 'workshop' | 'conference' | 'community';
}

const typeConfig = {
  hackathon: { label: 'Hackathon', variant: 'building' as const, icon: Trophy },
  event: { label: 'Event', variant: 'learning' as const, icon: Calendar },
  workshop: { label: 'Workshop', variant: 'exploring' as const, icon: Award },
  conference: { label: 'Conference', variant: 'comfortable' as const, icon: Calendar },
  community: { label: 'Community', variant: 'default' as const, icon: Calendar },
};

const events: EventItem[] = [];

export function Events() {
  return (
    <Section id="events">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Hackathons & Events"
          title="Where I'll grow beyond the classroom."
          description="Hackathons, workshops, and tech events I attend or plan to attend. This section updates as I participate."
        />

        {events.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            {events.map((e) => {
              const cfg = typeConfig[e.type];
              return (
                <div
                  key={e.name}
                  className="card-lift rounded-2xl border p-6"
                  style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{ background: 'var(--bg-soft)' }}
                      >
                        <cfg.icon className="h-5 w-5" style={{ color: 'var(--primary)' }} />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold">{e.name}</h3>
                        <Badge variant={cfg.variant} className="mt-1 text-[10px]">{cfg.label}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{e.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{e.location}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                    <span className="font-medium" style={{ color: 'var(--text)' }}>What I learned: </span>
                    {e.learned}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {e.certificate && (
                      <a href={e.certificate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-brand-500 hover:underline">
                        <Award className="h-3.5 w-3.5" /> Certificate
                      </a>
                    )}
                    {e.link && (
                      <a href={e.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-accent-500 hover:underline">
                        <ExternalLink className="h-3.5 w-3.5" /> Link
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className="flex flex-col items-center justify-center rounded-2xl border border-dashed p-12 text-center"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-soft)' }}
          >
            <div
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ background: 'var(--bg-elevated)' }}
            >
              <Trophy className="h-6 w-6" style={{ color: 'var(--text-muted)' }} />
            </div>
            <h3 className="font-display text-lg font-semibold">No events added yet</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>
              I'm actively looking to participate in hackathons, workshops, and technical events.
              As I attend them, they'll appear here with what I learned and any certificates earned.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {Object.entries(typeConfig).map(([key, cfg]) => (
                <Badge key={key} variant={cfg.variant}>
                  <Plus className="h-3 w-3" /> {cfg.label}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
