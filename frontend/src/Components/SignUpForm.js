import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signUp } from "../util/firebaseFunctions";

import { TextField, Button, Link } from "@mui/material";

// css
import "../styles/SignUp.css";

const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // fire signup firebase function
    if (password === confirmPassword) {
      navigate("/feed");
    }
  };
  return (
    <>
      <h1>Sign Up</h1>
      <div className="signupFormContainer">
        <form onSubmit={handleSubmit} className="signupForm">
          <TextField
            className="signupInput"
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full name*"
            variant="outlined"
            required
          />
          <TextField
            className="signupInput"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username*"
            variant="outlined"
            required
          />
          <TextField
            className="signupInput"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email*"
            variant="outlined"
            required
          />
          <TextField
            className="signupInput"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password*"
            variant="outlined"
            required
          />
          <TextField
            className="signupInput"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password*"
            variant="outlined"
            required
          />
          <Button type="submit" variant="contained" className="submitButton">Sign Up</Button>
        </form>
      </div>
      <Link href="/">Back to Login</Link>
    </>
  );
};

export default SignUpForm;
