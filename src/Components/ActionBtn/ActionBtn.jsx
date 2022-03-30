import { Link, useLocation } from "react-router-dom";
import "./ActionBtn.css";

export const ActionBtn = () => {
  const location = useLocation();

  return (
    <Link to="/notes">
      {(location.pathname === "/labels" ||
        location.pathname === "/archives" ||
        location.pathname === "/trash") && (
        <button className="action-btn">+</button>
      )}
    </Link>
  );
};
