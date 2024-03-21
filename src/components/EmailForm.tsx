"use client";

import { sendContactEmail } from "@/service/contact";
import { ChangeEvent, FormEvent, useState } from "react";

type Form = {
  email: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  email: "",
  subject: "",
  message: "",
};

type Banner = {
  messege: string;
  state: "success" | "error";
};

export default function EmailForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<Banner | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner({
          messege: "메일을 성공적으로 보냈습니다.",
          state: "success",
        });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({
          messege: "메일 전송에 실패했습니다. 다시 시도해주세요.",
          state: "error",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      {banner && (
        <div
          className={`px-3 py-1 mb-3 text-black text-sm font-semibold rounded-xl w-fit text-center ${
            banner.state == "error" ? "bg-red-300" : "bg-green-300"
          }`}
        >
          {banner.state == "error"
            ? `❌ ${banner.messege}`
            : `✅ ${banner.messege}`}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-neutral-900 p-4 w-96 rounded-xl"
      >
        <label htmlFor="email" className="text-xs mb-1">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoFocus
          value={form.email}
          onChange={handleChange}
          className="mb-2 rounded-lg text-sm p-1 text-black"
        />
        <label htmlFor="subject" className="text-xs mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className="mb-2 rounded-lg text-sm p-1 text-black"
        />
        <label htmlFor="message" className="text-xs mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={10}
          value={form.message}
          onChange={handleChange}
          className="rounded-lg text-sm p-1 text-black"
        />
        <button
          type="submit"
          className="bg-orange-400 text-black font-semibold text-sm my-2 rounded-lg p-1"
        >
          Submit
        </button>
      </form>
    </>
  );
}
