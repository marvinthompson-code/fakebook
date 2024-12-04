import { Card, Box, Stack, Divider, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import mockProfile from "../../styles/Pictures/def.jpg";
import { useMatch } from "react-router-dom";
import { apiURL } from "../../util/apiURL";

import EditIcon from "@mui/icons-material/Edit";
import EditProfileModal from "./EditProfileModal";

const ProfileHero = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [id, setId] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  // profile picture when upload functionality is fixed

  const match = useMatch("profile/:id");
  const API = apiURL();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        let res = await axios.get(`${API}/api/users/${match.params.id}`);
        debugger;
        const { bio, full_name, username, email, profile_picture } =
          res.data.body.singleUser;
        setBio(bio);
        setFullName(full_name);
        setUserName(username);
        setUserInfo(res.data.body.singleUser);
        setId(res.data.body.singleUser.id);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div
      style={{
        textAlign: "-webkit-center",
      }}
    >
      <Card
        sx={{
          marginTop: "2%",
          width: "40%",
          padding: "25px",
          background: "#FFFFFF",
          border: "1px solid #A1A5A5",
        }}
      >
        <Box>
          <Box>
            <img
              src={mockProfile}
              style={{
                borderRadius: "50%",
                width: "20%",
                margin: "10px",
                border: "2px solid #F5F5F5",
              }}
            />
          </Box>
          <Typography
            variant="h5"
            sx={{
              textAlign: "left",
              fontSize: "1.5rem",
              color: "#2CA093",
            }}
          >
            {username}
          </Typography>

          <Typography
            sx={{
              fontSize: "medium",
              textAlign: "left",
              color: "#060E0D",
            }}
          >
            {bio}
          </Typography>
          <Divider
            sx={{
              background: "#F5F5F5",
              margin: "5px",
            }}
          />
        </Box>
        {match.params.id === id ? (
          <ul>
            <li
              className="FeedProfileCardLi"
              style={{
                margin: "1px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              {" "}
              <EditIcon
                fontSize="small"
                sx={{
                  paddingRight: "5px",
                }}
              />{" "}
              <Typography
                onClick={handleOpen}
                sx={{
                  fontSize: "15px",
                }}
              >
                Edit Profile
              </Typography>
            </li>
          </ul>
        ) : null}
      </Card>
      <EditProfileModal
        isOpen={isOpen}
        handleClose={handleClose}
        userInfo={userInfo}
      />
    </div>
  );
};

export default ProfileHero;
