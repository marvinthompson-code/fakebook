import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/slices/user/userSlice";
import { signUp } from "../util/firebaseFunctions";
import { storage } from "../firebase";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import { Card } from "@mui/material";
import scrollmeicon from "../styles/Logo/scrollme2.png"
import { TextField, Button, Link } from "@mui/material";
// css
import "../styles/SignUp.css";

const mockImageUrl = "IMAGEURL";



const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [bio, setBio] = useState("");

  // image states
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [toggleUploadMsg, setToggleUploadMsg] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const API = apiURL();

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    const types = ["image/png", "image/jpeg", "image/gif", "image/jpg"];
    if (types.every((type) => image.type !== type)) {
      alert(`${image.type} is not a supported format`);
    } else {
      setImageAsFile((imageFile) => image);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (confirmPassword === password) {
        let res = await signUp(email, password);
        debugger;
        console.log("Show user: ", res);

        const { uid } = res.user;

        let res2 = await axios.post(`${API}/api/users/addUser`, {
          id: uid,
          fullName,
          username,
          email,
          mockImageUrl,
          bio,
        });

        debugger;
        dispatch(updateUser(res.user));
        navigate("/feed");
      } else {
        alert("Passwords do not match");
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        verticalAlign: "middle",
        textAlign: "-webkit-center",
        paddingTop: "5%"
      }}
    >
      <Card sx={{
        width: "45%",
        paddingTop: "10px",
        top: "50%",
        borderRadius: "25px"
      }}>
          <img src={scrollmeicon} style={{
            height: "200px"
          }}/>
        <div className="signupFormContainer">
          <form onSubmit={handleSubmit} className="signupForm">
            <TextField
              className="signupInput"
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full name*"
              variant="outlined"
              required
              sx={{
                margin: "5px",
              }}
            />
            <TextField
              className="signupInput"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username*"
              variant="outlined"
              required
              sx={{
                margin: "5px",
              }}
            />
            <div>
              <input
                type="file"
                onChange={handleImageAsFile}
                placeholder="Select profile picture"
              />
              <Button>Upload Profile Picture</Button>
            </div>

            <TextField
              className="signupInput"
              onChange={(e) => setBio(e.target.value)}
              placeholder="Bio/Description"
              variant="outlined"
              multiline
              sx={{
                margin: "5px",
              }}
            />
            <TextField
              className="signupInput"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email*"
              variant="outlined"
              required
              sx={{
                margin: "5px",
              }}
            />
            <TextField
              className="signupInput"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password*"
              variant="outlined"
              required
              sx={{
                margin: "5px",
              }}
            />
            <TextField
              className="signupInput"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password*"
              variant="outlined"
              required
              sx={{
                margin: "5px",
              }}
            />
            <Button
              type="submit"
              variant="contained"
              className="submitButton"
              sx={{
                margin: "5px",
                color: "#FFFFFF",
                background: "#2CA093",
              }}
            >
              Sign Up
            </Button>
          </form>
        </div>
        <div style={{
          paddingBottom: "15px",
          color: "#060E0D"
        }}>


        <Link href="/">Back to Login</Link>
        </div>
      </Card>
    </div>
  );
};

export default SignUpForm;
