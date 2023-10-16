import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostsView = () => {
  const { isLoading, error, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  
  return (
    <div>
      <h1>Posts View</h1>
      {isLoading && <h3>loading...</h3>}
      {error && <h3>{error}</h3>}

      <section>{posts && posts.map((post) => <div key={post.id}>{post.title}</div>)}</section>
    </div>
  );
};

export default PostsView;
