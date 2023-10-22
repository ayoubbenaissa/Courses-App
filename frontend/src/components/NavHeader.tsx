import { Link } from "react-router-dom";
import "../styles/NavHeader.css";

export const NavHeader = () => {
  return (
    <header className="nav-header">
      <div className="nav-content">
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/about">About</Link>
        </div>
        <div className="nav-item">
          <Link to="/Courses">Courses</Link>
        </div>
      </div>
    </header>
  );
};
