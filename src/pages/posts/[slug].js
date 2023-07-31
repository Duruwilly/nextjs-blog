import React from "react";
import { getPostData, getPostFiles } from "../../../lb/post-util";
import PostContent from "./PostDetail/PostContent";

const PostDetailsPage = (props) => {
  return <PostContent post={props.post} />;
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  // this would read the data for that file because
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map((filename) => filename.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailsPage;
