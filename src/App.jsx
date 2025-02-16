import { Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Header/MyNavbar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
