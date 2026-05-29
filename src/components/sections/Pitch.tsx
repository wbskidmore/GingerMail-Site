import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const points = [
  {
    stat: "1",
    label: "calm window",
    body: "Mail, calendar, and tasks live together. Stop alt-tabbing between five tabs to find out where you're supposed to be at 3pm.",
  },
  {
    stat: "4+",
    label: "providers, one inbox",
    body: "Gmail, Microsoft, Apple, and plain IMAP/SMTP all land in one unified inbox. Bring the accounts you already have.",
  },
  {
    stat: "0",
    label: "data brokers involved",
    body: "Everything caches in an encrypted database on your machine. There's no server in the middle quietly taking notes.",
  },
];

export function Pitch() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Simplify email"
            title={
              <>
                Email got complicated.
                <br className="hidden sm:block" /> We put it back together.
              </>
            }
            subtitle="GingerMail is the boring-in-a-good-way inbox: fewer surprises, fewer pings, and a layout that doesn't make your shoulders climb toward your ears."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.label} delay={i * 90} as="article">
              <div className="h-full rounded-3xl border border-teal-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight text-ginger-600">
                    {p.stat}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wide text-teal-400">
                    {p.label}
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-teal-600/90">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
