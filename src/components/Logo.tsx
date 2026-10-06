/** The Bridge2Work mark: one pylon, its cables and the deck. */
function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="32" height="32" rx="9" fill="#ffc22e" />
      <g stroke="#081230" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 22.5c7-2.4 15-2.4 22 0" strokeWidth="2.6" />
        <path d="M16 7v19" strokeWidth="2.6" />
        <path d="M16 8 7 20.6M16 8l9 12.6M16 12.5l-4.5 7.4M16 12.5l4.5 7.4" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export default Logo;
