import type { CSSProperties } from "react";
import type { StageResult } from "../lib/scoring";

interface BridgeProgressProps {
  stages: StageResult[];
  /** 0 to 100: how far across the person is. */
  readiness: number;
}

/**
 * A person's result drawn as a bridge under construction. Each span is
 * one roadmap step, filled in as far as they rated themselves, and the
 * marker shows how far across they are overall.
 */
function BridgeProgress({ stages, readiness }: BridgeProgressProps) {
  const position = Math.min(97, Math.max(3, readiness));

  return (
    <div
      className="bridge-progress"
      role="img"
      aria-label={`You are ${readiness}% of the way across. ${stages
        .map((item) => `${item.stage.name}: ${item.percent}% built`)
        .join(". ")}.`}
    >
      <div className="bp-track">
        <div
          className="bp-marker"
          style={{ "--bp-position": `${position}%` } as CSSProperties}
        >
          <span>You</span>
        </div>

        <div className="bp-spans">
          {stages.map((item, index) => (
            <div className="bp-span" key={item.stage.name}>
              <div className="bp-deck">
                <i
                  style={
                    {
                      "--bp-fill": `${item.percent}%`,
                      animationDelay: `${0.3 + index * 0.18}s`,
                    } as CSSProperties
                  }
                />
              </div>
              <div className="bp-arch" />
              <span className="bp-name">
                <b>{index + 1}</b>
                <em>{item.stage.name}</em>
              </span>
            </div>
          ))}
        </div>

        <div className="bp-ends">
          <span>Today</span>
          <span>Work-ready</span>
        </div>
      </div>
    </div>
  );
}

export default BridgeProgress;
