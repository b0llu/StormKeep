import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/Auth.context";
import { ReducerProvider } from "./Context/Reducer.context";
import { NoteProvider } from "./Context/Notes.context";
import { ArchivedNotesProvider } from "./Context/ArchivedNotes.context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ReducerProvider>
      <NoteProvider>
        <ArchivedNotesProvider>
          <AuthProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AuthProvider>
        </ArchivedNotesProvider>
      </NoteProvider>
    </ReducerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
