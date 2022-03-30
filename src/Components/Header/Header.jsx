import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../../Context/Auth.context";
import { useThemeContext } from "../../Context/Theme.context";
import { LoginBox } from "../../Pages/AuthPage/ProfileComponents";
import "./Header.css";

export const Header = () => {
  const { theme, toggleLightDarkTheme } = useThemeContext();
  const user = localStorage.getItem("StormKeepUser");
  const encodedToken = localStorage.getItem("StormKeepToken");
  const { signout } = useAuthContext();
  const location = useLocation();

  return (
    <nav>
      <div className="navbar">
        <h1 className="name">
          <i className="fas fa-bolt"></i> StormKeep
        </h1>
        {location.pathname !== "/" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/login" && (
            <input className="header-input" placeholder="Search" type="text" />
          )}
        <div className="margin-left-auto">
          <div className="icon-container">
            {user && <p className="icon-color">Hello, {user}</p>}
            <div className="badge">
              <i className="fa-solid fas fa-user icon-color"></i>
            </div>
            <Link to="/" element={<LoginBox />}>
              {encodedToken && (
                <div onClick={() => signout()} className="badge">
                  <i className="fas fa-sign-out icon-color"></i>
                </div>
              )}
            </Link>
            <i
              onClick={toggleLightDarkTheme}
              className={`${
                theme === "light" ? "fas fa-moon" : "fas fa-sun"
              } icon icon-color`}
            ></i>
          </div>
        </div>
        {location.pathname !== "/" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/login" && (
            <input className="mobile-input" type="text" placeholder="Search" />
          )}
      </div>
    </nav>
  );
};
