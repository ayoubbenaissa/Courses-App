import { Link } from "react-router-dom";
import "../styles/Home.css";

export const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <div className="home-description">
        <div className="home-description_opening">
          This is a mini courses app. The app enables:
        </div>
        <ul>
          <li>getting all courses</li>
          <li>creating a new course</li>
          <li>updating or deleting an existing course</li>
        </ul>
        to see All courses, please navigate to{" "}
        <Link className="courses-link" to="/Courses">
          Courses
        </Link>
      </div>
    </div>
  );
};
