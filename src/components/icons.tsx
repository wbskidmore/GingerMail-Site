type IconProps = { className?: string };

const wrap = (children: React.ReactNode) => {
  function Icon({ className }: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        {children}
      </svg>
    );
  }
  return Icon;
};

export const MailIcon = wrap(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </>,
);

export const CalendarIcon = wrap(
  <>
    <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
    <path d="M3 9h18M8 3v3M16 3v3" />
    <path d="M7.5 13h2M11 13h2M14.5 13h2M7.5 16.5h2M11 16.5h2" />
  </>,
);

export const TasksIcon = wrap(
  <>
    <path d="M4 6.5h11M4 12h11M4 17.5h7" />
    <path d="m17.5 5 1.6 1.6L22 3.5" />
    <circle cx="18" cy="12" r="0.6" fill="currentColor" />
    <circle cx="18" cy="17.5" r="0.6" fill="currentColor" />
  </>,
);

export const SlackIcon = wrap(
  <>
    <path d="M9 13.5a1.8 1.8 0 1 1-1.8-1.8H9zM10.5 13.5a1.8 1.8 0 0 1 3.6 0v4.7a1.8 1.8 0 0 1-3.6 0z" />
    <path d="M10.5 9a1.8 1.8 0 1 1 1.8 1.8H10.5zM10.5 7.5a1.8 1.8 0 0 1-3.6 0V2.8a1.8 1.8 0 0 1 3.6 0z" />
  </>,
);

export const FocusIcon = wrap(
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" />
  </>,
);

export const SnoozeIcon = wrap(
  <>
    <circle cx="12" cy="13" r="7.5" />
    <path d="M12 9.5V13l2.5 1.5" />
    <path d="M9 2.5h5l-5 4h5" transform="translate(2.5 0) scale(0.7)" />
  </>,
);

export const BellIcon = wrap(
  <>
    <path d="M6 9a6 6 0 1 1 12 0c0 4 1.2 5.4 2 6.2H4c.8-.8 2-2.2 2-6.2Z" />
    <path d="M10 19a2 2 0 0 0 4 0" />
  </>,
);

export const BrainIcon = wrap(
  <>
    <path d="M12 5.5a2.6 2.6 0 0 0-5 .9 2.5 2.5 0 0 0-1 4.4A2.6 2.6 0 0 0 7.8 16 2.4 2.4 0 0 0 12 17.6Z" />
    <path d="M12 5.5a2.6 2.6 0 0 1 5 .9 2.5 2.5 0 0 1 1 4.4A2.6 2.6 0 0 1 16.2 16 2.4 2.4 0 0 1 12 17.6Z" />
  </>,
);

export const LockIcon = wrap(
  <>
    <rect x="5" y="10.5" width="14" height="9.5" rx="2.2" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    <circle cx="12" cy="15" r="1.2" fill="currentColor" stroke="none" />
  </>,
);

export const ShieldIcon = wrap(
  <>
    <path d="M12 3 5 5.5v5c0 4.5 3 7.8 7 9.5 4-1.7 7-5 7-9.5v-5Z" />
    <path d="m9 12 2 2 4-4.2" />
  </>,
);

export const HomeChipIcon = wrap(
  <>
    <path d="M4 11 12 4l8 7" />
    <path d="M6 9.5V20h12V9.5" />
    <path d="M10 20v-5h4v5" />
  </>,
);

export const HeartIcon = wrap(
  <path d="M12 20s-7-4.3-9.2-8.6C1.3 8.5 2.6 5.5 5.6 5.1c1.9-.2 3.3 1 4.4 2.4 1.1-1.4 2.5-2.6 4.4-2.4 3 .4 4.3 3.4 2.8 6.3C19 15.7 12 20 12 20Z" />,
);

export const CoffeeIcon = wrap(
  <>
    <path d="M4 8h13v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" />
    <path d="M17 9h2a2.5 2.5 0 0 1 0 5h-2" />
    <path d="M7 3.5c-.6.8-.6 1.7 0 2.5M11 3.5c-.6.8-.6 1.7 0 2.5" />
  </>,
);

export const SparkleIcon = wrap(
  <path d="M12 3l1.6 5.2L19 10l-5.4 1.8L12 17l-1.6-5.2L5 10l5.4-1.8Z" />,
);

export const CheckIcon = wrap(<path d="m5 12.5 4.5 4.5L19 7" />);

export const MinusIcon = wrap(<path d="M6 12h12" />);
