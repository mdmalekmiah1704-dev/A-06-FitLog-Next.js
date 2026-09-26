export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b] px-5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="FitLog"
            className="h-7 w-auto"
          />
          <span className="font-black text-white">
            FITLOG
          </span>
        </div>

        <p className="text-center text-sm text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}