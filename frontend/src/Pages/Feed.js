import FeedPosts from "../Components/Posts/FeedPosts";
import FeedPostForm from "../Components/Posts/FeedPostForm";
import Nav from "../Components/Nav";

const Feed = () => {
  return (
    <>
      <Nav />
      <div>
        <FeedPostForm />
        <FeedPosts />
      </div>
    </>
  );
};

export default Feed;
