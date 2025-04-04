// src/pages/Footer.tsx
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

export default function Footer() {
  return (
    <div className="bg-[#0c0a25] flex w-full flex-wrap md:flex-nowrap justify-center text-left md:justify-around text-white pb-4 maven-pro">
      <p>
        <a className="underline" href="mailto:sales@beawake.ai">sales@beawake.ai</a>
      </p>
      <p className="w-full md:w-auto">All rights reserved @ 2025 BeAwake LLC</p>
      <p className="w-full md:w-auto">
        <Link to="/terms" className="underline">Terms of service & Policy</Link> {/* Enlace a la página de términos */}
      </p>
      <p>
        <a href="https://www.linkedin.com/company/beawake/">
          <FaLinkedinIn />
        </a>
      </p>
    </div>
  );
}
