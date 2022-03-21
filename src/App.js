import { Footer, Header, LandingContainer, Sidebar, Toast } from "./Components";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  AuthContainer,
  LoginBox,
  SignupBox,
} from "./Pages/AuthPage/ProfileComponents";
import RestrictAuth from "./Components/PrivateRoute/RestrictAuth";
import RequireAuth from "./Components/PrivateRoute/RequireAuth";
import { DashboardPage } from "./Pages/DashboardPage/DashboardPage";

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
            <Route path="/" element={<DashboardPage />} />
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
        </Routes>
        <Footer />
      </LandingContainer>
    </>
  );
}

export default App;
