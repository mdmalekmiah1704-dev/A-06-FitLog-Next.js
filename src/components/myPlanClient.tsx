"use client";

import Link from "next/link";
import {
  Check,
  Clock3,
  Flame,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";

import { useWorkout } from "@/context/workoutContext";

export default function MyPlanClient() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useWorkout();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">(
    "plan"
  );

  const currentItems =
    activeTab === "plan" ? plan : saved;

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0b0b] px-5 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-black uppercase">
            My Plan
          </h1>

          <p className="mt-2 text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Metric
            title="Exercises"
            value={plan.length}
          />

          <Metric
            title="Minutes"
            value={totalMinutes}
          />

          <Metric
            title="Calories"
            value={totalCalories}
          />
        </div>

        {/* Tabs */}
        <div className="mt-10 flex gap-3 border-b border-white/10 pb-3">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
              activeTab === "plan"
                ? "bg-[#B8FF00] text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
              activeTab === "saved"
                ? "bg-[#B8FF00] text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Empty State */}
        {currentItems.length === 0 ? (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-black uppercase">
              Nothing Here Yet
            </h2>

            <p className="mt-2 text-gray-400">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded-xl bg-[#B8FF00] px-6 py-3 font-bold text-black transition hover:opacity-90"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          /* Workout List */
          <div className="mt-6 space-y-4">
            {currentItems.map((workout) => (
              <article
                key={workout.id}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#111] p-4 md:flex-row md:items-center"
              >
                {/* Image */}
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="h-28 w-full rounded-xl object-cover md:h-24 md:w-40"
                />

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold uppercase text-white">
                    {workout.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {workout.equipment}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock3 size={13} />
                      {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                      <Flame size={13} />
                      {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                      <Star
                        size={13}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      {workout.rating}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`/workouts/${workout.id}`}
                    className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      type="button"
                      onClick={() => markAsDone(workout.id)}
                      className="flex items-center gap-1 rounded-lg bg-[#B8FF00] px-3 py-2 text-xs font-bold text-black transition hover:opacity-90"
                    >
                      <Check size={14} />
                      Mark as Done
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => handleRemove(workout.id)}
                    className="rounded-lg border border-red-500/50 p-2 text-red-400 transition hover:bg-red-500/10"
                    aria-label={`Remove ${workout.name}`}
                  >
                    <X size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111] p-5">
      <p className="text-xs uppercase tracking-wider text-gray-500">
        {title}
      </p>

      <p className="mt-2 text-3xl font-black text-white">
        {value}
      </p>
    </div>
  );
}