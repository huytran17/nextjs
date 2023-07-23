import { profiles } from "@/data";
import Link from "next/link";

export default function Profile() {
  return (
    <ul>
      {profiles.map((profile) => (
        <li key={profile.id}>
          <Link href={`/profile/${profile.id}`}>{profile.name}</Link>
        </li>
      ))}
    </ul>
  );
}
