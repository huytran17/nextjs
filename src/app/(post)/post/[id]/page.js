import Link from "next/link";
import { posts } from "@/data";

export const generateMetadata = ({ params }) => {
  const post = posts.find((post) => post.id === params.id);

  return {
    title: post.title,
  };
};

export default function Post({ params }) {
  const post = posts.find((post) => post.id === params.id);

  return (
    <h1>
      <Link href="/post/abc/def/ghi">This is post: {post.title}</Link>
    </h1>
  );
}
