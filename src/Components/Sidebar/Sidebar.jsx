import { useLocation, Link } from "react-router-dom";
import { ArchivedPage } from "../../Pages/ArchivedPage/ArchivedPage";
import { NotesPage } from "../../Pages/NotesPage/NotesPage";
import "./Sidebar.css";

export const Sidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <div className="sidebar">
        <ul>
          <Link to="/" element={<NotesPage />}>
            <li className={`${location.pathname === "/" && "selected"}`}>
              <span className="material-icons sidebar-icon">text_snippet</span>
              <span className="sidebar-headers">Notes</span>
            </li>
          </Link>
          <Link to="/archives" element={<ArchivedPage />}>
            <li
              className={`${location.pathname === "/archives" && "selected"}`}
            >
              <span className="material-icons sidebar-icon">archive</span>
              <span className="sidebar-headers">Archived</span>
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  );
};
