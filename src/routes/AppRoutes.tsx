import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Careers from "../pages/Careers";
import CareerDetails from "../pages/CareerDetails";
import Assessment from "../pages/Assessment";
import Results from "../pages/Results";

function AppRoutes() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<CareerDetails />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
