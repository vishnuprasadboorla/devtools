import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import JSONFormatter from "./pages/JSONFormatter";
import DiffChecker from "./pages/DiffChecker";
import Snippets from "./pages/Snippets";
import GitCommands from "./pages/GitCommands";
import LinuxCommands from "./pages/LinuxCommands";
import LinuxShortcuts from "./pages/LinuxShortcuts";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0b1220] text-gray-100">
        {/* 🔹 Navigation Bar */}
        <nav className="flex justify-center gap-6 py-4 border-b border-gray-700 bg-[#0b1220] sticky top-0 z-10">
          <Link to="/" className="hover:text-[#f0f174] transition">
            Home
          </Link>
          <Link to="/json-formatter" className="hover:text-[#f0f174] transition">
            JSON Formatter
          </Link>
          <Link to="/diff-checker" className="hover:text-[#f0f174] transition">
            Diff Checker
          </Link>
          <Link to="/git-commands" className="hover:text-[#f0f174] transition">
            Git Commands
          </Link>
          <Link to="/linux-commands" className="hover:text-[#f0f174] transition">
            Linux Commands
          </Link>
          <Link to="/linux-shortcuts" className="hover:text-[#f0f174] transition">
            Linux Shortcuts
          </Link>
          <Link to="/snippets" className="hover:text-[#f0f174] transition">
            Snippets
          </Link>
        </nav>

        {/* 🔹 Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="text-center mt-10 text-3xl font-bold text-[#fefefe]">
                Welcome to DevTools 🚀
              </h1>
            }
          />
          <Route path="/json-formatter" element={<JSONFormatter />} />
          <Route path="/diff-checker" element={<DiffChecker />} />
          <Route path="/snippets" element={<Snippets />} />
          <Route path="/git-commands" element={<GitCommands />} />
          <Route path="/linux-commands" element={<LinuxCommands />} />
          <Route path="/linux-shortcuts" element={<LinuxShortcuts />} />
          <Route path="*" element={
            <div className="text-center mt-10">
              <h1 className="text-3xl font-bold text-[#fefefe] mb-4">Page Not Found</h1>
              <Link to="/" className="text-[#f0f174] hover:underline">Go Home</Link>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
