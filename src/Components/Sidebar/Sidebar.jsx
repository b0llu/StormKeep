import { useLocation } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <div className="sidebar">
        <ul>
          <li className={`${location.pathname === "/" && "selected"}`}>
            <span className="material-icons sidebar-icon">text_snippet</span>
            <span className="sidebar-headers">Notes</span>
          </li>
          <li
            className={`${location.pathname === "/archived" && "selected"}`}
          >
            <span className="material-icons sidebar-icon">archive</span>
            <span className="sidebar-headers">Archived</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};
