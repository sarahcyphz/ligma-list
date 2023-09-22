import NavBar from "./components/Navigation/navbar";
import SpicesPage from "./pages/Spices/spicePage";
import NeedPage from "./pages/Need/needPage";
import { AddSpice } from "./pages/Spices/addSpice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="spices" element={<SpicesPage />} />
          <Route path="need" element={<NeedPage />} />
          <Route path="addspice" element={<AddSpice />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
