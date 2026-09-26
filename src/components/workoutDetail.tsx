"use client";
import Link from "next/link";
import Image from 'next/image';
import {
  Bookmark,
  Check,
  Clock3,
  Flame,
  Plus,
  Star,
} from "lucide-react";git add . && git commit -m "feat: add workout detail section layout"

import { toast } from "react-toastify";
import { Workout } from "@/types/workout";
import { useWorkout } from "@/context/workoutContext";
interface WorkoutDetailProps {
  workout: Workout;
}

export default function WorkoutDetail({
  workout,
}: WorkoutDetailProps) {
  const {
    plan,
    saved,
    addToPlan,
    saveWorkout,
  } = useWorkout();

  const isInPlan = plan.some((item) => item.id === workout.id);
  const isSaved = saved.some((item) => item.id === workout.id);

  const handleAddToPlan = () => {
    if (isInPlan) {
      toast.info("Workout is already in today's plan.");
      return;
    }
    addToPlan(workout);
  };
  const handleSave = () => {
    if (isSaved) {
      toast.info("Workout is already saved.");
      return;
    }
    saveWorkout(workout);
  };

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm font-medium text-gray-400 transition hover:text-white"
        >
          ← Back to workouts
        </Link>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-2xl bg-zinc-900">
            <Image
              src={workout.image}
              alt={workout.name}
              width={900}
              height={700}
              className="h-auto w-full object-cover"
              priority />
          </div>
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((group) => (
                <span
                  key={group}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium text-gray-300"
                >
                  {group}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
              {workout.name}
            </h1>
            <p className="mt-5 leading-7 text-gray-400">
              {workout.description}
            </p>
            <div className="mt-5 flex items-center gap-2">
              <Star
                size={20}
                className="fill-yellow-400 text-yellow-400"
              />

              <span className="font-semibold">
                {workout.rating}
              </span>

              <span className="text-gray-500">
                / 5
              </span>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <p className="text-xs uppercase text-gray-500">
                  Equipment
                </p>

                <p className="mt-2 font-medium">
                  {workout.equipment}
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <p className="text-xs uppercase text-gray-500">
                  Difficulty
                </p>

                <p className="mt-2 font-medium">
                  {workout.difficulty}
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <p className="text-xs uppercase text-gray-500">
                  Sets
                </p>

                <p className="mt-2 font-medium">
                  {workout.sets}
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <p className="text-xs uppercase text-gray-500">
                  Reps
                </p>

                <p className="mt-2 font-medium">
                  {workout.reps}
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock3 size={15} />

                  <p className="text-xs uppercase">
                    Duration
                  </p>
                </div>

                <p className="mt-2 font-medium">
                  {workout.duration} min
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <Flame size={15} />

                  <p className="text-xs uppercase">
                    Calories
                  </p>
                </div>

                <p className="mt-2 font-medium">
                  {workout.caloriesBurned} kcal
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-bold">
                HOW TO DO IT
              </h2>

              <div className="mt-5 space-y-4">
                {workout.instructions.map(
                  (instruction, index) => (
                    <div
                      key={index}
                      className="flex gap-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-sm font-semibold">
                        {index + 1}
                      </div>

                      <p className="pt-1 leading-6 text-gray-400">
                        {instruction}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAddToPlan}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
              >
                {isInPlan ? (
                  <>
                    <Check size={18} />
                    Added to Plan
                  </>
                ) : (
                  <>
                    <Plus size={18} />
                    Add to Today&apos;s Plan
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleSave}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:bg-zinc-900"
              >
                <Bookmark
                  size={18}
                  className={
                    isSaved
                      ? "fill-white"
                      : ""
                  }
                />

                {isSaved
                  ? "Saved"
                  : "Save for Later"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}