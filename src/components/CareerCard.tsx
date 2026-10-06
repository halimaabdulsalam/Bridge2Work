import { Link } from "react-router-dom";
import { codingLabels, totalHours } from "../data/careers";
import type { Career } from "../data/types";
import { timeAtPace } from "../lib/scoring";
import Icon from "./Icon";

interface CareerCardProps {
  career: Career;
  hoursPerWeek: number;
  /** Shown when the person has used the path finder. */
  matchPercent?: number;
  /** Shown when the person has finished a skills check for this career. */
  readiness?: number;
}

function CareerCard({
  career,
  hoursPerWeek,
  matchPercent,
  readiness,
}: CareerCardProps) {
  return (
    <Link to={`/careers/${career.id}`} className="career-card">
      <div className="career-card-top">
        <span className={`icon-tile tile-${career.category}`}>
          <Icon name={career.icon} size={22} />
        </span>

        {readiness !== undefined ? (
          <span className="pill pill-good">{readiness}% ready</span>
        ) : matchPercent !== undefined ? (
          <span className="pill pill-sun">{matchPercent}% match</span>
        ) : null}
      </div>

      <h3>{career.title}</h3>
      <p>{career.summary}</p>

      <ul className="career-card-facts">
        <li>{codingLabels[career.coding]}</li>
        <li>
          {timeAtPace(totalHours(career), hoursPerWeek).replace("about ", "~")}
        </li>
        {career.startOn === "phone" && <li>Start on a phone</li>}
      </ul>
    </Link>
  );
}

export default CareerCard;
