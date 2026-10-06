import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "./Icon";
import Logo from "./Logo";

const links = [
  { to: "/careers", label: "Careers" },
  { to: "/assessment", label: "Skills check" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main">
        <Link to="/" className="brand" onClick={close}>
          <Logo />
          <span>Bridge2Work</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav-links"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "x" : "menu"} size={22} />
          <span className="visually-hidden">Menu</span>
        </button>

        <div
          id="site-nav-links"
          className={open ? "nav-links is-open" : "nav-links"}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={close}
              className={({ isActive }) =>
                isActive ? "nav-link is-active" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Link to="/find-my-path" className="button button-sun button-small" onClick={close}>
            Find my path
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
