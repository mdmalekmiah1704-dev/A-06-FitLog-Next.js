export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#0b0b0b]">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-[#B8FF00]" />

        <p className="mt-4 text-sm text-gray-400">
          Loading workouts...
        </p>
      </div>
    </div>
  );
}