import Section from "@/components/section/Section";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";

// const DUMMY_POST = {
//   slug: "getting-started-with-nextjs",
//   title: "Getting started with NextJS",
//   image: "post.jpg",
//   content: "# This is a first post",
// };

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className="bg-slate-500 h-screen">
      <Section>
        <div className=" bg-violet-100">
          <PostHeader title={post.title} image={imagePath} />
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </Section>
    </article>
  );
};

export default PostContent;
