import { FaRegCalendarAlt } from "react-icons/fa";
import ModifiyButton from "./ModifiyButton";
import MarkDownViewer from "./MarkDownViewer";
import FeaturedButton from "./FeaturedButton";
import PostDeleteButton from "./PostDeleteButton";
import Image from "next/image";
import { useAuthContext } from "@/context/AuthContext";

type Props = {
  id: number;
  writer: string;
  day: string;
  title: string;
  fileName: string;
  description: string;
  content: string;
  featured: boolean;
};

export default function PostContent({
  id,
  writer,
  day,
  title,
  fileName,
  description,
  content,
  featured,
}: Props) {
  const { getUserName } = useAuthContext();
  const name = getUserName();

  window.scrollTo(0, 0);
  return (
    <div className="mx-40 my-6 rounded-2xl overflow-hidden shadow-customLight dark:shadow-custom">
      <div className="w-full h-64 overflow-hidden flex items-center">
        <Image
          className="w-full"
          src={fileName}
          alt={title}
          width={1400}
          height={300}
          priority
        />
      </div>
      <div className="px-12 py-8 bg-neutral-100 dark:bg-neutral-900">
        {name === writer && (
          <div className="flex justify-end items-center gap-3">
            <ModifiyButton id={id} />
            <PostDeleteButton id={id} />
            <FeaturedButton id={id} featured={featured} />
          </div>
        )}

        <div className="flex justify-end mt-3">
          <FaRegCalendarAlt className="text-orange-500 dark:text-orange-300 mr-2" />
          <p className="text-end text-sm text-orange-500 dark:text-orange-300">
            {day}
          </p>
        </div>
        <h1 className="font-bold text-2xl my-7">{title}</h1>
        <p className="text-md mb-2 text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
        <div className="flex flex-row justify-between mb-16">
          <div className="w-44 h-1 bg-gradient-to-r from-orange-500 to-orange-300 dark:bg-gradient-to-r dark:from-orange-500 dark:to-orange-900"></div>
          <p className="text-md font-semibold">{writer}</p>
        </div>
        <div className="w-full">
          <MarkDownViewer content={content} />
        </div>
      </div>
    </div>
  );
}
