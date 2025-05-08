import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/anime/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
