import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What GingerMail touches, where it goes, and what we do (and don't) with it. Spoiler: it stays on your machine.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy policy"
      updated="2026-05-27"
      intro="GingerMail runs entirely on your own machine and connects directly to your mail providers. There is no backend service holding your data. Here is exactly what that means."
    >
      <h2>What stays local</h2>
      <p>Everything mail-shaped stays on your machine:</p>
      <ul>
        <li>
          Mail headers, bodies, and attachments are cached in an encrypted
          SQLite database under your OS user-data directory.
        </li>
        <li>
          The database is encrypted at rest with SQLCipher. The encryption key
          is generated once on first launch and stored in your OS keychain
          (macOS Keychain, Windows DPAPI via Electron <code>safeStorage</code>).
        </li>
        <li>
          Account passwords, OAuth tokens, and AI API keys live in that same OS
          keychain.
        </li>
      </ul>

      <h2>What goes off your machine, and where</h2>
      <p>
        A short, honest list. Most of it only happens because you asked for it:
      </p>
      <ul>
        <li>
          <strong>Mail sync (always):</strong> your credentials and API calls go
          to the mail provider you configured. Remove the account to stop it.
        </li>
        <li>
          <strong>Slack (opt-in):</strong> your token and Web API calls go to
          <code>slack.com</code>. Disconnect any time.
        </li>
        <li>
          <strong>Cloud AI (opt-in):</strong> the text you asked AI to act on,
          plus your prompt, goes to the vendor you chose. Set AI to Off or Local
          to stop it.
        </li>
        <li>
          <strong>Local AI:</strong> nothing leaves &mdash; the Ollama sidecar
          runs on loopback only.
        </li>
        <li>
          <strong>Auto-update (off by default):</strong> app version, OS, and
          arch on an update check, to our static update host.
        </li>
        <li>
          <strong>One-click unsubscribe:</strong> an HTTPS request to the
          sender&rsquo;s unsubscribe URL, only when you click it.
        </li>
      </ul>

      <h2>Things we explicitly do NOT do</h2>
      <ul>
        <li>
          We do not run a backend. No mirror of your mail exists on our servers,
          because we have no servers (except the static update host).
        </li>
        <li>
          We do not have analytics, telemetry, or crash-reporting beacons. The
          desktop app does not contact our domain on launch.
        </li>
        <li>We do not sell, share, or aggregate user data. We don&rsquo;t have it.</li>
        <li>
          We do not log into your mail provider on your behalf. We just store
          your tokens so the app can use them.
        </li>
      </ul>

      <h2>Privacy posture for cloud AI</h2>
      <ul>
        <li>
          <strong>Egress allowlist.</strong> The app only allows outbound HTTP
          to the configured vendor&rsquo;s host. Anything else is blocked at the
          network layer.
        </li>
        <li>
          <strong>PII redaction toggle.</strong> Optionally rewrites card
          numbers, SSNs, phone numbers, IBANs, OTP codes, and email addresses to
          placeholders before the request leaves your machine.
        </li>
        <li>
          <strong>Per-message AI badge.</strong> Every AI summary or draft
          carries a provenance string so you always see where your data went.
        </li>
        <li>
          <strong>Sensitive-account block.</strong> Tag accounts as Sensitive
          and AI calls for them are blocked even in cloud mode.
        </li>
      </ul>

      <h2>Children</h2>
      <p>
        GingerMail is not designed for users under 13. Please don&rsquo;t use it
        if you are.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email{" "}
        <a href={`mailto:${site.privacyContact}`}>{site.privacyContact}</a> or
        open a non-security issue tagged <code>privacy</code> on GitHub.
      </p>
    </LegalShell>
  );
}
