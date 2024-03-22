import ContactButton from "./ContactButton";
import ProfileImage from "./ProfileImage";

export default function Profile() {
  return (
    <div className="w-72 h-72 flex flex-col justify-between items-center mx-auto my-6">
      <ProfileImage width={150} height={150} />
      <h2 className="text-lg font-semibold">Hello, We&apos;re JJ</h2>
      <p className="text-sm">Back-end & Front-end engineer</p>
      <p className="text-sm">꾸준히 성장하는 개발자</p>
      <ContactButton />
    </div>
  );
}
