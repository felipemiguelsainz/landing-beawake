import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/Navbar";
import OurProducts from "./pages/OurProducts";
import ValuesPage from "./pages/ValuesPage";
import ContactUs from "./pages/ContactUs";
import DataType from "./pages/DataType";
import Footer from "./pages/Footer";
import TermsPage from "./pages/TermsPage";

function App() {
  return (
    <Router>
      <div className="background-blue">
        {/* Siempre renderiza el Navbar */}
        <Navbar />

        <main>
          <Routes>
            {/* Ruta principal: renderiza todas las secciones de una sola vez */}
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
            
            {/* Ruta para Terms: muestra solo la página de términos */}
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>

        {/* Footer se mantiene siempre visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
