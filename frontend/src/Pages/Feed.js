import { useState, useEffect } from "react";
import FeedPosts from "../Components/Posts/FeedPosts";
import FeedPostForm from "../Components/Posts/FeedPostForm";
import Nav from "../Components/Nav";
import AboutModal from "../Components/About/AboutModal";
import FeedProfileCard from "../Components/FeedProfileCard";
import FeedNewsCard from "../Components/FeedNewsCard";

import { apiURL } from "../util/apiURL";
import { selectUser } from "../store/slices/user/userSlice";
import { useSelector } from "react-redux";

import { Divider } from "@mui/material";

import axios from "axios";
import SuggestedFriendsGrid from "../Components/SuggestedFriendsGrid";

const Feed = () => {
  const [userInfo, setUserInfo] = useState(null);

  // Modal stuff
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const API = apiURL();
  const user = useSelector(selectUser);

  useEffect(() => {
    const fetchCurrentUserInfo = async () => {
      try {
        if (user) {
          let res = await axios.get(`${API}/api/users/${user.id}`);
          const { singleUser } = res.data.body;
          setUserInfo(singleUser);
          debugger;
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCurrentUserInfo();
  }, [user]);
  return (
    <>
      <Nav handleOpen={handleOpen} />
      <>
        <div
          className="row"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "33.33%",
              float: "left",
              display: "flex",
              flexDirection: "column",
              textAlign: "-webkit-center",
            }}
          >
            <FeedProfileCard userInfo={userInfo} />
          </div>
          <div
            style={{
              width: "33.33%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FeedPostForm userInfo={userInfo} />
            <div
              style={{
                textAlign: "-webkit-center",
              }}
            >
              <Divider />
            </div>
          </div>
          <div
            style={{
              width: "33.33%",
              float: "right",
              display: "flex",
              flexDirection: "column",
              textAlign: "-webkit-center",
            }}
          >
            <div style={{}}>
              <FeedNewsCard />
              <SuggestedFriendsGrid />
            </div>
          </div>
        </div>
        <FeedPosts userInfo={userInfo} />
        <AboutModal isOpen={isOpen} handleClose={handleClose} />
      </>
    </>
  );
};

export default Feed;
