import AllPost from "@/components/posts/AllPost";
import React from "react";
import { getAllPosts } from "../../../lb/post-util";

// const DUMMY_DATA = [
//   {
//     slug: 'getting-started-with-nextjs',
//     title: 'Getting started with NextJS',
//     image: 'post.jpg',
//     excerpt: 'NextJS is s React framework for production - it makes building React application fullstack which makes it easy',
//     date: '2023-09-01'
//   },
//   {
//     slug: 'getting-started-with-nextjs2',
//     title: 'Getting started with NextJS',
//     image: 'post.jpg',
//     excerpt: 'NextJS is s React framework for production - it makes building React application fullstack which makes it easy',
//     date: '2023-09-01'
//   },
//   {
//     slug: 'getting-started-with-nextjs3',
//     title: 'Getting started with NextJS',
//     image: 'post.jpg',
//     excerpt: 'NextJS is s React framework for production - it makes building React application fullstack which makes it easy',
//     date: '2023-09-01'
//   },
//   {
//     slug: 'getting-started-with-nextjs4',
//     title: 'Getting started with NextJS',
//     image: 'post.jpg',
//     excerpt: 'NextJS is s React framework for production - it makes building React application fullstack which makes it easy',
//     date: '2023-09-01'
//   }
// ]

const PostsPage = (props) => {
  return <AllPost posts={props.posts} />;
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default PostsPage;
