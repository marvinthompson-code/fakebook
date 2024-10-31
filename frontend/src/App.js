import "./App.css";
import { Route, Routes } from "react-router-dom";

// Pages
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import Feed from "./Pages/Feed";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<LoginPage />} />
        <Route exact path={"/signup"} element={<SignUpPage />} />
        <Route exact path={"/feed"} element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
