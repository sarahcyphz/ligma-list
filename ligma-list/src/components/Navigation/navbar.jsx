// navbar.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("spices");
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setActiveLink(link);

    // Use the navigate function to navigate to the specified route
    if (link === "spices") {
      navigate("/spices");
    } else if (link === "need") {
      navigate("/need");
    }
  };

  return (
    <div className="topnav">
      <Link
        to="/spices"
        className={activeLink === "spices" ? "active" : ""}
        onClick={() => handleLinkClick("spices")}
      >
        Spices
      </Link>
      <Link
        to="/need"
        className={activeLink === "need" ? "active" : ""}
        onClick={() => handleLinkClick("need")}
      >
        Need
      </Link>
    </div>
  );
};

export default NavBar;
