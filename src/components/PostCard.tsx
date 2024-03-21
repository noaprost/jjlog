"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  image: string;
  day: string;
  title: string;
  description: string;
  category: string;
};

export default function PostCard({
  id,
  image,
  day,
  title,
  description,
  category,
}: Props) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/posts/${id}`);
  };
  return (
    <div
      className="flex flex-col w-80 h-80 items-center justify-between bg-neutral-50 dark:bg-neutral-900 p-4 rounded-2xl shadow-customLight dark:shadow-custom cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={`/images/${image}`}
        alt="title"
        width={280}
        height={100}
        className="w-full h-44 rounded-lg"
      />
      <div>
        <p className="text-xs mt-1 text-gray-500">{day}</p>
      </div>
      <h2 className="font-semibold text-md">{title}</h2>
      <p className="text-xs">{description}</p>
      <p className="text-xs bg-violet-200 dark:bg-violet-900 px-1 rounded-md">
        {category}
      </p>
    </div>
  );
}
