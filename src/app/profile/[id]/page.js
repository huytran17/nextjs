import { profiles } from "@/data";

export default function ProfileDetail({ params }) {
  const info = profiles.find((profile) => profile.id === Number(params.id));

  return (
    <div>
      <h1>this is profile page</h1>
      <div>Name: {info.name}</div>
      <div>Age: {info.age}</div>
    </div>
  );
}
