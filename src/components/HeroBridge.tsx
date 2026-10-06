import type { CSSProperties } from "react";
import { usePrefersReducedMotion } from "../lib/hooks";

/**
 * The hero illustration: a cable-stayed bridge at first light, in the
 * spirit of the Lekki-Ikoyi Link Bridge. The three numbered pins are the
 * three steps of the product, and the moving light is the person
 * crossing from "today" to "work-ready".
 *
 * Geometry is computed rather than hand-placed so the cables always
 * meet the curved deck exactly.
 */

const WIDTH = 1440;
const DECK_START = { x: -40, y: 412 };
const DECK_END = { x: 1480, y: 412 };
const DECK_RISE = 378;

/** Height of the deck's gentle arc at a given x. */
function deckY(x: number): number {
  const t = (x - DECK_START.x) / (DECK_END.x - DECK_START.x);
  return (
    (1 - t) * (1 - t) * DECK_START.y +
    2 * (1 - t) * t * DECK_RISE +
    t * t * DECK_END.y
  );
}

const deckPath = `M${DECK_START.x} ${DECK_START.y} Q${WIDTH / 2} ${DECK_RISE} ${DECK_END.x} ${DECK_END.y}`;

const PYLON_X = 1100;

/* Cables fan out from the pylon. The furthest anchors sit highest. */
const leftCables = [1010, 920, 830, 740, 650, 560, 470, 380].map((x, i) => ({
  x,
  top: 172 - i * 16,
}));
const rightCables = [1190, 1270, 1350, 1430].map((x, i) => ({
  x,
  top: 172 - i * 32,
}));
const cables = [...leftCables, ...rightCables];

const stops = [
  { x: 280, label: "1" },
  { x: 560, label: "2" },
  { x: 840, label: "3" },
];

const START_X = 110;
const END_X = 1340;
/** Where the traveller waits when motion is turned off. */
const REST_X = 700;
const journeyPath = `M${START_X} ${deckY(START_X) - 9} Q${WIDTH / 2} ${DECK_RISE - 9} ${END_X} ${deckY(END_X) - 9}`;

function delay(seconds: number): CSSProperties {
  return { animationDelay: `${seconds}s` };
}

