"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { toast } from "react-toastify";
import { Workout } from "@/types/workout";

interface WorkoutContextType {
  plan: Workout[];
  saved: Workout[];

  addToPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;
}

const WorkoutContext = createContext<
  WorkoutContextType | undefined
>(undefined);

export function WorkoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    try {
      const savedPlan = localStorage.getItem("fitlog-plan");
      const savedItems = localStorage.getItem("fitlog-saved");

      if (savedPlan) {
        setPlan(JSON.parse(savedPlan));
      }

      if (savedItems) {
        setSaved(JSON.parse(savedItems));
      }
    } catch (error) {
      console.error("Failed to load workout data:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save plan
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan, isLoaded]);

  // Save saved workouts
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved, isLoaded]);

  // Add workout to today's plan
  const addToPlan = (workout: Workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      toast.info("Already added to today's plan");
      return;
    }

    if (plan.length >= 5) {
      toast.warning("You can add maximum 5 workouts");
      return;
    }

    setPlan((prev) => [...prev, workout]);

    toast.success("Added to today's plan");
  };

  // Save workout
  const saveWorkout = (workout: Workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.info("Already saved");
      return;
    }

    setSaved((prev) => [...prev, workout]);

    toast.success("Saved for later");
  };

  // Remove from today's plan
  const removeFromPlan = (id: number) => {
    setPlan((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.success("Workout removed");
  };

  // Remove from saved
  const removeFromSaved = (id: number) => {
    setSaved((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.success("Removed from saved");
  };

  // Mark workout as done
  const markAsDone = (id: number) => {
    setPlan((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.success("Workout marked as done");
  };

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkout must be used inside WorkoutProvider"
    );
  }

  return context;
}