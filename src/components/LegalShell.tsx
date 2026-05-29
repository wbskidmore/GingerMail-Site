import Link from "next/link";
import { Container } from "@/components/ui";

export function LegalShell({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-cream-50">
      <div className="border-b border-teal-100 bg-cream-100/60">
        <Container className="py-14">
          <Link
            href="/"
            className="text-sm font-medium text-ginger-600 hover:text-ginger-700"
          >
            &larr; Back to GingerMail
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-teal-700 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-teal-500/90">
            {intro}
          </p>
          {updated && (
            <p className="mt-3 text-sm text-teal-400">Last updated: {updated}</p>
          )}
        </Container>
      </div>
      <Container className="py-12">
        <article
          className="
            mx-auto max-w-3xl
            [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-teal-700
            [&_h3]:mt-7 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-teal-700
            [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-teal-600/90
            [&_ul]:mt-4 [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:list-disc [&_li]:text-teal-600/90 [&_li]:leading-relaxed
            [&_a]:font-medium [&_a]:text-ginger-600 hover:[&_a]:text-ginger-700
            [&_strong]:text-teal-700
            [&_code]:rounded [&_code]:bg-teal-100/60 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:text-teal-700
          "
        >
          {children}
        </article>
      </Container>
    </div>
  );
}
