import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Lazy load components for better performance
const HomePage = React.lazy(() => import("./components/HomePage"));
const DepartmentPage = React.lazy(() => import("./components/DepartmentPage"));

function App() {
  return (
    <Router>
      <React.Suspense
        fallback={
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fortis-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading...</p>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:department/" element={<DepartmentPage />} />
          <Route path="/:department" element={<DepartmentPage />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;
