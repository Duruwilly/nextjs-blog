import React from "react";
import PostGrid from "../posts/PostGrid";
import Section from "../section/Section";

const FeaturedPost = (props) => {
  return (
    <section className=" bg-slate-500">
      <Section>
        <h2 className="text-center text-2xl">Featured Posts</h2>
        <PostGrid posts={props.posts} />
      </Section>
    </section>
  );
};

export default FeaturedPost;
