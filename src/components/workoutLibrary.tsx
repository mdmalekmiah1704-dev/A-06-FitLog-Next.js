"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import WorkoutCard from "@/components/WorkoutCard";
import { Workout } from "@/types/workout";

export default function WorkoutLibrary({
  workouts,
}: {
  workouts: Workout[];
}) {
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return a.rating - b.rating;
  });

  return (
    <section id="library" className="px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-4xl font-black uppercase text-white">
              The Library
            </h2>

            <p className="mt-2 text-gray-400">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none rounded-xl border border-white/10 bg-[#111] px-5 py-3 pr-10 text-sm text-white outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </div>
    </section>
  );
}