import Link from "next/link";
import { posts } from "@/data";

export default function Posts() {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/post/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
