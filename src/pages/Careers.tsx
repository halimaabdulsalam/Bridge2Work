import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CareerCard from "../components/CareerCard";
import Icon from "../components/Icon";
import { careers, categories } from "../data/careers";
import { rankCareers } from "../data/pathFinder";
import type { CategoryId } from "../data/types";
import { useDocumentTitle } from "../lib/hooks";
import { loadPathAnswers, loadProfile, loadResults } from "../lib/storage";

function Careers() {
  useDocumentTitle("Explore digital careers");

  const [category, setCategory] = useState<CategoryId | "all">("all");
  const [noCoding, setNoCoding] = useState(false);
  const [phoneOnly, setPhoneOnly] = useState(false);
  const [search, setSearch] = useState("");

  const [profile] = useState(loadProfile);
  const [results] = useState(loadResults);
  const [pathAnswers] = useState(loadPathAnswers);

  const matches = useMemo(() => {
    if (!pathAnswers) return null;
    return new Map(
      rankCareers(pathAnswers).map((match) => [match.career.id, match.percent]),
    );
  }, [pathAnswers]);

  const visible = useMemo(() => {
    const term = search.trim().toLowerCase();

    const filtered = careers.filter((career) => {
      if (category !== "all" && career.category !== category) return false;
      if (noCoding && career.coding !== 0) return false;
      if (phoneOnly && career.startOn !== "phone") return false;
      if (!term) return true;

      return [career.title, career.summary, ...career.skills, ...career.tools]
        .join(" ")
        .toLowerCase()
        .includes(term);
    });

    if (!matches) return filtered;
    return [...filtered].sort(
      (a, b) => (matches.get(b.id) ?? 0) - (matches.get(a.id) ?? 0),
    );
  }, [category, noCoding, phoneOnly, search, matches]);

  const clearFilters = () => {
    setCategory("all");
    setNoCoding(false);
    setPhoneOnly(false);
    setSearch("");
  };

  return (
    <main className="page">
      <div className="container">
        <header className="page-head">
          <h1>Explore digital careers</h1>
          <p>
            {careers.length} paths into digital work. Each one shows what the
            job involves, what you need to learn and roughly how long it takes.
          </p>
        </header>

        {!matches && (
          <Link to="/find-my-path" className="nudge">
            <span>
              <strong>Not sure where to look?</strong> Answer ten questions and
              we will sort this list by how well each career fits you.
            </span>
            <span className="button button-ink button-small">
              Find my path
              <Icon name="arrow-right" size={16} />
            </span>
          </Link>
        )}

        <div className="filters">
          <div className="chips" role="group" aria-label="Career family">
            <button
              type="button"
              className="chip"
              aria-pressed={category === "all"}
              onClick={() => setCategory("all")}
            >
              All
            </button>
            {categories.map((item) => (
              <button
                key={item.id}
                type="button"
                className="chip"
                aria-pressed={category === item.id}
                onClick={() => setCategory(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="filters-row">
            <label className="search">
              <Icon name="search" size={18} />
              <span className="visually-hidden">Search careers</span>
              <input
                type="search"
                placeholder="Search by role, skill or tool"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>

            <label className="toggle">
              <input
                type="checkbox"
                checked={noCoding}
                onChange={(event) => setNoCoding(event.target.checked)}
              />
              No coding needed
            </label>

            <label className="toggle">
              <input
                type="checkbox"
                checked={phoneOnly}
                onChange={(event) => setPhoneOnly(event.target.checked)}
              />
              Can start on a phone
            </label>
          </div>
        </div>

        <p className="result-count" aria-live="polite">
          {visible.length} {visible.length === 1 ? "career" : "careers"}
          {matches ? ", best match first" : ""}. Time estimates assume{" "}
          {profile.hoursPerWeek} hours a week.
        </p>

        {visible.length > 0 ? (
          <div className="career-grid">
            {visible.map((career) => (
              <CareerCard
                key={career.id}
                career={career}
                hoursPerWeek={profile.hoursPerWeek}
                matchPercent={matches?.get(career.id)}
                readiness={results[career.id]?.readiness}
              />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No careers match those filters</h2>
            <p>Try removing a filter or searching for something broader.</p>
            <button type="button" className="button button-ink" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Careers;
