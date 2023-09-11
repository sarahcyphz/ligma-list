import { useState } from "react"; // Import React and useState

import "./navbar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("spices"); // Initialize activeLink state

  // Function to handle link click and set the active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="topnav">
        <a
          className={activeLink === "spices" ? "active" : ""}
          href="#spices"
          onClick={() => handleLinkClick("spices")}
        >
          Spices
        </a>
        <a
          className={activeLink === "need" ? "active" : ""}
          href="#contact"
          onClick={() => handleLinkClick("need")}
        >
          Need
        </a>
      </div>
    </>
  );
};

export default NavBar;
