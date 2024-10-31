import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
          <input
            className="loginInput"
            type="text"
            onChange={(e) => setemail(e.target.value)}
            placeholder="email*"
            required
          />
          <input
            className="loginInput"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password*"
            required
          />
          <button className="submitButton" type="button" onClick={handleGuestSubmit}>
            Guest Login
          </button>
          <input className="submitButton" type="submit" />
        </form>
      </div>
      <a href="/signup">Don't have an account? Sign Up</a>
    </div>
  );
};

export default LoginForm;
