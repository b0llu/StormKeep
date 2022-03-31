import {
  ActionBtn,
  Footer,
  Header,
  LandingContainer,
  Sidebar,
  Toast,
} from "./Components";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  AuthContainer,
  LoginBox,
  SignupBox,
} from "./Pages/AuthPage/ProfileComponents";
import RestrictAuth from "./Components/PrivateRoute/RestrictAuth";
import RequireAuth from "./Components/PrivateRoute/RequireAuth";
import { NotesPage } from "./Pages/NotesPage/NotesPage";
import MockAPI from "./Mockman";
import { ArchivedPage } from "./Pages/ArchivedPage/ArchivedPage";
import { LabelPage } from "./Pages/LabelPage/LabelPage";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { TrashPage } from "./Pages/TrashPage/TrashPage";

function App() {
  const location = useLocation();

  return (
    <LandingContainer>
      <Toast />
      <Header />
      {location.pathname === "/login" ||
        location.pathname === "/signup" ||
        (location.pathname === "/" ? null : <Sidebar />)}

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route element={<RequireAuth />}>
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/archives" element={<ArchivedPage />} />
          <Route path="/labels" element={<LabelPage />} />
          <Route path="/trash" element={<TrashPage />} />
        </Route>

        <Route element={<RestrictAuth />}>
          <Route
            path="/login"
            element={
              <AuthContainer>
                <LoginBox />
              </AuthContainer>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthContainer>
                <SignupBox />
              </AuthContainer>
            }
          />
        </Route>
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
      <ActionBtn />
      <Footer />
    </LandingContainer>
  );
}

export default App;
