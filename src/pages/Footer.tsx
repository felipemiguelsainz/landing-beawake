// src/pages/Footer.tsx
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0c0a25] flex w-full flex-wrap md:flex-nowrap justify-center text-left md:justify-around text-white pb-4 maven-pro">
      <p>
        <a className="underline" href="mailto:sales@beawake.ai">sales@beawake.ai</a>
      </p>
      <p className="w-full md:w-auto">All rights reserved @ 2025 BeAwake LLC</p>
      <p className="w-full md:w-auto">
        <Link to="/terms" className="underline">Terms of service & Policy</Link>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/company/beawake/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="BeAwake on LinkedIn"
        >
          <FaLinkedinIn aria-hidden="true" />
        </a>
      </p>
    </footer>
  );
}
