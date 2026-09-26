import Hero from "@/components/hero";
import WorkoutCard from "@/components/workoutCard";
import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main>
      <Hero />
        <section className="px-4 py-10">

        <h2 className="mb-6 text-2xl font-bold">
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {workouts?.map((workout) => (
    <WorkoutCard
      key={workout.id}
      workout={workout}
    />
  ))}
</div>
      </section>
    </main>
  );
}