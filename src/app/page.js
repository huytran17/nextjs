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
    </main>
  );
}
