"use client";

export default function SpreadParams({ params, url }) {
  return (
    <div>
      <h1>There are a set of route params: {params.id.join(", ")}</h1>
    </div>
  );
}
