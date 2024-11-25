import { useState, useEffect } from "react";
import FeedPosts from "../Components/Posts/FeedPosts";
import FeedPostForm from "../Components/Posts/FeedPostForm";
import Nav from "../Components/Nav";
import { Divider } from "@mui/material";
import FeedProfileCard from "../Components/FeedProfileCard";
import FeedNewsCard from "../Components/FeedNewsCard";

import { apiURL } from "../util/apiURL";
import { selectUser } from "../store/slices/user/userSlice";
import { useSelector } from "react-redux";

import axios from "axios";

const Feed = () => {
  const [userInfo, setUserInfo] = useState(null)

  const API = apiURL();
  const user = useSelector(selectUser);
  console.log("THIS IS USER: ", user);

  useEffect(() => {
    const fetchCurrentUserInfo = async () => {
      try {
        if (user) {
          let res = await axios.get(`${API}/api/users/${user.id}`);
          const { singleUser } = res.data.body
          setUserInfo(singleUser)
          debugger;
        }
      } catch (error) {
        console.log(error.message)
      }
    };

    fetchCurrentUserInfo();
  }, [user]);
  return (
    <>
      <Nav />
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
            <FeedProfileCard userInfo={userInfo}/>
          </div>
          <div
            style={{
              width: "33.33%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FeedPostForm userInfo={userInfo}/>
            <div
              style={{
                textAlign: "-webkit-center",
              }}
            >
              <Divider
                sx={{
                  marginTop: "5%",
                }}
                variant="middle"
              />
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
            <FeedNewsCard />
          </div>
        </div>
        <FeedPosts />
      </>
    </>
  );
};

export default Feed;
