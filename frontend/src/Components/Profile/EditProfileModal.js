import { Box, Button, Typography, Modal, TextField } from "@mui/material";

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

const EditProfileModal = ({ isOpen, handleClose }) => {
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
          <TextField sx={{
            width: "100%",
            margin: "5px"
          }} placeholder="Edit Username*"/>
          <TextField sx={{
            width: "100%",
            margin: "5px"
          }} placeholder="Edit Bio*"/>
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
        </Box>
      </Modal>
    </div>
  );
};

export default EditProfileModal