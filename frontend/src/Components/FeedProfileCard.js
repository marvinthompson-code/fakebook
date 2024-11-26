import { Card, Typography, Divider, Tooltip, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import mockProfile from "../styles/Pictures/def.jpg";

const FeedProfileCard = ({ userInfo }) => {
  const navigate = useNavigate();

  return (
    <>
      {userInfo && (
        <div
          style={{
            padding: "10px",
          }}
        >
          <Card
            sx={{
              width: "80%",
              backgroundColor: "#FFFFFF",
              border: "1px solid #F5F5F5"
            }}
          >
            <Tooltip title={userInfo.username} placement="right">
              <div
                style={{
                  textAlign: "left",
                  marginLeft: "15px",
                  marginTop: "5px",
                }}
                onClick={() => navigate(`/profile/${userInfo.id}`)}
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
                  color: "#2CA093"
                }}
              >
                {userInfo.username}
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  marginLeft: "15px",
                  fontSize: "small",
                  color: "#060E0D",
                }}
              >
                {userInfo.bio}
              </Typography>
              <Divider variant="inset" sx={{
                marginTop: "5px",
                background: "#F5F5F5"
              }}/>
              <br></br>
            </Box>
          </Card>
        </div>
      )}
    </>
  );
};

export default FeedProfileCard;
