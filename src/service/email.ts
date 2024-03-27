import nodemailer from "nodemailer";

export type EmailData = {
  email: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 466,
  secure: false,
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

  return transporter.sendMail(mailData);
}
