"use client";

import { useRouter } from "next/navigation";

export default function SpreadParams({ params, url }) {
  const router = useRouter();

  return (
    <div>
      <h1>There are a set of route params: {params.id.join(", ")}</h1>

      <h2 onClick={() => router.push("/post/optional-param/qwe/rty")}>
        Optional: has params
      </h2>

      <h2 onClick={() => router.push("/post/optional-param")}>
        Optional: has no params
      </h2>
    </div>
  );
}
