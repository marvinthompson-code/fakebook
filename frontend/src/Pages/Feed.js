import FeedPosts from "../Components/Posts/FeedPosts";
import FeedPostForm from "../Components/Posts/FeedPostForm";
import Nav from "../Components/Nav";

const Feed = () => {
  return (
    <>
      <Nav />
      <div>
        <h1>Feed</h1>
        <FeedPostForm />
        <FeedPosts />
      </div>
    </>
  );
};

export default Feed;
