import Modal from "@/components/Modal";
import { profiles } from "@/data";

export default function ProfileModal({ params }) {
  const profile = profiles.find((profile) => profile.id === Number(params.id));

  return (
    <Modal>
      <div className="bg-green/60">
        <h1>This is profile modal</h1>
        <div>Name: {profile.name}</div>
        <div>Age: {profile.age}</div>
      </div>
    </Modal>
  );
}
