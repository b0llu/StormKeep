import { Footer, Header, LandingContainer, Sidebar } from "./Components";
import { Routes, Route } from "react-router-dom";
import {
  AuthContainer,
  LoginBox,
  SignupBox,
} from "./Pages/AuthPage/ProfileComponents";
import RestrictAuth from "./Components/PrivateRoute/RestrictAuth";
import RequireAuth from "./Components/PrivateRoute/RequireAuth";

function App() {
  return (
    <>
      <LandingContainer>
        <Header />
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/" element={<div>hi</div>} />
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
                  <LoginBox />
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
