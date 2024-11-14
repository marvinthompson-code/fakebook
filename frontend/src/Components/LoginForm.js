import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Link, Card } from "@mui/material";
import { login } from "../util/firebaseFunctions";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/slices/user/userSlice";

// css
import "../styles/Login.css";

const LoginForm = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [guestEmail, setGuestEmail] = useState("testformuser@test.com");
  const [guestPassword, setGuestPassword] = useState("123456");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await login(email, password);
      debugger;
      dispatch(updateUser(res.user));
      navigate("/feed");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  const handleGuestSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await login(guestEmail, guestPassword);
      debugger
      dispatch(updateUser(res.user));
      navigate("/feed");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div style={{
      height: "100vh",
      verticalAlign: "middle",
      // position: "relative",
      textAlign: "-webkit-center"
    }}>

   
    <Card sx={{
      width: "45%",
      paddingTop: "10px",
      top: "50%",
      // position: "absolute",
      // transform: "translateY(-50%)"
    }}>
      <div>
        <h1>Login</h1>
        <div className="loginFormContainer">
          <form onSubmit={handleSubmit} className="loginForm">
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="loginInput"
              type="text"
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email*"
              required
              sx={{
                margin: "5px",
              }}
            />
            <TextField
              id="outlined-basic"
              className="loginInput"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password*"
              required
              sx={{
                margin: "5px",
              }}
            />
            <Button
              className="submitButton"
              type="button"
              variant="contained"
              onClick={handleGuestSubmit}
              sx={{
                margin: "5px",
              }}
            >
              Guest Login
            </Button>
            <Button
              className="submitButton"
              variant="contained"
              type="submit"
              sx={{
                margin: "5px",
              }}
            >
              Log In
            </Button>
          </form>
        </div>
        <div style={{
          paddingBottom: "15px"
        }}>
          <Link href="/signup">Don't have an account? Sign Up</Link>
        </div>
      </div>
    </Card>
    </div>
  );
};

export default LoginForm;
