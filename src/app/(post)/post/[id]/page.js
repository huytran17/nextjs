"use client";

import { posts } from "@/data";
import { useRouter } from "next/navigation";

export default function Post({ params }) {
  const router = useRouter();

  const post = posts.find((post) => post.id === params.id);
  return (
    <h1 onClick={() => router.push("/post/abc/def/ghi")}>
      This is post: {post.title}
    </h1>
  );
}
