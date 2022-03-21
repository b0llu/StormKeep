import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/Auth.context";
import { LoginBox } from "../../Pages/AuthPage/ProfileComponents";
import "./Header.css";

export const Header = () => {
  const user = localStorage.getItem("StormKeepUser");
  const encodedToken = localStorage.getItem("StormKeepToken");
  const { signout } = useAuthContext();

  return (
    <nav>
      <div className="navbar">
        <h1 className="name">
          <i className="fas fa-bolt"></i> StormKeep
        </h1>
        <input
          className="header-input"
          placeholder="Search"
          // value={searchTerm}
          type="text"
        />
        <div className="margin-left-auto">
          <div className="icon-container">
            <p className="icon-color">{user}</p>
            <div className="badge">
              <i className="fa-solid fas fa-user icon-color"></i>
            </div>
            <Link to="/login" element={<LoginBox />}>
              {encodedToken && (
                <div onClick={() => signout()} className="badge">
                  <i className="fas fa-sign-out icon-color"></i>
                </div>
              )}
            </Link>
            <i id="toggle-theme" className="fas fa-moon icon icon-color"></i>
          </div>
        </div>
        <input className="mobile-input" type="text" placeholder="Search" />
      </div>
    </nav>
  );
};
