import { PostCard } from "@/service/posts";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuPen } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function PostContent({ post }: { post: PostCard }) {
  const { day, title, description } = post;
  return (
    <div className="mx-24 my-6 rounded-2xl overflow-hidden shadow-customLight dark:shadow-custom">
      <div className="bg-gradient-to-r from-orange-500 to-orange-300 dark:bg-gradient-to-r dark:from-orange-500 dark:to-orange-900 w-full h-60"></div>
      <div className="p-6 bg-neutral-100 dark:bg-neutral-900">
        <div className="flex justify-end items-center">
          <LuPen className="mr-2 w-4 h-4 cursor-pointer" />
          <FaRegTrashAlt className="mr-2 w-4 h-4 cursor-pointer" />
          <FaRegStar className="w-4 h-4 cursor-pointer" />
        </div>
        <div className="flex justify-end mt-4">
          <FaRegCalendarAlt className="text-orange-500 dark:text-orange-300 mr-2" />
          <p className="text-end text-sm text-orange-500 dark:text-orange-300">
            {day}
          </p>
        </div>
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-sm mt-2">{description}</p>
        <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-orange-300 dark:bg-gradient-to-r dark:from-orange-500 dark:to-orange-900 mt-2"></div>
        <div className="flex flex-col justify-evenly p-3">
          <p>
            임시 설명
            <br />
            <br />
            백엔드 개발자로서의 삶은 도전과 발전의 연속이다. 우리는 서버 측에서
            애플리케이션의 핵심 기능을 구현하고 유지보수하는 역할을 맡는다. 이를
            위해 다양한 기술과 도구를 습득하고, 지속적인 학습과 탐구가
            필수적이다. 코드의 성능을 최적화하고 확장성을 고려하여 시스템을
            설계하는 것이 우리의 주요 업무 중 하나이다.
            <br />
            <br />
            또한, 백엔드 개발자는 팀원들과의 협업이 중요하다. 프론트엔드 개발자,
            디자이너, 테스터, 그리고 다른 백엔드 개발자와의 원활한 소통과 협력이
            프로젝트의 성패를 좌우한다. 서로의 의견을 존중하고 효율적인 작업을
            위해 노력하는 것이 필요하다.
            <br />
            <br />
            또한, 백엔드 개발은 보안에 대한 지속적인 업데이트와 관리가 필요하다.
            사용자의 데이터를 안전하게 보호하기 위해 보안 취약점을 식별하고 이를
            해결하는 것이 중요하다. 새로운 보안 기술 및 방법론을 습득하고
            시스템을 보호하는 노력은 끊임없는 과제이다.
            <br />
            <br />
            더불어, 백엔드 개발자는 문제 해결 능력이 필수적이다. 예상치 못한
            에러와 버그에 대처하고 사용자의 요구사항을 충족시키기 위해 노력해야
            한다. 디버깅과 테스팅을 통해 안정적인 서비스를 제공하는 것이 우리의
            책임이다.
            <br />
            <br />
            마지막으로, 백엔드 개발은 끊임없는 변화와 혁신의 과정이다. 새로운
            기술과 도구의 등장에 따라 우리는 항상 최신 트렌드를 따라가고 새로운
            것을 배우며 발전해야 한다. 열정과 호기심을 가지고 끊임없이 도전하는
            것이 백엔드 개발자로서의 삶의 한 부분이다.
            <br />
            <br />이 모든 것을 통해 우리는 사용자에게 뛰어난 서비스를 제공하고,
            현대 사회에 기여하는 데 일조하고 있다. 함께하는 동료들과의 협업과
            지속적인 성장을 통해 우리는 더 나은 미래를 향해 전진할 것이다.
          </p>
        </div>
      </div>
    </div>
  );
}
