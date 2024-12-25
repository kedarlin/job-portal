import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/login";
import LandingPage from "./pages/landingPage";
import JobsPage from "./pages/jobsPage";
import InternshipsPage from "./pages/internshipsPage";
import ApplicationsPage from "./pages/applicationsPage";
import Signup from "./pages/signup/signup";
import WatchlistPage from "./pages/watchlistPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/internships" element={<InternshipsPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
      </Routes>
    </Router>
  );
}

export default App;
