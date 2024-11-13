import { Card, Typography, Divider, Tooltip, Box } from "@mui/material";
import mockProfile from "../styles/Pictures/def.jpg";

const FeedProfileCard = () => {
  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <Card
        sx={{
          width: "80%",
        }}
      >
        <Tooltip title="Logged in User" placement="right">
          <div
            style={{
              textAlign: "left",
              marginLeft: "15px",
              marginTop: "5px",
            }}
          >
            <img
              id="postOwnerProfilePicture"
              src={mockProfile}
              alt="default profile pic"
              style={{
                height: "50px",
                borderRadius: "30px",
              }}
            />
          </div>
        </Tooltip>
        <Box>
          <Typography
            sx={{
              textAlign: "left",
              marginLeft: "15px",
              fontWeight: "bold",
            }}
          >
            USER NAME
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              marginLeft: "15px",
              fontSize: "small",
              color: "gray"
            }}
          >
            Smaller text
          </Typography>
          <Divider variant="middle" />
          <br></br>
        </Box>
      </Card>
    </div>
  );
};

export default FeedProfileCard;
