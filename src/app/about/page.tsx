import Profile from "@/components/Profile";

export default function AboutPage() {
  return (
    <div className="flex pt-16 pb-28 px-24">
      <div className="w-full flex items-center justify-center">
        <Profile />
      </div>
      <div className="bg-orange-100 dark:bg-neutral-900 p-3 flex flex-col items-center w-full justify-center rounded-lg">
        <div className="flex flex-col items-center p-1">
          <h2 className="font-semibold text-md mb-1">Who are we?</h2>
          <p className="text-sm">꿈을 향해 코딩하는 개발자</p>
          <p className="text-sm">취미는 알고리즘 문제 풀기</p>
        </div>
        <div className="flex flex-col items-center p-1">
          <h2 className="font-semibold text-md mb-1">Career</h2>
          <p className="text-sm">인천대학교 졸업</p>
        </div>
        <div className="flex flex-col items-center p-1">
          <h2 className="font-semibold text-md mb-1">Skills</h2>
          <p className="text-sm">김재철 - Java, Spring, JPA</p>
          <p className="text-sm">강지원 - React, Typescript, Next.js</p>
        </div>
      </div>
    </div>
  );
}
