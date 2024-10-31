import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TextField, Button, Link} from "@mui/material";

// login function from firebase
import { login } from "../util/firebaseFunctions";

// useDispatch to dispatch the login function from the user slice
import { useDispatch } from "react-redux";

// import updateUser function from the user slice
import { updateUser } from "../store/slices/user/userSlice";

// css
import "../styles/Login.css";

const LoginForm = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const [guestEmail, setGuestEmail] = useState("fakebookGuest@test.com");
  const [guestPassword, setGuestPassword] = useState("test123");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await login(email, password);
      const { user } = res;
      dispatch(updateUser(user));
      navigate("/feed");
    } catch (error) {
      // error handling
      console.log(error.message);
    }
  };

  const handleGuestSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await login(guestEmail, guestPassword);
      dispatch(updateUser(res.user));
      navigate("/feed");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="loginFormContainer">
        <form onSubmit={handleSubmit} className="loginForm">
          <TextField
            error
            id="outlined-basic"
            variant="outlined"
            className="loginInput"
            type="text"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email*"
            required
          />
          <TextField
            error
            id="outlined-basic"
            className="loginInput"
            variant="outlined"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password*"
            required
          />
          <Button
            className="submitButton"
            type="button"
            variant="contained"
            onClick={handleGuestSubmit}
          >
            Guest Login
          </Button>
          <Button className="submitButton" variant="contained" type="submit">Log In</Button>
        </form>
      </div>
      <Link href="/signup">Don't have an account? Sign Up</Link>
    </div>
  );
};

export default LoginForm;
