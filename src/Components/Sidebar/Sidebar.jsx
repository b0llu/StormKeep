import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useNoteContext } from "../../Context/Notes.context";
import { useReducerContext } from "../../Context/Reducer.context";
import { NotesPage } from "../../Pages/NotesPage/NotesPage";
import { Loader } from "../Loader/Loader";
import { labelTypes } from "./label-type.data";
import "./Sidebar.css";

export const Sidebar = () => {
  const { notes } = useNoteContext();
  const { dispatch, labels, loading, priority, timeSort } = useReducerContext();
  const [notesState, setNotesState] = useState(false);
  const [labelsState, setLabelsState] = useState(false);
  const location = useLocation();

  return (
    <aside>
      <div className="sidebar">
        <ul>
          <Link to="/notes" element={<NotesPage />}>
            <li className={`${location.pathname === "/notes" && "selected"}`}>
              <span className="material-icons sidebar-icon">text_snippet</span>
              <span className="sidebar-headers">Notes</span>
            </li>
            {location.pathname === "/notes" &&
              notes.length !== 0 &&
              (notesState ? (
                <span
                  onClick={() => setNotesState(!notesState)}
                  className="material-icons mobile-view"
                >
                  expand_less
                </span>
              ) : (
                <span
                  onClick={() => setNotesState(!notesState)}
                  className="material-icons mobile-view"
                >
                  expand_more
                </span>
              ))}
          </Link>
          {location.pathname === "/notes" && notes.length !== 0 && (
            <ul className={`label-list ${notesState && "for-mobile"}`}>
              <button
                onClick={() => dispatch({ type: "PRIORITY_RESET" })}
                className="reset-btn"
              >
                Reset
              </button>
              <span className="sort-header">Sort by Priority :</span>
              <label>
                <input
                  className="label-input"
                  type="checkbox"
                  value="High"
                  checked={priority.includes("High")}
                  onChange={(e) => {
                    dispatch({
                      type: "PRIORITY_FILTER",
                      filterType: "priority",
                      filter: e.target.value,
                    });
                  }}
                />
                High
              </label>
              <label>
                <input
                  className="label-input"
                  type="checkbox"
                  value="Medium"
                  checked={priority.includes("Medium")}
                  onChange={(e) => {
                    dispatch({
                      type: "PRIORITY_FILTER",
                      filterType: "priority",
                      filter: e.target.value,
                    });
                  }}
                />
                Medium
              </label>
              <label>
                <input
                  className="label-input"
                  type="checkbox"
                  value="Low"
                  checked={priority.includes("Low")}
                  onChange={(e) => {
                    dispatch({
                      type: "PRIORITY_FILTER",
                      filterType: "priority",
                      filter: e.target.value,
                    });
                  }}
                />
                Low
              </label>
              <span className="sort-header">Sort by Date :</span>
              <label>
                <input
                  className="label-input"
                  type="radio"
                  name="time"
                  checked={timeSort === "Latest"}
                  onChange={() => {
                    dispatch({
                      type: "LATEST",
                    });
                  }}
                />
                Latest
              </label>
              <label>
                <input
                  className="label-input"
                  type="radio"
                  name="time"
                  checked={timeSort === "Old"}
                  onChange={() => {
                    dispatch({
                      type: "OLD",
                    });
                  }}
                />
                Old
              </label>
            </ul>
          )}
          <Link to="labels">
            <li className={`${location.pathname === "/labels" && "selected"}`}>
              <span className="material-icons sidebar-icon">label</span>
              <span className="sidebar-headers">Labels</span>
            </li>
            {location.pathname === "/labels" &&
              notes.length !== 0 &&
              (labelsState ? (
                <span
                  onClick={() => setLabelsState(!labelsState)}
                  className="material-icons mobile-view"
                >
                  expand_less
                </span>
              ) : (
                <span
                  onClick={() => setLabelsState(!labelsState)}
                  className="material-icons mobile-view"
                >
                  expand_more
                </span>
              ))}
          </Link>
          {location.pathname === "/labels" && notes.length !== 0 && (
            <ul className={`label-list ${labelsState && "for-mobile"}`}>
              <button
                onClick={() => dispatch({ type: "LABEL_RESET" })}
                className="reset-btn"
              >
                Reset
              </button>
              {labelTypes.map((label) => {
                return (
                  <div key={label.type}>
                    {loading ? (
                      <Loader />
                    ) : (
                      <label>
                        <input
                          className="label-input"
                          type="checkbox"
                          value={label.type}
                          checked={labels.includes(label.type)}
                          onChange={(e) => {
                            dispatch({
                              type: "LABEL_FILTER",
                              filterType: "labels",
                              filter: e.target.value,
                            });
                          }}
                        />
                        {label.type}
                      </label>
                    )}
                  </div>
                );
              })}
            </ul>
          )}
          <Link to="/archives">
            <li
              className={`${location.pathname === "/archives" && "selected"}`}
            >
              <span className="material-icons sidebar-icon">archive</span>
              <span className="sidebar-headers">Archived</span>
            </li>
          </Link>
          <Link to="/trash">
            <li className={`${location.pathname === "/trash" && "selected"}`}>
              <span className="material-icons sidebar-icon">
                delete_forever
              </span>
              <span className="sidebar-headers">Trashed</span>
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  );
};
