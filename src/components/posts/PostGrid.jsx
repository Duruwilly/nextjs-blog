import React from "react";
import PostItem from "./PostItem";

const PostGrid = (props) => {
  const { posts } = props;
  return (
    <ul className="list-none m-0 p-0 grid gap-6 content-center grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))]">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
