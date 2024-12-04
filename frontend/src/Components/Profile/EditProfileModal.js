import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FFFFFF",
  border: "1px solid #F5F5F5",
  borderRadius: "25px",
  boxShadow: 24,
  p: 4,
};

const EditProfileModal = ({ isOpen, handleClose, userInfo }) => {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  const API = apiURL();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${API}/api/users/edit`, {
        id: userInfo.id,
        username,
        bio,
      });
      debugger;
      navigate("/feed");
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setUsername(userInfo.username);
    setBio(userInfo.bio);
  }, []);
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              color: "#2CA093",
            }}
          >
            Edit Profile
          </Typography>

          <form>
            <TextField
              sx={{
                width: "100%",
                margin: "5px",
              }}
              placeholder="Edit Username*"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              sx={{
                width: "100%",
                margin: "5px",
              }}
              placeholder="Edit Bio*"
              onChange={(e) => setBio(e.target.value)}
            />
            <Box
              sx={{
                justifyContent: "space-between",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              <Button
                sx={{
                  margin: "5px",
                  color: "#FFFFFF",
                  background: "#2CA093",
                }}
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button
                sx={{
                  margin: "5px",
                }}
                onClick={handleClose}
              >
                Back
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditProfileModal;
