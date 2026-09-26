import Link from "next/link";
import { notFound } from "next/navigation";
import WorkoutDetail from "@/components/workoutDetail";
import { getWorkoutById } from "@/lib/api";

interface WorkoutPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutPage({
  params,
}: WorkoutPageProps) {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-gray-400 hover:text-[#B8FF00]"
        >
          ← Back to workouts
        </Link>

        <WorkoutDetail workout={workout} />
      </div>
    </main>
  );
}