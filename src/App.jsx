import { Routes, Route, useLocation } from "react-router-dom";
import MyNavbar from "./components/Header/MyNavbar";
import HomePage from "./components/HomePage";
import SignupPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import VideoLoadPage from "./components/VideoLoadPage";

function App() {
  const location = useLocation(); // To get the current location (route)

  return (
    <>
      {/* Conditionally render MyNavbar only on routes other than /signup and /login */}
      {location.pathname !== "/signup" && location.pathname !== "/login" && <MyNavbar />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video" element={<VideoLoadPage />} />
      </Routes>
    </>
  );
}

export default App;
