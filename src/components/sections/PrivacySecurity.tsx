import { Button, Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { LockIcon, ShieldIcon, HomeChipIcon } from "@/components/icons";

const nots = [
  "We do not run a backend. No mirror of your mail exists on our servers, because we don't have servers.",
  "We do not have analytics, telemetry, or crash beacons. The app doesn't phone home on launch.",
  "We do not sell, share, or aggregate your data. We can't \u2014 we never collect it.",
];

const hardening = [
  {
    icon: LockIcon,
    title: "Encrypted at rest",
    body: "Your local cache is an SQLCipher-encrypted database. The key is generated once and stored in your OS keychain \u2014 never on disk in plaintext.",
  },
  {
    icon: ShieldIcon,
    title: "Hardened by design",
    body: "Locked-down mail rendering (sandboxed iframes), OAuth with PKCE, a secret-scrubbing logger, and validated IPC. Security is a feature, not a footnote.",
  },
  {
    icon: HomeChipIcon,
    title: "Your keys, your keychain",
    body: "Passwords, OAuth tokens, and AI keys live in macOS Keychain or Windows DPAPI \u2014 the same vault your OS trusts for everything else.",
  },
];

export function PrivacySecurity() {
  return (
    <section id="privacy" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Privacy &amp; security"
            title="Serious about your data. Relaxed about everything else."
            subtitle="Email is the most sensitive workflow on most people's computers. We treat it that way — then get out of your way."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="h-full rounded-3xl border border-coral-400/20 bg-coral-400/5 p-7">
              <h3 className="text-lg font-semibold text-teal-700">
                Things we explicitly do <span className="text-coral-600">not</span>{" "}
                do
              </h3>
              <ul className="mt-5 space-y-4">
                {nots.map((n) => (
                  <li key={n} className="flex gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral-500/15 text-coral-600">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M6 6l12 12M18 6L6 18"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-teal-600/90">
                      {n}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic text-teal-500/80">
                &ldquo;We don&rsquo;t sell your data&rdquo; hits different when
                the honest reason is &ldquo;we never had it.&rdquo;
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-1">
            {hardening.map((h, i) => (
              <Reveal key={h.title} delay={i * 90}>
                <div className="flex gap-4 rounded-2xl border border-teal-100 bg-white p-6 shadow-sm">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                    <h.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-teal-700">{h.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-teal-600/85">
                      {h.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/privacy" variant="ghost">
              Read the privacy policy
            </Button>
            <Button href="/security" variant="ghost">
              Read the security policy
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
