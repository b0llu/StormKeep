import { useState } from "react";
import "./Sidebar.css";

export const Sidebar = () => {
  const [click, setClick] = useState(true);
  return (
    <aside>
      <div className="sidebar">
        <ul>
          <li
            onClick={() => setClick(true)}
            className={`${click ? "selected" : ""}`}
          >
            <span className="material-icons sidebar-icon">text_snippet</span>
            <span className="sidebar-headers">Notes</span>
          </li>
          <li
            onClick={() => setClick(false)}
            className={`${click ? "" : "selected"}`}
          >
            <span class="material-icons sidebar-icon">archive</span>
            <span className="sidebar-headers">Archived</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};
