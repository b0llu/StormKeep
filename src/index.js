import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/Auth.context";
import { ReducerProvider } from "./Context/Reducer.context";
import { NoteProvider } from "./Context/Notes.context";
import { ArchivedNotesProvider } from "./Context/ArchivedNotes.context";
import { ThemeProvider } from "./Context/Theme.context";
import { TrashProvider } from "./Context/Trash.context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ReducerProvider>
      <TrashProvider>
        <NoteProvider>
          <ArchivedNotesProvider>
            <AuthProvider>
              <ThemeProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </ThemeProvider>
            </AuthProvider>
          </ArchivedNotesProvider>
        </NoteProvider>
      </TrashProvider>
    </ReducerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
