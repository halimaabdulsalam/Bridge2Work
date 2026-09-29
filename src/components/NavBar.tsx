import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Bridge2Work</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/assessment">Assessment</Link>
    </nav>
  );
}

export default NavBar;
