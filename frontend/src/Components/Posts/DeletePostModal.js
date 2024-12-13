import { Box, Button, Typography, Modal } from "@mui/material";
import { useDispatch } from "react-redux";
import { deletePostAsync } from "../../store/slices/posts/postsSlice";
import { useNavigate } from "react-router-dom";

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

const DeletePostModal = ({ isOpen, handleClose, postId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(deletePostAsync(postId));
    navigate("/feed");
    window.location.reload();
  };

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
            Confirm
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you'd like to delete this post?
          </Typography>
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
              onClick={handleClick}
            >
              Delete
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
        </Box>
      </Modal>
    </div>
  );
};

export default DeletePostModal;
