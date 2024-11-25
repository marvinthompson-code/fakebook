import axios from "axios";
import { apiURL } from "../../util/apiURL";
import { useSelector } from "react-redux";
import { selectPosts } from "../../store/slices/posts/postsSlice";

// Components
import Post from "../Posts/Post";
import { useEffect, useState } from "react";

const ProfileFeed = () => {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.user);
  const newPosts = useSelector(selectPosts)
  debugger;
  console.log(newPosts)

  const API = apiURL();

 

  const postIndex = posts.map((post) => {
    return (
      <div key={post.id}>
        <Post post={post} />
      </div>
    );
  });

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        let res = await axios.get(`${API}/api/posts`);
        setPosts(res.data.body.posts);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUserPosts();
  }, []);

  return (
    <>
      {user && (
        <div
          style={{
            textAlign: "-webkit-center",
          }}
        >
          {postIndex}
        </div>
      )}
    </>
  );
};

export default ProfileFeed;
