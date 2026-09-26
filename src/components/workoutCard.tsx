import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import { Workout } from "@/types/workout";

export default function WorkoutCard({
  workout,
}: {
  workout: Workout;
}) {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition hover:-translate-y-1">
        <img src={workout.image} alt={workout.name} className="aspect-[2/1] w-full object-cover" />
        <div className="p-5">
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#B8FF00] px-3 py-1 text-[10px] font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-bold uppercase text-white">
            {workout.name}
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            {workout.equipment}
          </p>

          <div className="mt-7 flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Clock3 size={13} />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1">
              <Flame size={13} />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <Star size={13} />
              {workout.rating}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}