import { Link } from "react-router-dom";

import Navbar from "./navbar";

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <Link to="/">University List App</Link>
    </div>
    <Navbar />
  </div>
);

export default Header;
