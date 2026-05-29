import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

// TODO: point these at real release artifacts once published.
const downloads = [
  { os: "macOS", note: "Apple silicon & Intel", href: "#" },
  { os: "Windows", note: "10 & 11, 64-bit", href: "#" },
];

export function DownloadCTA() {
  return (
    <section
      id="download"
      className="scroll-mt-20 bg-gradient-to-br from-ginger-600 to-ginger-700 py-20 text-white sm:py-24"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Give your inbox a quieter, more private home.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ginger-50/90">
              Free to download. Free to keep. Your data never leaves your
              machine unless you say so.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {downloads.map((d) => (
                <a
                  key={d.os}
                  href={d.href}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-left text-teal-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
                >
                  <div>
                    <p className="text-sm font-semibold">Download for {d.os}</p>
                    <p className="text-xs text-teal-400">{d.note}</p>
                  </div>
                </a>
              ))}
            </div>

            <p className="mt-6 text-xs text-ginger-50/70">
              Builds are unsigned during early access &mdash; you may need to
              approve the app in your OS security settings. Linux build available
              on request.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
