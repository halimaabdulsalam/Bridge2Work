import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <Logo />
            <span>Bridge2Work</span>
          </Link>
          <p>Find your path. Build your skills. Get ready for work.</p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <Link to="/find-my-path">Find my path</Link>
          <Link to="/careers">Explore careers</Link>
          <Link to="/assessment">Skills check</Link>
        </nav>

        <p className="footer-note">
          Your answers stay in this browser. No account, nothing uploaded.
          <br />
          Built by Group 4 for the Nexus Internship.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
