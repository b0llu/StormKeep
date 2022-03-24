import { Footer, Header, LandingContainer, Sidebar, Toast } from "./Components";
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

function App() {
  const location = useLocation();

  return (
    <>
      <LandingContainer>
        <Toast />
        <Header />
        {location.pathname === "/login" ||
        location.pathname === "/signup" ? null : (
          <Sidebar />
        )}

        <Routes>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<NotesPage />} />
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
        <Footer />
      </LandingContainer>
    </>
  );
}

export default App;
