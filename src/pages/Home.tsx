import { Link } from "react-router-dom";
import heroImage from "../assets/image/bridge.png";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">YOUR CAREER JOURNEY STARTS HERE</p>

          <h1>Find your path. Build your skills. Get ready for work.</h1>

          <p className="hero-description">
            Explore digital careers, discover the skills you need, and find a
            path that fits you.
          </p>

          <Link to="/assessment" className="home-feature">
            <h2>Build Your Roadmap</h2>

            <p>
              Get a suggested learning path based on your assessment results.
            </p>
          </Link>
        </div>

        <div className="hero-image">
          <img
            src={heroImage}
            alt="Young professionals exploring digital career opportunities"
          />
        </div>
      </section>

      <section className="home-features">
        <Link to="/careers" className="home-feature">
          <h2>Explore Careers</h2>

          <p>
            Discover digital career paths and understand what each one involves.
          </p>
        </Link>

        <Link to="/assessment" className="home-feature">
          <h2>Assess Your Skills</h2>

          <p>
            Check your current confidence across the skills needed for a career.
          </p>
        </Link>

        <Link to="/careers" className="home-feature">
          <h2>Build Your Roadmap</h2>

          <p>Get a suggested learning path based on your assessment results.</p>
        </Link>
      </section>
    </main>
  );
}

export default Home;
