"use client";
import { PostInfo } from "@/service/posts";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function MovePost({
  prev,
  next,
}: {
  prev: PostInfo | null;
  next: PostInfo | null;
}) {
  const router = useRouter();
  const handelClickPrev = () => {
    router.push(`/posts/${prev?.id}`);
  };
  const handelClickNext = () => {
    router.push(`/posts/${next?.id}`);
  };

  return (
    <section className="flex mx-24 rounded-xl overflow-hidden">
      {prev && (
        <div
          className="bg-gradient-to-l from-neutral-200 to-neutral-100 dark:bg-gradient-to-r dark:from-neutral-950 dark:to-neutral-800 w-full h-40 border-white dark:border-black border-r-4 flex items-center"
          onClick={handelClickPrev}
        >
          <div className="flex items-center justify-around w-full hover:scale-110">
            <FaArrowLeft className="w-12 h-12 text-orange-500" />
            <div>
              <p className="text-2xl font-semibold mb-1">{prev.title}</p>
              <p className="text-sm">{prev.description}</p>
            </div>
          </div>
        </div>
      )}
      {next && (
        <div
          className="bg-gradient-to-r from-neutral-200 to-neutral-100 dark:bg-gradient-to-l dark:from-neutral-950 dark:to-neutral-800 w-full h-40 flex items-center"
          onClick={handelClickNext}
        >
          <div className="flex items-center justify-evenly w-full hover:scale-110 ease-in-out">
            <div>
              <p className="text-2xl font-semibold mb-1">{next.title}</p>
              <p className="text-sm">{next.description}</p>
            </div>
            <FaArrowRight className="w-12 h-12 text-orange-500" />
          </div>
        </div>
      )}
    </section>
  );
}
