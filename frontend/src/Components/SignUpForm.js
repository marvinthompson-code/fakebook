import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signUp } from "../util/firebaseFunctions";

// css
import "../styles/SignUp.css"

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
    navigate("/feed");
  };
  return (
    <>
      <h1>Sign Up</h1>
      <div className="signupFormContainer">
        <form onSubmit={handleSubmit} className="signupForm">
          <input
            className="signupInput"
            onChange={(e) => setFullName(e.target.value)}
            placeholder="full name*"
            required
          />
          <input
            className="signupInput"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username*"
            required
          />
          <input
            className="signupInput"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email*"
            required
          />
          <input
            className="signupInput"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password*"
            required
          />
          <input
            className="signupInput"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="confirm password*"
            required
          />
          <input type="submit" className="submitButton" />
        </form>
      </div>
      <a  href="/">Back to Login</a>
    </>
  );
};

export default SignUpForm;
