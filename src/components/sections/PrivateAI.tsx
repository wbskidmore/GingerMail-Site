import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { HomeChipIcon, CheckIcon } from "@/components/icons";

const local = [
  "Runs through a bundled Ollama model on 127.0.0.1 \u2014 loopback only.",
  "Zero network traffic leaves your machine. The model file lives in ~/.ollama.",
  "Summaries and drafts happen on your hardware, on your terms.",
];

const cloud = [
  "Strictly opt-in, and off by default \u2014 nothing leaves until you flip the switch.",
  "Egress allowlist: the app only talks to the exact vendor you chose. Typos to other hosts are blocked.",
  "PII redaction toggle scrubs card numbers, SSNs, phone numbers, IBANs, OTPs, and emails before send.",
  "Every AI reply carries a provenance badge (e.g. cloud:openai:gpt-4o-mini) so you always know where it went.",
  "Tag an account 'Sensitive' and cloud AI is blocked for it, full stop.",
];

export function PrivateAI() {
  return (
    <section
      id="ai"
      className="relative scroll-mt-20 overflow-hidden bg-teal-700 py-20 text-cream-100 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-[0.18]">
        <div className="absolute -top-24 right-10 h-80 w-80 rounded-full bg-ginger-400 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sage-400 blur-3xl" />
      </div>

      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-ginger-300">
              Private AI
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Keep your patterns where they belong:{" "}
              <span className="text-ginger-300">with you.</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cream-100/85">
              The big providers got smart by studying everyone&rsquo;s mail.
              GingerMail flips that: the AI learns how <em>you</em> write, when{" "}
              <em>you</em> reply, and what <em>you</em> ignore &mdash; and that
              understanding never becomes someone else&rsquo;s product. Run it
              fully on-device, or opt into a cloud model with guardrails you
              actually control.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal as="article">
            <div className="h-full rounded-3xl border border-ginger-300/40 bg-gradient-to-br from-ginger-500/20 to-transparent p-7 ring-1 ring-inset ring-white/10">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ginger-400 text-teal-800">
                  <HomeChipIcon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Local AI (Ollama)
                  </h3>
                  <p className="text-sm text-ginger-200">
                    Recommended &middot; nothing leaves your machine
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {local.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-cream-100/90">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-ginger-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal as="article" delay={120}>
            <div className="h-full rounded-3xl border border-white/15 bg-white/5 p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sage-400 text-teal-800">
                  <CheckIcon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Cloud AI (bring your own key)
                  </h3>
                  <p className="text-sm text-sage-300">
                    Opt-in &middot; fenced in on every side
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {cloud.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-cream-100/90">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-sage-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-cream-100/70">
            Prefer no AI at all? Set it to <strong>Off</strong> and GingerMail is
            simply a very pleasant, very private email client. The smarts are an
            invitation, never a requirement.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
