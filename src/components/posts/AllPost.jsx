import React from "react";
import Section from "../section/Section";
import PostGrid from "./PostGrid";

const AllPost = (props) => {
  return (
    <section className="bg-slate-500">
      <Section>
        <h1 className="text-center text-2xl">All Posts</h1>
        <PostGrid posts={props.posts} />
      </Section>
    </section>
  );
};

export default AllPost;
