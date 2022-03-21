import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/Auth.context";
import { DashboardPage } from "../../Pages/DashboardPage/DashboardPage";
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
            <p>{user}</p>
            <div className="badge">
              <i className="fa-solid fas fa-user"></i>
            </div>
            <Link to="/" element={<DashboardPage />}>
              {encodedToken && (
                <div onClick={() => signout()} className="badge">
                  <i className="fas fa-sign-out"></i>
                </div>
              )}
            </Link>
            <i id="toggle-theme" className="fas fa-moon icon"></i>
          </div>
        </div>
        <input className="mobile-input" type="text" placeholder="Search" />
      </div>
    </nav>
  );
};
