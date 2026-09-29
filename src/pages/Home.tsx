import { Link } from "react-router-dom";
import image from "../assets/image/bridge.png";

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

          <Link to="/careers" className="primary-button">
            Explore Careers
          </Link>
        </div>

        <div className="hero-image">
          <img
            src={image}
            alt="Young professionals exploring digital career opportunities"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
