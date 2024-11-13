import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { updateUser } from "./store/slices/user/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

// Pages
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import Feed from "./Pages/Feed";

// testing components
import Post from "../src/Components/Posts/Post"
import Nav from "../src/Components/Nav"
import FeedNewsCard from "./Components/FeedNewsCard";
import FeedProfileCard from "./Components/FeedProfileCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<LoginPage />} />
        <Route exact path={"/signup"} element={<SignUpPage />} />
        <Route exact path={"/feed"} element={<Feed />} />
        <Route exact path={"/dev"}  element={<FeedProfileCard />}/>
      </Routes>
    </div>
  );
}

export default App;
