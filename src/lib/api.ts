import { Workout } from "@/types/workout";
const API_URL = "https://api.api-store.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error("Failed to fetch workouts");
    }

    return await res.json();
  } catch (error) {
    console.error("API Fetch Error:", error);
    return [];
  }
}

export async function getWorkoutById(
  id: string
): Promise<Workout | undefined> {
  try {
    const res = await fetch(`${API_URL}/${id}`);

    if (!res.ok) {
      return undefined;
    }

    return await res.json();
  } catch (error) {
    console.error("API Detail Fetch Error:", error);
    return undefined;
  }
}
