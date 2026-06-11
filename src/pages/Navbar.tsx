// pages/Navbar.tsx
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = id === "values" ? -100 : -50;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleScroll = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      scrollToSection(id);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { label: "ABOUT", id: "home" },
    { label: "VALUES", id: "values" },
    { label: "OUR MODEL", id: "model" },
    { label: "PRODUCT", id: "products" },
    { label: "CONTACT US", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center text-white py-6 px-8 md:px-32 background-blue-op drop-shadow-md">
      <h3
        className="w-52 text-3xl maven-pro font-bold cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label="Be Awake - go to top"
        onClick={() => handleScroll("home")}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleScroll("home");
          }
        }}
      >
        Be<span className="text-light-blue">Awake</span>
      </h3>

      <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer border-b-2 border-transparent hover:border-white transition-colors duration-300 nav-item"
            role="button"
            tabIndex={0}
            onClick={() => handleScroll(item.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleScroll(item.id);
              }
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <div className="xl:hidden">
        <button
          type="button"
          className="block text-2xl cursor-pointer"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsMenuOpen((prev) => !prev);
          }}
        >
          <RxHamburgerMenu aria-hidden="true" />
        </button>
      </div>

      {isMenuOpen && (
        <ul className="absolute xl:hidden top-16 left-0 w-full bg-[#0c0a25] flex flex-col items-center gap-6 font-semibold text-lg z-50">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="w-full text-center p-4 cursor-pointer border-b-2 border-transparent hover:border-white transition-colors duration-300"
              role="button"
              tabIndex={0}
              onClick={() => handleScroll(item.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleScroll(item.id);
                }
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
