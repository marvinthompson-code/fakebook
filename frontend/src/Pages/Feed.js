import FeedPosts from "../Components/Posts/FeedPosts";
import FeedPostForm from "../Components/Posts/FeedPostForm";
import Nav from "../Components/Nav";

import { Divider } from "@mui/material";
import FeedProfileCard from "../Components/FeedProfileCard";
import FeedNewsCard from "../Components/FeedNewsCard";
const Feed = () => {
  return (
    <>
      <Nav />
      <>
        <div
          className="row"
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <div
            style={{
              width: "33.33%",
              float: "left",
              display: "flex",
              flexDirection: "column",
              textAlign: "-webkit-center"
            }}
          >
            <FeedProfileCard />
          </div>
          <div style={{
            width: "33.33%",
            display: "flex",
            flexDirection: "column"
          }}>
            <FeedPostForm />
            <div
          style={{
            textAlign: "-webkit-center",
          }}
        >
          <Divider
            sx={{
              marginTop: "30px"
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
              textAlign: "-webkit-center"
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
