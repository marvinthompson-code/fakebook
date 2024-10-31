import { useState, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import axios from "axios";

const FeedPosts = () => {
  const [posts, setPosts] = useState([]);

  // const API = apiURL();

  // useEffect(() => {
  //   const fetchAllPosts = async () => {
  //     let res = await axios.get(`${API}/users/`);
  //     setPosts(res.data.body);
  //   };
  //   fetchAllPosts();
  // }, []);

  return <div></div>;
};

export default FeedPosts;
