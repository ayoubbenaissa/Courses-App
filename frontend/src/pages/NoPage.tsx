import { Link } from "react-router-dom";

export const NoPage = () => {
  return (
    <>
      <h1>No Page</h1>
      <Link to="/">go back to "Home"</Link>
    </>
  );
};
