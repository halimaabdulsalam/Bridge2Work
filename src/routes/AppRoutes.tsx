import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Assessment from "../pages/Assessment";
import CareerDetails from "../pages/CareerDetails";
import Careers from "../pages/Careers";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PathFinder from "../pages/PathFinder";
import Results from "../pages/Results";

/** A new page should open at the top, not where the last one was scrolled. */
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <NavBar />

      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-my-path" element={<PathFinder />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<CareerDetails />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default AppRoutes;
