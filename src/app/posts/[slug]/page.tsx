import { getPostById } from "@/service/posts";
import { FaRegCalendarAlt } from "react-icons/fa";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostDetailPage({ params: { slug } }: Props) {
  // post 상세페이지 구현
  const post = await getPostById(slug);
  return (
    <div className="mx-24 my-6">
      <div className="bg-gradient-to-r from-orange-500 to-orange-900 w-full h-60 rounded-t-2xl"></div>
      <div className="p-3 bg-neutral-900 rounded-b-2xl">
        <div className="flex justify-end mt-4">
          <FaRegCalendarAlt className="text-orange-300 mr-2" />
          <p className="text-end text-sm text-orange-300">{post.day}</p>
        </div>
        <h1 className="font-bold text-2xl">{post.title}</h1>
        <p className="text-sm mt-2">{post.description}</p>
        <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-orange-900 mt-2"></div>
        <div className="flex flex-col justify-evenly p-3">
          <p className="text-wrap my-6 text-sm">
            Spring은 현재 가장 인기 있는 자바 기반의 오픈 소스 프레임워크 중
            하나로, 다양한 이유로 많이 사용되고 있습니다. 첫째, Spring은 강력한
            기능과 유연성을 제공하여 개발자가 안정적이고 확장 가능한
            애플리케이션을 쉽게 구축할 수 있도록 도와줍니다. 이는 Spring의
            다양한 기능, 예를 들어 의존성 주입(Dependency Injection), 관점 지향
            프로그래밍(Aspect-Oriented Programming), 템플릿을 통한 데이터 액세스
            등이 이루는 결과입니다.
          </p>
          <p className="mb-6 text-sm">
            둘째, Spring은 엔터프라이즈급 애플리케이션 개발에 필요한 다양한
            기능을 제공합니다. 이는 웹 애플리케이션, RESTful 웹 서비스,
            마이크로서비스, 배치 처리, 메시징 등 다양한 도메인에서 사용할 수
            있습니다. Spring의 다양한 모듈과 라이브러리는 이러한 다양한 요구
            사항을 처리하고 구현하는 데 필요한 기능을 제공합니다.
          </p>
          <p className="mb-6 text-sm">
            셋째, Spring은 커뮤니티와 생태계가 매우 활성화되어 있습니다.
            Spring은 긴 역사를 거쳐 안정성을 쌓아왔고, 전 세계적으로 거대한
            커뮤니티와 생태계를 형성하고 있습니다. 이는 개발자들이 문제를
            해결하고 지원을 받을 수 있는 방대한 지원 자료와 도구를 의미합니다.
            또한, Spring은 다양한 엔터프라이즈와 기업에서 실제로 사용되는
            프레임워크로서 검증되었기 때문에 신뢰성과 안정성이 높습니다.
          </p>
          <p className="mb-6 text-sm">
            넷째, Spring은 모듈화와 테스트 용이성을 강조합니다. Spring의 모듈화
            접근 방식은 개발자가 필요한 기능만 선택하여 사용할 수 있도록
            해줍니다. 이는 애플리케이션의 무겁고 복잡한 구조를 피하고, 필요한
            모듈을 유연하게 조합하여 개발할 수 있게 해줍니다. 또한, Spring은
            테스트 주도 개발(Test-Driven Development, TDD)을 지원하여 테스트
            용이성을 높여줍니다. 이는 소프트웨어의 품질을 향상시키고 버그를
            최소화하는 데 도움이 됩니다.
          </p>
          <p className="mb-6 text-sm">
            다른 프레임워크와 비교했을 때, Spring의 인기는 이러한 이유들로 인해
            높습니다. 안정성, 확장성, 유연성, 커뮤니티 지원, 모듈화, 테스트
            용이성 등의 장점으로 인해 많은 개발자들이 Spring을 선택하고
            있습니다. 따라서 Spring은 현재 자바 개발자들 사이에서 가장 널리
            사용되는 프레임워크 중 하나로 자리 잡고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
