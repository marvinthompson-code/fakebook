import FeedPosts from "../Components/Posts/FeedPosts";
import FeedPostForm from "../Components/Posts/FeedPostForm";

const Feed = () => {
  
  return (
    <div>
        <h1>Feed</h1>
        <FeedPostForm />
        <FeedPosts />
    </div>
  );
};

export default Feed;
