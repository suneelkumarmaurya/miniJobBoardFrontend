import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddJob from "./pages/AddJob.jsx";
import Home from "./pages/Home.jsx";
import JobDetails from "./pages/JobDetails.jsx";

function App() {
  return (
    <>
      <Router>
        <nav className="bg-blue-600 p-4 text-white flex gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/add-job" className="hover:underline">
            Add Job
          </Link>
        </nav>
        <div className="max-w-4xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-job" element={<AddJob />} />
          <Route path="/job/:id" element={<JobDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
