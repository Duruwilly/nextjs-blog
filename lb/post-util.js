import fs from "fs";
import path from "path";
import matter from "gray-matter";
// the idea is to take a look at the markdown file and see how many files we have in the folder and go through all the files to get the metadata

const postDirectory = path.join(process.cwd(), "posts");

export const getPostFiles = () => {
    return fs.readdirSync(postDirectory)
}

// function to get the file content
export const getPostData = (postIdentifier) => {
    const postSlug = postIdentifier.replace(/\.md$/, ""); // this removes the extension from the file
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  // log fileContent later
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);


  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  // this would read all the files in the directory to extract metadata and markdown content
  // browse readdirSync later
  //   log this post files later
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postfile) => {
    return getPostData(postfile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPost = allPosts.filter((data) => data.isFeatured);

  return featuredPost;
};
