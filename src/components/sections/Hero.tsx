import Image from "next/image";
import { Button, Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { LockIcon, BrainIcon, BellIcon } from "@/components/icons";

const trustChips = [
  { icon: LockIcon, label: "No backend. No telemetry." },
  { icon: BrainIcon, label: "AI that runs on your machine" },
  { icon: BellIcon, label: "One calm digest, not 200 pings" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft brand background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-ginger-200/50 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-sage-300/40 blur-3xl" />
        <div className="absolute top-24 left-1/3 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl" />
      </div>

      <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-ginger-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-ginger-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-ginger-500" />
            Email, calendar &amp; tasks &mdash; with a private AI sidekick
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-teal-700 sm:text-5xl lg:text-6xl">
            Your inbox should work
            <br />
            for <span className="text-ginger-600">you</span> &mdash; not for
            someone&rsquo;s training set.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-teal-500/90">
            GingerMail is a desktop email, calendar, and tasks app with optional{" "}
            <strong className="text-teal-700">on-device AI</strong>. It learns
            your patterns and keeps them right where they belong: on your
            machine. Big email gets smarter off your data. This one just gets
            smarter <em>about</em> you, quietly.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/#download">Get GingerMail (free)</Button>
            <Button href="/#ai" variant="ghost">
              See how the AI stays private
            </Button>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {trustChips.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-teal-600/90"
              >
                <Icon className="h-5 w-5 text-sage-500" />
                {label}
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="relative">
          <HeroArt />
        </Reveal>
      </Container>
    </section>
  );
}

function HeroArt() {
  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-ginger-200/60 via-cream-100 to-teal-100/60 blur-2xl" />

      {/* Faux app window */}
      <div className="overflow-hidden rounded-3xl border border-teal-100 bg-white shadow-[0_24px_70px_-20px_rgba(15,39,46,0.35)]">
        <div className="flex items-center gap-2 border-b border-teal-50 bg-cream-50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-coral-400" />
          <span className="h-3 w-3 rounded-full bg-ginger-400" />
          <span className="h-3 w-3 rounded-full bg-sage-400" />
          <div className="ml-3 flex items-center gap-2">
            <Image
              src="/img/gingermail-icon.png"
              alt=""
              width={18}
              height={18}
              className="rounded-[22%]"
            />
            <span className="text-xs font-semibold text-teal-600">
              GingerMail &mdash; Focus Mode
            </span>
          </div>
        </div>

        <div className="space-y-3 p-5">
          <div className="rounded-2xl border border-ginger-100 bg-ginger-50/60 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-ginger-700">
                AI summary &middot; local:ollama
              </span>
              <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-sage-500 ring-1 ring-sage-300">
                stays on device
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-teal-600">
              3 threads need you today. Landlord wants rent (shocking). Two can
              wait until Thursday &mdash; snoozed.
            </p>
          </div>

          {[
            { from: "Mom", subj: "Did you eat?", tone: "bg-sage-400" },
            { from: "Calendar", subj: "Dentist &middot; 3:30pm", tone: "bg-teal-400" },
            { from: "Tasks", subj: "Reply to landlord", tone: "bg-coral-400" },
          ].map((row, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-teal-50 bg-white px-3 py-2.5"
            >
              <span className={`h-8 w-8 rounded-lg ${row.tone}`} />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-teal-700">
                  {row.from}
                </p>
                <p
                  className="truncate text-xs text-teal-500/80"
                  dangerouslySetInnerHTML={{ __html: row.subj }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
