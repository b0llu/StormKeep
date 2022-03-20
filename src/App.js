import { Footer, Header, LandingContainer, Sidebar } from "./Components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <LandingContainer>
        <Header />
        <Sidebar />
        <Routes>
        </Routes>
        <Footer />
      </LandingContainer>
    </>
  );
}

export default App;
