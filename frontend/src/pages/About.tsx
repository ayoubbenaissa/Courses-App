import { Link } from "react-router-dom";

export const About = () => {
  const stylingAboutPage = {
    fontSize: "16px",
    fontWeight: "600",
    padding: "10px",
  };
  return (
    <>
      <h1 style={{ padding: 10 }}>About</h1>
      <div style={stylingAboutPage}>Nothing fancy here yet...</div>
      <div style={{ padding: 10 }}>
        to see All courses, please navigate to{" "}
        <Link className="courses-link" to="/Courses">
          Courses
        </Link>
      </div>
    </>
  );
};
