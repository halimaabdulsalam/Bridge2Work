import { Link } from "react-router-dom";
import { useDocumentTitle } from "../lib/hooks";

function NotFound() {
  useDocumentTitle("Page not found");

  return (
    <main className="page">
      <div className="container empty">
        <h1>This page is not on the map</h1>
        <p>The link may be broken or the page may have moved.</p>
        <div className="empty-actions">
          <Link to="/" className="button button-ink">
            Go to the home page
          </Link>
          <Link to="/find-my-path" className="button button-outline">
            Find my path
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
