import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security policy",
  description:
    "How to report a vulnerability in GingerMail, what's in scope, and the hardening already shipped in v1.0.",
};

export default function SecurityPage() {
  return (
    <LegalShell
      title="Security policy"
      intro={
        "We take security seriously because GingerMail handles email \u2014 the most sensitive workflow most people have on their computer."
      }
    >
      <h2>How to report a vulnerability</h2>
      <p>
        <strong>Please do not file public GitHub issues for security bugs.</strong>{" "}
        Email <a href={`mailto:${site.securityContact}`}>{site.securityContact}</a>{" "}
        with a description and reproduction steps, the version you tested, your
        OS and version, and whether the bug needs user interaction.
      </p>

      <h3>What to expect</h3>
      <ul>
        <li>We acknowledge new reports within 2 business days.</li>
        <li>We aim to ship a fix within 30 days for High/Critical issues.</li>
        <li>
          We credit reporters in the release notes unless you ask us not to.
        </li>
        <li>We do not currently run a paid bounty program.</li>
      </ul>

      <h2>In scope</h2>
      <ul>
        <li>The desktop application (macOS + Windows).</li>
        <li>The auto-update channel.</li>
        <li>Anything in the repository, including build scripts and CI.</li>
      </ul>

      <h2>Out of scope</h2>
      <ul>
        <li>Third-party mail providers (report to Google/Microsoft/Apple).</li>
        <li>Third-party AI vendors (report to OpenAI/Anthropic/Google).</li>
        <li>Self-hosted Ollama (report upstream).</li>
        <li>Findings that require physical access to an unlocked device.</li>
        <li>Findings that require local-admin / root privileges.</li>
      </ul>

      <h2>Hardening already in place (v1.0)</h2>
      <ul>
        <li>
          <strong>At-rest DB encryption</strong> with SQLCipher; key stored in
          the OS keychain.
        </li>
        <li>
          <strong>Secret-scrubbing logger</strong> that strips tokens and
          credentials before anything is written.
        </li>
        <li>
          <strong>Renderer hardening</strong> with a strict content-security
          policy and navigation guards.
        </li>
        <li>
          <strong>Mail-body iframe lockdown</strong> &mdash; sandboxed with no
          allow tokens and a <code>default-src &apos;none&apos;</code> CSP.
        </li>
        <li>
          <strong>OAuth with PKCE</strong> and a per-attempt state nonce.
        </li>
        <li>
          <strong>AI egress allowlist</strong> so cloud calls can only reach the
          vendor you picked.
        </li>
        <li>
          <strong>Validated IPC</strong> with a sender guard and schema checks on
          high-impact channels.
        </li>
        <li>
          <strong>Opt-in auto-updater</strong> with a kill-switch and no silent
          downgrades.
        </li>
      </ul>

      <p>
        For the full disclosure surface, see our{" "}
        <code>.well-known/security.txt</code> entry point in the app repository.
      </p>
    </LegalShell>
  );
}
