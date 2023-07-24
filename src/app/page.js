"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link href="/about">About us</Link>
      <button onClick={() => router.push("/helloworld")}>Hello world</button>
      <button onClick={() => router.push("/posts")}>Posts</button>
      <Link href="/profile">Profiles</Link>
      <Link href="/parallel-route1">Parallel route 1</Link>
      <Link href="/route-handler">route handler</Link>
      <Link href="/path1">path 1</Link>
    </main>
  );
}
