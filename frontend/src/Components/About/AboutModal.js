import { Box, Button, Typography, Modal } from "@mui/material";

import fullLogo from "../../styles/Logo/scrollme2.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FFFFFF",
  border: "2px solid #000",
  borderRadius: "25px",
  boxShadow: 24,
  p: 4,
};

const AboutModal = ({ isOpen, handleClose }) => {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{
            textAlign: "center"
          }}>
            <img
              src={fullLogo}
              style={{
                height: "200px",
                textAlign: "center"
              }}
            />
          </div>
          <Typography sx={{
            color: "#2CA093"
          }}>About</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Scroll.Me is a social media project designed by Marvin Thompson. This project is built using React, Express, and other technologies.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default AboutModal;
