import { Routes, Route, useLocation } from "react-router-dom";
import MyNavbar from "./components/Header/MyNavbar";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

function App() {
  const location = useLocation();

  return (
    <>
      {!(location.pathname === "/login" || location.pathname === "/signup") && <MyNavbar />}
      
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
