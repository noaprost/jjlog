import { sendEmail } from "@/service/email";
import * as yup from "yup";

const bodySchema = yup.object().shape({
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(request: Request) {
  const body = await request.json();
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "유효하지 않은 포맷" }), {
      status: 400, // bad request
    });
  }

  // 노드 메일러를 이용해서 메일을 전송
  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: "메일을 성공적으로 보냄" }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.error(error);
      return new Response(JSON.stringify({ message: "메일 전송에 실패함" }), {
        status: 500, // 서버 내부에서 문제가 있어서 전송에 실패했기 때문에 internal error로 보내줌
      });
    });
}
