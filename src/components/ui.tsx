import Link from "next/link";
import Image from "next/image";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Logo({
  withWordmark = true,
  size = 36,
}: {
  withWordmark?: boolean;
  size?: number;
}) {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <Image
        src="/img/gingermail-icon.png"
        alt="GingerMail"
        width={size}
        height={size}
        className="rounded-[22%] shadow-sm ring-1 ring-black/5 transition-transform group-hover:-rotate-6"
        priority
      />
      {withWordmark && (
        <span className="text-lg font-semibold tracking-tight text-teal-700">
          Ginger<span className="text-ginger-600">Mail</span>
        </span>
      )}
    </Link>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ginger-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50";

const variants = {
  primary:
    "bg-ginger-600 text-white shadow-sm hover:bg-ginger-700 hover:shadow-md active:translate-y-px",
  secondary:
    "bg-teal-600 text-cream-50 hover:bg-teal-700 active:translate-y-px",
  ghost:
    "border border-teal-200 bg-white/60 text-teal-700 hover:border-teal-300 hover:bg-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-ginger-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-teal-700 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-teal-500/90">
          {subtitle}
        </p>
      )}
    </div>
  );
}
