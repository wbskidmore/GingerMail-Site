"use client";

import { useState } from "react";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CoffeeIcon, HeartIcon, SparkleIcon } from "@/components/icons";

type Tier = {
  id: string;
  icon: (props: { className?: string }) => React.ReactElement;
  name: string;
  price: string;
  cadence: string;
  joke: string;
  perks: string[];
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    id: "latte",
    icon: CoffeeIcon,
    name: "The Latte",
    price: "$3",
    cadence: "/ month",
    joke: "Cheaper than one 2026 oat-milk latte, and it won't judge your inbox.",
    perks: [
      "A warm fuzzy feeling, renewed monthly",
      "Your name in the in-app thank-you wall",
      "Early access to beta builds",
    ],
  },
  {
    id: "groceries",
    icon: HeartIcon,
    name: "The Grocery Run",
    price: "$8",
    cadence: "/ month",
    joke: "Roughly one (1) carton of eggs at 2026 prices. We're as surprised as you are.",
    perks: [
      "Everything in The Latte",
      "Priority on feature requests",
      "A vote in the next-quarter roadmap poll",
    ],
    highlight: true,
  },
  {
    id: "rent",
    icon: SparkleIcon,
    name: "The Rent Softener",
    price: "$20",
    cadence: "/ month",
    joke: "Won't fix rent. Will fund the people fighting your inbox so they can afford rent.",
    perks: [
      "Everything in The Grocery Run",
      "A founders' sticker pack, mailed to you",
      "Our eternal, slightly teary gratitude",
    ],
  },
];

export function Support() {
  const [note, setNote] = useState<string | null>(null);

  // TODO: wire these to a real provider (Stripe Checkout / Payment Link,
  // Ko-fi, or GitHub Sponsors). For now they're friendly placeholders.
  const handleSupport = (tierName: string) => {
    setNote(
      `Thanks for trying to support "${tierName}"! Payments aren't wired up yet \u2014 this button is a placeholder ready to point at Stripe or Ko-fi.`,
    );
  };

  return (
    <section id="support" className="scroll-mt-20 bg-cream-100/60 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pay what feels right"
            title="GingerMail is free. Bills, sadly, are not."
            subtitle="The app costs nothing to use and always will. But privacy-first software is built by humans who, in 2026, would also like to afford groceries. Chip in only if it's genuinely better for you than the alternatives."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 90} as="article">
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${
                  tier.highlight
                    ? "border-ginger-300 bg-white ring-2 ring-ginger-400"
                    : "border-teal-100 bg-white"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-7 rounded-full bg-ginger-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    Most chipped-in
                  </span>
                )}
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                    tier.highlight
                      ? "bg-ginger-100 text-ginger-700"
                      : "bg-teal-100 text-teal-600"
                  }`}
                >
                  <tier.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-teal-700">
                  {tier.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-teal-700">
                    {tier.price}
                  </span>
                  <span className="text-sm font-medium text-teal-400">
                    {tier.cadence}
                  </span>
                </div>
                <p className="mt-3 text-sm italic leading-relaxed text-teal-500/85">
                  {tier.joke}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {tier.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex gap-2.5 text-sm leading-relaxed text-teal-600/90"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ginger-500" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => handleSupport(tier.name)}
                  className={`mt-7 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ginger-500 focus-visible:ring-offset-2 ${
                    tier.highlight
                      ? "bg-ginger-600 text-white hover:bg-ginger-700"
                      : "border border-teal-200 bg-white text-teal-700 hover:border-teal-300 hover:bg-cream-50"
                  }`}
                >
                  Support {tier.name}
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={60}>
          <div className="mx-auto mt-8 max-w-2xl text-center">
            <button
              type="button"
              onClick={() => handleSupport("One-time tip")}
              className="text-sm font-semibold text-ginger-600 underline-offset-4 hover:text-ginger-700 hover:underline"
            >
              Prefer a one-time tip? Toss in whatever a coffee costs today.
            </button>
            {note && (
              <p
                role="status"
                className="mt-4 rounded-2xl border border-ginger-200 bg-ginger-50 px-4 py-3 text-sm text-ginger-800"
              >
                {note}
              </p>
            )}
            <p className="mt-5 text-xs leading-relaxed text-teal-400">
              No paywalls, no nags, no &ldquo;you&rsquo;ve used 3 of 3 free
              summaries&rdquo; popups. Supporting is opt-in and entirely
              optional.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
