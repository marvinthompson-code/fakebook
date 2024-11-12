import { useState, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import axios from "axios";

// Components
import Post from "../Posts/Post";

const FeedPosts = () => {
  const [posts, setPosts] = useState([]);

  const API = apiURL();

  useEffect(() => {
    const fetchAllPosts = async () => {
      let res = await axios.get(`${API}/api/posts`);
      const { posts } = res.data.body;
      setPosts(posts);
    };

    fetchAllPosts();
  }, []);

  // remember to account for posts that arent yours for share functionality
  const feedPosts = posts.map((post) => {
    return (
      <div key={post.id}>
        <Post post={post} />
      </div>
    );
  });

  return <div style={{
    textAlign: "-webkit-center"
  }}>{feedPosts}</div>;
};

export default FeedPosts;
