import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = id === "values" ? -100 : -50;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMenuOpen(false);
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
      <a href="#">
        <h3 className="w-52 text-3xl maven-pro font-bold">
        <Link to="/">Be<span className="text-light-blue">Awake</span></Link>
        </h3>
      </a>

      <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer border-b-2 border-transparent hover:border-white transition-colors duration-300 nav-item"
            onClick={() => handleScroll(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <div className="xl:hidden">
        <RxHamburgerMenu
          className="block text-2xl cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsMenuOpen((prev) => !prev);
          }}
        />
      </div>

      {isMenuOpen && (
        <div className="absolute xl:hidden top-16 left-0 w-full bg-[#0c0a25] flex flex-col items-center gap-6 font-semibold text-lg z-50">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="w-full text-center p-4 cursor-pointer border-b-2 border-transparent hover:border-white transition-colors duration-300"
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </li>
          ))}
        </div>
      )}
    </nav>
  );
}