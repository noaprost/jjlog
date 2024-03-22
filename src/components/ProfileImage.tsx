import Image from "next/image";
import profile from "../../public/images/profile.jpg";

export default function ProfileImage({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <Image
      src={profile}
      alt="profile"
      width={width}
      height={height}
      className="rounded-full"
    />
  );
}
