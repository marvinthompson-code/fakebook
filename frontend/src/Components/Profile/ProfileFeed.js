import axios from "axios";
import { apiURL } from "../../util/apiURL";
import { useSelector } from "react-redux";
import { selectPosts } from "../../store/slices/posts/postsSlice";
import { useMatch } from "react-router-dom";

// Components
import Post from "../Posts/Post";
import { useEffect, useState } from "react";

const ProfileFeed = () => {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.user);
  const newPosts = useSelector(selectPosts)
  
  console.log(newPosts)

  const API = apiURL();
  const match = useMatch('profile/:id')
 

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
        let res = await axios.get(`${API}/api/posts/user/${match.params.id}`);
        
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
