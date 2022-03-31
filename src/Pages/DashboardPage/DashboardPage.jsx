import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/Auth.context";
import { LandingPage } from "../LandingPage/LandingPage";
import "./DashboardPage.css";

export const DashboardPage = () => {
  const encodedToken = localStorage.getItem("StormKeepToken");
  const [route, setRoute] = useState("profile");
  const { userState, signout } = useAuthContext();

  return (
    <div className="showcase-container">
      <div className="dashboard">
        <h1 className="dashboard-header">Account</h1>
        <div className="dashboard-container">
          <div className="dashboard-sections">
            <ul>
              <li
                onClick={() => setRoute("profile")}
                className={route === "profile" ? "active" : null}
              >
                Profile
              </li>
              <li
                onClick={() => setRoute("settings")}
                className={route === "settings" ? "active" : null}
              >
                Settings
              </li>
            </ul>
          </div>
          <div className="dashboard-section-details">
            <div className="profile-details">
              {route === "profile" ? (
                <>
                  <h2>Profile Details</h2>
                  <div className="txt-container">
                    <div className="text-row">
                      <span>Name:</span>
                      <span>{userState.firstName}</span>
                    </div>
                    <div className="text-row">
                      <span>Email:</span>
                      <span>{userState.email}</span>
                    </div>
                  </div>
                </>
              ) : null}
              {route === "settings" ? (
                <>
                  <h2>Account Settings</h2>
                  <Link to="/" element={<LandingPage />}>
                    {encodedToken && (
                      <button
                        onClick={() => signout()}
                        className="btn logout-btn"
                      >
                        Log Out
                      </button>
                    )}
                  </Link>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
