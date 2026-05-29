import Link from "next/link";
import { site } from "@/lib/site";
import { Container, Logo } from "@/components/ui";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-teal-100 bg-teal-700 text-cream-100">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="[&_span]:text-cream-50 [&_a]:text-cream-50">
              <Logo />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-100/80">
              A calm, local-first inbox that keeps your email, calendar, tasks,
              and AI on your own machine. Built for humans, not for ad models.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ginger-300">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/#features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#ai" className="hover:text-white">
                  Private AI
                </Link>
              </li>
              <li>
                <Link href="/#honest" className="hover:text-white">
                  The honest take
                </Link>
              </li>
              <li>
                <Link href="/#support" className="hover:text-white">
                  Support the project
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ginger-300">
              Trust
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white">
                  Security policy
                </Link>
              </li>
              <li>
                <a href={site.github} className="hover:text-white">
                  Source on GitHub
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.securityContact}`}
                  className="hover:text-white"
                >
                  Report a vulnerability
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-cream-100/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} GingerMail. No backend, no telemetry, no data sales
            &mdash; we genuinely don&rsquo;t have your data.
          </p>
          <p className="italic">
            Made for inboxes that have seen things.
          </p>
        </div>
      </Container>
    </footer>
  );
}
