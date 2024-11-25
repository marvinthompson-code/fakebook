import { useState } from "react";
import { TextField, Button, Box, Card } from "@mui/material";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/slices/loading/loadingSlice";
import { createNewPost } from "../../store/slices/posts/postsSlice";

import mockPicture from "../../styles/Pictures/mockHousePic.jpg";

const FeedPostForm = ({ userInfo }) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [toggleUploadMsg, setToggleUploadMsg] = useState(false);

  const dispatch = useDispatch();
  // const { id } = userInfo;

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
    dispatch(
      createNewPost({
        content,
        image_url: imageUrl !== "" ? imageUrl : mockPicture,
      })
    );
    setContent("");
    setLoading(false);
  };

  return (
    <>
      {userInfo && (
        <Box
          sx={{
            marginTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Card
            sx={{
              paddingBottom: "20px",
            }}
          >
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
                    width: "87%",
                    marginBottom: "10px",
                    backgroundColor: "#ffffff",
                    borderRadius: "25px",
                  }}
                />
                <div>
                  <input type="file" />
                  <Button type="button" variant="text">
                    Upload
                  </Button>

                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </Card>
        </Box>
      )}
    </>
  );
};

export default FeedPostForm;
