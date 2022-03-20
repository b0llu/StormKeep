import { useLocation } from "react-router-dom";
import "./LandingContainer.css";

export const LandingContainer = ({ children }) => {
  const location = useLocation();
  console.log(location)

  return (
    <section
      className={
        location.pathname === "/login" || location.pathname === "/signup"
          ? "landing-container-auth"
          : "landing-container"
      }
    >
      {children}
    </section>
  );
};
