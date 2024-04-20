import ProfileImage from "./ProfileImage";

export default function Writer({ writer }: { writer: string }) {
  return (
    <div className="flex gap-5 mb-8 items-center">
      <ProfileImage width={40} height={40} />
      <p className="font-semibold">{writer}</p>
    </div>
  );
}
