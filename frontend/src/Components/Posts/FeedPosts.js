import { useState, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import { selectLoading } from "../../store/slices/loading/loadingSlice";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../store/slices/loading/loadingSlice";
import axios from "axios";
import {
  recieveAllPosts,
  selectPosts,
} from "../../store/slices/posts/postsSlice";

// Components
import Post from "../Posts/Post";

const FeedPosts = ({ userInfo}) => {
  const posts = useSelector(selectPosts);
  const API = apiURL();
  const dispatch = useDispatch();
  const loading = dispatch(selectLoading);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        dispatch(setLoading(true));
        let res = await axios.get(`${API}/api/posts`);
        const { posts } = res.data.body;
        dispatch(recieveAllPosts(posts));
        dispatch(setLoading(false));
      } catch (error) {
        console.log(error.messaage);
      }
    };

    fetchAllPosts();
  }, []);

  // remember to account for posts that arent yours for share functionality
  const feedPosts = posts.map((post) => {
    return (
      <div key={post.id}>
        <Post post={post} userInfo={userInfo} />
      </div>
    );
  });

  return (
    <div
      style={{
        textAlign: "-webkit-center",
      }}
    >
      {feedPosts}
    </div>
  );
};

export default FeedPosts;
