import { Link } from "react-router-dom";
import { useDocTitle } from "../../Hook/useTitle";
import "./LandingPage.css";

export const LandingPage = () => {
  useDocTitle("Home | StormKeep")
  const user = localStorage.getItem("StormKeepUser");

  return (
    <div className="landing">
      <div className="landing-left">
        <span className="landing-header">For All Your Note Taking Needs!</span>
        <span className="landing-info">
          Manage your daily tasks and workflow in a modern way and boost your
          efficiency without any efforts
        </span>
        {user ? (
          <Link to="/notes">
            <button className="landing-btn">TO NOTES</button>
          </Link>
        ) : (
          <Link to="/signup">
            <button className="landing-btn">JOIN NOW</button>
          </Link>
        )}
        {!user && (
          <Link className="landing-link" to="/login">
            <span>Already Have an account?</span>
          </Link>
        )}
      </div>
      <div className="landing-right">
        <img className="rsp-img" src="/assets/landing-img.svg" alt="Hero-Img" />
      </div>
    </div>
  );
};
