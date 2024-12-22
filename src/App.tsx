import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/common/footer/footer";
import Navbar from "./components/common/navbar/navbar";
import Landing from "./components/layout/landing/landing";
import Jobs from "./components/layout/jobs/jobs";
import Applications from "./components/layout/applications/applications";
import Internships from "./components/layout/internships/internships";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
