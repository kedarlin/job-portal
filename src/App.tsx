import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/common/footer/footer";
import Navbar from "./components/common/navbar/navbar";
import Landing from "./components/layout/landing/landing";
import Jobs from "./components/layout/jobs/jobs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
