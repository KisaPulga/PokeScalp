import Image from "next/image";
import Link from "next/link";
import "./page.css";
export default function Home() {
  return (
    <div className="home-container">
      <Image
        src="/logo.svg"
        width={200}
        height={200}
        className="mb-2 h-auto w-40 transition-transform duration-300 hover:scale-105 sm:w-48 md:w-[200px]"
        alt="Logo PokeScalp"
      />
      <Link href="/signin" className="mt-4 text-blue-500 hover:underline">
        Sign In
      </Link>
      <Link href="/signup">
        Sign Up
      </Link>
    </div>
  );
}
