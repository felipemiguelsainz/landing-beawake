// App.tsx
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/Navbar";
import OurProducts from "./pages/OurProducts";
import ValuesPage from "./pages/ValuesPage";
import ContactUs from "./pages/ContactUs";
import DataType from "./pages/DataType";
import Footer from "./pages/Footer";
import TermsPage from "./pages/TermsPage";
import "./i18n";


function ScrollToSectionOnLoad() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const section = document.getElementById(id);
      if (section) {
        const yOffset = id === "values" ? -100 : -50;
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="background-blue">
        <Navbar />
        <ScrollToSectionOnLoad />
        <main>
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <HomePage />
                  <ValuesPage />
                  <DataType />
                  <OurProducts />
                  <ContactUs />
                </>
              }
            />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
