import { useState } from "react";
import { Link } from "react-router-dom";

const menuList = [
  {
    text: "Home",
    link: "/",
    active: false,
  },
  {
    text: "Universities",
    link: "/universities",
    active: false,
  },
  {
    text: "Newsletter",
    link: "/newsletter",
    active: false,
  },
];

const Navbar = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div
        onClick={toggleHamburgerMenu}
        className={`burgericon ${hamburgerMenuOpen ? "is-clicked" : ""}`}
      >
        <span></span>
      </div>
      <nav
        className={`${hamburgerMenuOpen ? "navbar-burgermenu" : "no-mobile"}`}
      >
        {menuList.map((menu) => (
          <Link key={menu.link} className="nav-link" to={menu.link}>
            {menu.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
