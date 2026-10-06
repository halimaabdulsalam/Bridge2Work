import type { ReactNode } from "react";
import type { IconName } from "../data/types";

export type UiIconName =
  | "arrow-right"
  | "arrow-left"
  | "check"
  | "x"
  | "clock"
  | "laptop"
  | "phone"
  | "link"
  | "printer"
  | "search"
  | "refresh"
  | "flag"
  | "external"
  | "menu"
  | "lock";

/**
 * A small hand-drawn icon set on a 24px grid, so the project needs no
 * icon library. Every icon is stroke-only and inherits the text colour.
 */
const paths: Record<IconName | UiIconName, ReactNode> = {
  /* Careers */
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.6" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.6" />
      <path d="M19.5 19v.5a2.5 2.5 0 0 1-2.5 2.5h-3" />
    </>
  ),
  bars: (
    <>
      <path d="M3 21h18" />
      <rect x="5" y="11" width="3.5" height="7" rx="1" />
      <rect x="10.25" y="4" width="3.5" height="14" rx="1" />
      <rect x="15.5" y="8" width="3.5" height="10" rx="1" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v6.2L4.6 18.4A1.8 1.8 0 0 0 6.2 21h11.6a1.8 1.8 0 0 0 1.6-2.6L14 9.2V3" />
      <path d="M7.6 15h8.8" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
      <path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18" />
      <path d="M9.5 9v11" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.6 8.4-2 5.2-5.2 2 2-5.2z" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 4.8-9 4.8-9-4.8z" />
      <path d="m3 12.2 9 4.8 9-4.8" />
      <path d="m3 16.4 9 4.8 9-4.8" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 9.5h3l8-4.5v14l-8-4.5H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z" />
      <path d="M18.5 9a4.2 4.2 0 0 1 0 6" />
      <path d="M7.5 14.5V19a1 1 0 0 0 1 1h1.2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  shapes: (
    <>
      <circle cx="7.5" cy="7.5" r="4.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
      <path d="m17 3 4 7h-8z" />
      <path d="M3.5 21 8 14l4.5 7z" />
    </>
  ),
  play: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="3.5" />
      <path d="m10 9 5 3-5 3z" />
    </>
  ),
  code: (
    <>
      <path d="m8 8-4.5 4L8 16" />
      <path d="m16 8 4.5 4-4.5 4" />
      <path d="m13.5 5-3 14" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="3.5" width="18" height="7" rx="2" />
      <rect x="3" y="13.5" width="18" height="7" rx="2" />
      <path d="M7 7h.01" />
      <path d="M7 17h.01" />
      <path d="M11 7h6" />
      <path d="M11 17h6" />
    </>
  ),
  cloud: (
    <path d="M7 19a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9.6 4.7 4.7 0 0 1 17.3 19z" />
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.6 3 8.3 7.5 9.5 4.5-1.2 7.5-4.9 7.5-9.5V6z" />
      <path d="m9 12 2.2 2.2L15.2 10" />
    </>
  ),
  wave: (
    <>
      <path d="M3 10v4" />
      <path d="M7.5 6.5v11" />
      <path d="M12 3v18" />
      <path d="M16.5 7.5v9" />
      <path d="M21 10v4" />
    </>
  ),
  sparkle: (
    <>
      <path d="m11 3 1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z" />
      <path d="M18.5 15v5" />
      <path d="M16 17.5h5" />
    </>
  ),
  flow: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
      <path d="M10 6.5h4.5a3 3 0 0 1 3 3V14" />
    </>
  ),

  /* Interface */
  "arrow-right": (
    <>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </>
  ),
  "arrow-left": (
    <>
      <path d="M20 12H4" />
      <path d="m10 6-6 6 6 6" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  x: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </>
  ),
  laptop: (
    <>
      <rect x="4.5" y="5" width="15" height="10.5" rx="1.8" />
      <path d="M2.5 19h19" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.2h2" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a4.2 4.2 0 0 0 6 0l3-3a4.2 4.2 0 0 0-6-6l-1 1" />
      <path d="M14 10a4.2 4.2 0 0 0-6 0l-3 3a4.2 4.2 0 0 0 6 6l1-1" />
    </>
  ),
  printer: (
    <>
      <path d="M7 8V3.5h10V8" />
      <rect x="3" y="8" width="18" height="9" rx="2" />
      <rect x="7" y="14" width="10" height="6.5" rx="1" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 11a8 8 0 0 0-14.5-4.2L4 8.5" />
      <path d="M4 4v4.5h4.5" />
      <path d="M4 13a8 8 0 0 0 14.5 4.2l1.5-1.7" />
      <path d="M20 20v-4.5h-4.5" />
    </>
  ),
  flag: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4.5h12.5l-2.5 4 2.5 4H5" />
    </>
  ),
  external: (
    <>
      <path d="M13 5h6v6" />
      <path d="M19 5 10 14" />
      <path d="M17 14v4a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 5 18V9a1.5 1.5 0 0 1 1.5-1.5H10" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    </>
  ),
};

interface IconProps {
  name: IconName | UiIconName;
  size?: number;
  className?: string;
}

function Icon({ name, size = 20, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}

export default Icon;
