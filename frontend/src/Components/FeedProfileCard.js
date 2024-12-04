import { Card, Typography, Divider, Tooltip, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person"
import mockProfile from "../styles/Pictures/def.jpg";
import EditProfileModal from "../Components/Profile/EditProfileModal"

import "../styles/FeedProfileCard.css"

const FeedProfileCard = ({ userInfo }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

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
              border: "1px solid #F5F5F5",
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
                  color: "#2CA093",
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
              <Divider
                sx={{
                  margin: "5px",
                  background: "#F5F5F5",
                }}
              />
              <ul
                style={{
                  listStyleType: "none",
                  textAlign: "left",
                  paddingLeft: "10px"
                }}
              >
                <li
                className="FeedProfileCardLi"
                  style={{
                    margin: "1px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <PersonIcon fontSize="small" sx={{
                    paddingRight: "5px"
                  }}/>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      margin: "1px"
                    }}
                    onClick={() => navigate(`/profile/${userInfo.id}`)}
                  >
                    View Profile
                  </Typography>
                </li>
                <li
                className="FeedProfileCardLi"
                  style={{
                    margin: "1px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {" "}
                  <EditIcon fontSize="small" sx={{
                    paddingRight: "5px"
                  }}/>{" "}
                  <Typography
                    sx={{
                      fontSize: "15px",
                    }}
                    onClick={handleOpen}
                  >
                    Edit Profile
                  </Typography>
                </li>
              </ul>
            </Box>
          </Card>
          <EditProfileModal isOpen={isOpen} handleClose={handleClose} userInfo={userInfo}/>
        </div>
      )}
    </>
  );
};

export default FeedProfileCard;
