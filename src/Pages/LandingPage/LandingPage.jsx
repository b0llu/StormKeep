import { Link } from "react-router-dom";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing-left">
        <span className="landing-header">For All Your Note Taking Needs!</span>
        <span className="landing-info">
          Manage your daily tasks and workflow in a modern way and boost your
          efficiency without any efforts
        </span>
        <Link to="/signup">
          <button className="landing-btn">JOIN NOW</button>
        </Link>
        <Link className="landing-link" to="/login">
          <span>Already Have an account?</span>
        </Link>
      </div>
      <div className="landing-right">
        <img className="rsp-img" src="/assets/landing-img.svg" alt="Hero-Img" />
      </div>
    </div>
  );
};
