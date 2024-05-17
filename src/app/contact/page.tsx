import EmailForm from "@/components/ui/form/EmailForm";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-semibold text-xl mb-1">Contact us!</h2>
      <div className="flex items-center justify-center mb-4">
        <p className="text-sm">kimjc@gmail.com</p>
        <p className="mx-3">|</p>
        <p className="text-sm">kangjiwon1850@gmail.com</p>
      </div>
      <div className="flex mb-2">
        <Link href="https://github.com/noaprost">
          <FaGithub className="bg-violet-500 rounded-full mr-4 w-8 h-8" />
        </Link>
        <Link href="https://github.com/Jc18Jc">
          <FaGithub className="bg-orange-500 rounded-full w-8 h-8" />
        </Link>
      </div>
      <h2 className="font-semibold text-lg mb-2">Or Send us an email</h2>
      <EmailForm />
    </div>
  );
}
