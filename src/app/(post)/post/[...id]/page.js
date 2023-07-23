"use client";

import { useRouter } from "next/navigation";

export default function SpreadParams({ params, url }) {
  const router = useRouter();

  return (
    <div>
      <h1>There are a set of route params: {params.id.join(", ")}</h1>
    </div>
  );
}