function HeroBridge() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <svg
      className="hero-bridge"
      viewBox={`0 0 ${WIDTH} 560`}
      preserveAspectRatio="xMaxYMax slice"
      role="img"
      aria-label="A cable-stayed bridge at sunrise. A light travels across it, past three numbered stops, from a point marked 'You, today' to a flag marked 'Work-ready'."
    >
      <defs>
        <radialGradient id="hb-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffc22e" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#ffc22e" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#ffc22e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hb-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1a4a" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#050c26" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="hb-sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd874" />
          <stop offset="100%" stopColor="#ffb300" />
        </linearGradient>
        <clipPath id="hb-above-water">
          <rect x="0" y="0" width={WIDTH} height="468" />
        </clipPath>
      </defs>

      {/* First light on the horizon */}
      <g className="hb-fade" style={delay(0.2)}>
        <ellipse cx="1250" cy="468" rx="520" ry="330" fill="url(#hb-glow)" />
        <circle
          cx="1250"
          cy="468"
          r="74"
          fill="url(#hb-sun)"
          clipPath="url(#hb-above-water)"
        />
      </g>

      {/* Water */}
      <rect x="0" y="468" width={WIDTH} height="92" fill="url(#hb-water)" />
      <g className="hb-ripples" stroke="#ffc22e" strokeLinecap="round">
        <path d="M1196 484h108" strokeWidth="3" opacity="0.5" />
        <path d="M1214 500h72" strokeWidth="3" opacity="0.36" />
        <path d="M1182 516h136" strokeWidth="2.5" opacity="0.24" />
        <path d="M1226 534h48" strokeWidth="2.5" opacity="0.16" />
      </g>
      <g stroke="#9db5ff" strokeLinecap="round" strokeWidth="2" opacity="0.2">
        <path d="M140 492h90M330 512h64M610 488h110M780 522h70M930 498h54M40 530h120M470 540h90" />
      </g>

      {/* Piers */}
      <g stroke="#7f9bf0" strokeWidth="6" strokeLinecap="round" opacity="0.5">
        {[200, 520, 840].map((x) => (
          <path key={x} d={`M${x} ${deckY(x) + 12}V520`} />
        ))}
      </g>

      {/* Pylon */}
      <g
        className="hb-pylon"
        fill="none"
        stroke="#e8eeff"
        strokeWidth="7"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d={`M${PYLON_X - 26} 522 L${PYLON_X - 5} 44 h10 L${PYLON_X + 26} 522`} />
        <path d={`M${PYLON_X - 9} 140h18M${PYLON_X - 14} 250h28`} strokeWidth="5" />
      </g>

      {/* Cables */}
      <g stroke="#c9d6ff" strokeWidth="2" strokeLinecap="round">
        {cables.map((cable, i) => (
          <line
            key={cable.x}
            className="hb-draw"
            style={delay(1 + i * 0.07)}
            pathLength={1}
            x1={PYLON_X}
            y1={cable.top}
            x2={cable.x}
            y2={deckY(cable.x)}
          />
        ))}
      </g>

      {/* Deck */}
      <path
        d={deckPath}
        transform="translate(0 10)"
        fill="none"
        stroke="#3d5fd0"
        strokeWidth="10"
        opacity="0.9"
      />
      <path
        className="hb-draw hb-deck"
        pathLength={1}
        d={deckPath}
        fill="none"
        stroke="#ffc22e"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* The three steps, plus where the journey starts and ends */}
      <g className="hb-labels">
        <g className="hb-pop" style={delay(1.7)}>
          <circle cx={START_X} cy={deckY(START_X)} r="8" fill="#081230" stroke="#fff" strokeWidth="3" />
          <text x={START_X} y={deckY(START_X) - 26} textAnchor="middle" className="hb-caption">
            You, today
          </text>
        </g>

        {stops.map((stop, i) => (
          <g key={stop.label} className="hb-pop" style={delay(1.9 + i * 0.2)}>
            <path
              d={`M${stop.x} ${deckY(stop.x)}V${deckY(stop.x) - 34}`}
              stroke="#ffc22e"
              strokeWidth="3"
            />
            <circle cx={stop.x} cy={deckY(stop.x) - 50} r="19" fill="#ffc22e" />
            <text x={stop.x} y={deckY(stop.x) - 43.5} textAnchor="middle" className="hb-pin">
              {stop.label}
            </text>
            <circle cx={stop.x} cy={deckY(stop.x)} r="6" fill="#081230" stroke="#ffc22e" strokeWidth="3" />
          </g>
        ))}

        <g className="hb-pop" style={delay(2.5)}>
          <path d={`M${END_X} ${deckY(END_X)}V${deckY(END_X) - 62}`} stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <path
            d={`M${END_X} ${deckY(END_X) - 62}h44l-10 12 10 12h-44z`}
            fill="#ffc22e"
          />
          <text x={END_X + 4} y={deckY(END_X) - 78} textAnchor="middle" className="hb-caption">
            Work-ready
          </text>
        </g>
      </g>

      {/* The traveller */}
      <g
        className="hb-traveller"
        transform={
          reducedMotion ? `translate(${REST_X} ${deckY(REST_X) - 9})` : undefined
        }
      >
        <circle r="16" fill="#ffc22e" opacity="0.25" />
        <circle r="7" fill="#fff" stroke="#ffc22e" strokeWidth="3" />
        {!reducedMotion && (
          <animateMotion
            dur="11s"
            begin="2.4s"
            repeatCount="indefinite"
            path={journeyPath}
            calcMode="spline"
            keyPoints="0;1;1"
            keyTimes="0;0.86;1"
            keySplines="0.45 0 0.3 1;0 0 1 1"
          />
        )}
      </g>
    </svg>
  );
}

export default HeroBridge;
