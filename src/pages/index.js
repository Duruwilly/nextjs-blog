import React from "react";
import { getFeaturedPosts } from "../../lb/post-util";
import FeaturedPost from "../components/homePage/FeaturedPost";
import Heroe from "../components/homePage/Heroe";

// const DUMMY_BLAST = [
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

const HomePage = (props) => {
  return (
    <>
      <Heroe />
      <FeaturedPost posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPost = getFeaturedPosts();

  return {
    props: {
      posts: featuredPost,
    },
  };
}

export default HomePage;
