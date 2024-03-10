import EmailForm from "@/components/EmailForm";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-xl mb-2">Contact us!</h2>
      <p className="text-xs mb-1">kangjiwon1850@gmail.com</p>
      <p className="text-xs mb-4">kimjc@gmail.com</p>
      <div className="flex mb-2">
        <Link href="https://github.com/noaprost">
          <FaGithub className="bg-violet-500 rounded-full mr-4 w-8 h-8" />
        </Link>
        <Link href="https://github.com/Jc18Jc">
          <FaGithub className="bg-orange-500 rounded-full w-8 h-8" />
        </Link>
      </div>
      <h2 className="font-bold text-lg mb-2">Or Send us an email</h2>
      <EmailForm />
    </div>
  );
}
