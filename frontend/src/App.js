import "./App.css";
import { Route, Routes,} from "react-router-dom";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { updateUser } from "./store/slices/user/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { selectToken } from "./store/slices/user/tokenSlice";

// Pages
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import Feed from "./Pages/Feed";

// testing components
import FeedProfileCard from "./Components/FeedProfileCard";
import Profile from "./Pages/Profile";

function App() {
  const [color, setColor] = useState("#EBEBEB");
  const [token, setToken] = useState(null)

  const auth = getAuth();
  const dispatch = useDispatch();
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch(updateUser(user));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const authToken = dispatch(selectToken)
    setToken(authToken)
  }, [])

  return (
    <div
      className="App"
      style={{
        background: color,
      }}
    >
      <Routes>
        <Route exact path={"/"} element={<LoginPage />} />
        <Route exact path={"/signup"} element={<SignUpPage />} />
        <Route exact path={"/feed"} element={ <Feed />} />
        <Route exact path={"/profile/:id"} element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
