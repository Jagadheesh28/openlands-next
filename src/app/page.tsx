import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <span className="text-[6rem]">Mako Lands</span>
      <div className="min-h-[5rem] flex items-center">
        <Link
          href={"/lands/cyber-punk"}
          className="btn bg-white border-e-4 border-b-4 text-black px-4 py-2 rounded hover:border-0 duration-300"
        >
          Start Journey
        </Link>
      </div>
    </div>
  );
}
