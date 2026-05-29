import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CheckIcon, MinusIcon } from "@/components/icons";

const pros = [
  "Your mail, calendar, tasks, and AI all stay on your machine.",
  "No telemetry, no tracking, no quietly-trained ad model.",
  "A calm, ADHD-friendly UI that doesn't fight you.",
  "Bring your own accounts and (optional) your own AI key.",
  "Open about exactly what leaves your device, and when.",
];

const cons = [
  "It's a desktop app \u2014 there's no web inbox you can pop open on a borrowed laptop.",
  "Local AI wants a reasonably modern machine; a 2014 netbook will struggle.",
  "Cloud AI and OAuth mean a little setup (bring-your-own keys, sign-ins).",
  "We're early. Some edges are still being sanded \u2014 see the roadmap.",
  "No backend means no magic cross-device sync we run for you.",
];

export function HonestTake() {
  return (
    <section id="honest" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The honest take"
            title="This isn't for everyone. On purpose."
            subtitle="We'd rather you choose GingerMail with your eyes open than churn out disappointed. So here's the unvarnished trade-off."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal as="article">
            <div className="h-full rounded-3xl border border-sage-300/50 bg-sage-300/10 p-7">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-teal-700">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sage-400 text-white">
                  <CheckIcon className="h-5 w-5" />
                </span>
                You&rsquo;ll love it if&hellip;
              </h3>
              <ul className="mt-5 space-y-3.5">
                {pros.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-teal-600/90">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-sage-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal as="article" delay={120}>
            <div className="h-full rounded-3xl border border-coral-400/30 bg-coral-400/5 p-7">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-teal-700">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-coral-500 text-white">
                  <MinusIcon className="h-5 w-5" />
                </span>
                Maybe skip it if&hellip;
              </h3>
              <ul className="mt-5 space-y-3.5">
                {cons.map((c) => (
                  <li key={c} className="flex gap-3 text-sm leading-relaxed text-teal-600/90">
                    <MinusIcon className="mt-0.5 h-5 w-5 shrink-0 text-coral-500" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic leading-relaxed text-teal-500/80">
            Privacy is a trade-off, not a magic trick. You give up a little
            convenience; you get back control and a much quieter inbox. If that
            math works for you, welcome aboard.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
