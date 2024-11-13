import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { apiURL } from "../../util/apiURL";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../store/slices/loading/loadingSlice";
import axios from "axios";
import { selectUser } from "../../store/slices/user/userSlice";

const FeedPostForm = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  // image states
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [toggleUploadMsg, setToggleUploadMsg] = useState(false);

  const user = useSelector(selectUser);
  // const { id } = user;

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
    setLoading(true);
    try {
      await axios.post(`${API}/api/posts`, {
        content,
        imageUrl,
        // id,
        // id,
      });
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
    setLoading(false);
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
            width: "100%",
            marginBottom: "10px",
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
