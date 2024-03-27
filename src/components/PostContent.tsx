import { PostData } from "@/service/posts";
import { FaRegCalendarAlt } from "react-icons/fa";
import ModifiyButton from "./ModifiyButton";
import MarkDownViewer from "./MarkDownViewer";
import FeaturedButton from "./FeaturedButton";
import PostDeleteButton from "./PostDeleteButton";

export default function PostContent({ post }: { post: PostData }) {
  const { id, writer, day, title, description, content } = post;

  return (
    <div className="mx-24 my-6 rounded-2xl overflow-hidden shadow-customLight dark:shadow-custom">
      <div className="bg-gradient-to-r from-orange-500 to-orange-300 dark:bg-gradient-to-r dark:from-orange-500 dark:to-orange-900 w-full h-60"></div>
      <div className="p-8 bg-neutral-100 dark:bg-neutral-900">
        <div className="flex justify-end items-center">
          <ModifiyButton id={id} />
          <PostDeleteButton id={id} />
          <FeaturedButton post={post} />
        </div>
        <div className="flex justify-end mt-4">
          <FaRegCalendarAlt className="text-orange-500 dark:text-orange-300 mr-2" />
          <p className="text-end text-sm text-orange-500 dark:text-orange-300">
            {day}
          </p>
        </div>
        <h1 className="font-bold text-2xl mb-7">{title}</h1>
        <p className="text-sm mb-1">{description}</p>
        <div className="flex flex-row justify-between">
          <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-orange-300 dark:bg-gradient-to-r dark:from-orange-500 dark:to-orange-900 mt-2"></div>
          <p className="text-md font-semibold mx-4">{writer}</p>
        </div>
        <div className="w-full">
          <MarkDownViewer content={content} />
        </div>
      </div>
    </div>
  );
}
