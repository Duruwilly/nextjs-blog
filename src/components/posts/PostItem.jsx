import Image from "next/image";
import Link from "next/link";
import classes from "./Post-item.module.css";

const PostItem = (props) => {
  const { title, excerpt, image, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={`${classes.post} bg-stone-800`}>
      <Link href={`posts/${slug}`} className="text-gray-100">
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <div>{formattedDate}</div>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
