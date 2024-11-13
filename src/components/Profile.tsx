import ContactButton from "./ui/button/ContactButton";
import ProfileImage from "./ProfileImage";

export default function Profile() {
  return (
    <div className="w-72 h-72 flex flex-col justify-between items-center mx-auto my-6">
      <ProfileImage width={150} height={150} />
      <img
        src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=36&duration=2000&pause=1000&color=000000&width=435&lines=Hello%2C+We're+JJ"
        alt="Typing SVG"
        className="w-72 mt-4 ml-16"
      />
      <p className="lg:text-sm sm:text-xs text-xs">
        Back-end & Front-end engineer
      </p>
      <p className="lg:text-sm sm:text-xs text-xs">꾸준히 성장하는 개발자</p>
      <ContactButton />
    </div>
  );
}
