import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

export type EmailData = {
  email: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465, //587
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

// 외부에서 이용할 수 있는 함수
export async function sendEmail({ email, subject, message }: EmailData) {
  const mailData = {
    from: email,
    to: process.env.AUTH_USER,
    subject: `[BLOG] ${subject}`,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br/>
    <p>보낸 사람 : ${email}</p>
    `,
  };

  return await transporter.sendMail(mailData);
}
