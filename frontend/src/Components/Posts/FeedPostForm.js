import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { apiURL } from "../../util/apiURL";
import { storage } from "../../firebase";
import axios from "axios";

const FeedPostForm = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  // image states
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [toggleUploadMsg, setToggleUploadMsg] = useState(false);

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
    // axios.post request goes here
    try {
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        paddingTop: "10px",
      }}
    >
      <div>
        <TextField
          multiline
          placeholder="What's on your mind?"
          onChange={(e) => setContent(e.target.value)}
          sx={{
            width: "60%",
            margin: "10px",
          }}
        />
        <div>
          <div>
            <input type="file" />
            <Button type="button" variant="outlined">
              Upload
            </Button>
          </div>

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FeedPostForm;
