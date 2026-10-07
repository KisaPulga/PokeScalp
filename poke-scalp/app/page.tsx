import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image
        src="/logo.svg"
        width={200}
        height={200}
        className="mb-2 h-auto w-40 transition-transform duration-300 hover:scale-105 sm:w-48 md:w-[200px]"
        alt="Logo PokeScalp"
      />
    </div>
  );
}
