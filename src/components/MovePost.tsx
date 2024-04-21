"use client";
import { PostInfo } from "@/service/posts";
import Image from "next/image";
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
    <section className="flex mx-40 mt-16 rounded-xl overflow-hidden">
      {prev && (
        <div
          className="w-full h-28 overflow-hidden border-white dark:border-black border-r-4 flex items-center relative"
          onClick={handelClickPrev}
        >
          <Image
            className="w-full opacity-40"
            src={prev.fileName}
            alt={prev.title}
            width={500}
            height={200}
          />
          <div className="flex justify-around w-full hover:scale-110 ease-in-out absolute bottom-6 rigth-6">
            <FaArrowLeft className="w-12 h-12 text-orange-500" />
            <div>
              <p className="text-xl font-semibold mb-1">{prev.title}</p>
              <p className="text-sm">{prev.description}</p>
            </div>
          </div>
        </div>
      )}
      {next && (
        <div
          className="w-full h-28 overflow-hidden flex items-center relative"
          onClick={handelClickNext}
        >
          <Image
            className="w-full opacity-40"
            src={next.fileName}
            alt={next.title}
            width={500}
            height={200}
          />
          <div className="flex justify-around w-full hover:scale-110 ease-in-out absolute bottom-6 left-6">
            <div>
              <p className="text-xl font-semibold mb-1">{next.title}</p>
              <p className="text-sm">{next.description}</p>
            </div>
            <FaArrowRight className="w-12 h-12 text-orange-500" />
          </div>
        </div>
      )}
    </section>
  );
}
