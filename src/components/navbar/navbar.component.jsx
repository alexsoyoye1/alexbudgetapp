import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <Link to="/">
        <h1>My Budget Planner</h1>
      </Link>
      <div className="menu">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/add">
          <h2>Add Item</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
