import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import {
  MailIcon,
  CalendarIcon,
  TasksIcon,
  SlackIcon,
  FocusIcon,
  SnoozeIcon,
  BellIcon,
  HeartIcon,
} from "@/components/icons";

const features = [
  {
    icon: MailIcon,
    title: "Unified mail",
    body: "An Apple-Mail-style three-pane inbox across Gmail, Microsoft, Apple, and IMAP/SMTP. One-click unsubscribe that actually unsubscribes.",
    accent: "ginger",
  },
  {
    icon: CalendarIcon,
    title: "Calendar built in",
    body: "Day, Week, and Month views with Google, Microsoft, and CalDAV. Import and export ICS without a single browser tab.",
    accent: "teal",
  },
  {
    icon: TasksIcon,
    title: "Tasks + time-blocking",
    body: "Google Tasks, Microsoft To Do, and local lists. Drag a task straight onto the calendar to block real time for it.",
    accent: "sage",
  },
  {
    icon: SlackIcon,
    title: "Slack, tamed",
    body: "DMs and channels with unread and mention badges. Turn a message into a task so it stops living rent-free in your head.",
    accent: "coral",
  },
  {
    icon: FocusIcon,
    title: "Focus Mode",
    body: "Cmd/Ctrl+Shift+F dims everything but the thing in front of you, mutes notifications, and offers a gentle Pomodoro nudge.",
    accent: "ginger",
  },
  {
    icon: SnoozeIcon,
    title: "Universal snooze",
    body: "Snooze any email, event, or task. Future-you can deal with the landlord. Present-you gets to breathe.",
    accent: "teal",
  },
  {
    icon: BellIcon,
    title: "One digest, not 200 pings",
    body: "Notifications are batched into a single calm digest by default \u2014 not a per-email confetti cannon of anxiety.",
    accent: "sage",
  },
  {
    icon: HeartIcon,
    title: "ADHD-friendly by default",
    body: "Low-stimulation palette, generous spacing, optional dyslexic-friendly font, and adjustable density and size out of the box.",
    accent: "coral",
  },
];

const accentMap: Record<string, string> = {
  ginger: "bg-ginger-100 text-ginger-700",
  teal: "bg-teal-100 text-teal-600",
  sage: "bg-sage-300/40 text-sage-500",
  coral: "bg-coral-400/15 text-coral-600",
};

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-cream-100/60 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Everything in one window"
            title="Less app-hopping. More actually-living."
            subtitle="The whole point is fewer moving parts. Here's what ships today — all of it real, all of it local-first."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 80} as="article">
              <div className="group h-full rounded-2xl border border-teal-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${accentMap[f.accent]}`}
                >
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-teal-700">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-teal-600/85">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
