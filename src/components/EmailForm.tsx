"use client";

export default function EmailForm() {
  const handleSubmit = () => {};
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-neutral-900 p-4 w-96 rounded-xl"
    >
      <label htmlFor="email" className="text-xs mb-1">
        Your Email
      </label>
      <input type="text" id="email" className="mb-2 rounded-lg" />
      <label htmlFor="subject" className="text-xs mb-1">
        Subject
      </label>
      <input type="text" id="subject" className="mb-2 rounded-lg" />
      <label htmlFor="message" className="text-xs mb-1">
        Message
      </label>
      <textarea id="message" rows={8} className="rounded-lg" />
      <button
        type="submit"
        className="bg-orange-400 text-black font-semibold text-sm my-2 rounded-lg p-1"
      >
        Submit
      </button>
    </form>
  );
}
