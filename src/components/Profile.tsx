import Image from "next/image";
import React from "react";
import profile from "../../public/images/profile.jpg";
import ContactButton from "./ContactButton";

export default function Profile() {
  return (
    <div className="w-80 h-80 flex flex-col justify-between items-center mx-auto">
      <Image
        src={profile}
        alt="profile"
        width={170}
        height={170}
        className="rounded-full"
      />
      <h2 className="text-lg font-semibold">Hello, We&apos;re JJ</h2>
      <p className="text-sm">Back-end & Front-end engineer</p>
      <p className="text-sm">꾸준히 성장하는 개발자</p>
      <ContactButton />
    </div>
  );
}
