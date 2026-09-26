import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0b0b] px-5">
      <div className="text-center">
        <h1 className="text-7xl font-black text-[#B8FF00]">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold uppercase text-white">
          Workout Not Found
        </h2>

        <p className="mt-2 text-gray-400">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-[#B8FF00] px-6 py-3 font-bold text-black"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}