"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardList, Bookmark } from "lucide-react";
import { useWorkout } from "@/context/workoutContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useWorkout();

  return (
    <nav className="border-b border-white/10 bg-[#0b0b0b]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="FitLog"
            className="h-8 w-auto"
          />
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "font-semibold text-[#B8FF00]"
                : "text-white"
            }
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={
              pathname === "/my-plan"
                ? "font-semibold text-[#B8FF00]"
                : "text-white"
            }
          >
            My Plan
          </Link>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="flex items-center gap-1 rounded-full bg-[#B8FF00] px-3 py-1.5 text-xs font-bold text-black"
          >
            <ClipboardList size={14} />
            Plan {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1 rounded-full border border-[#B8FF00] px-3 py-1.5 text-xs font-bold text-[#B8FF00]"
          >
            <Bookmark size={14} />
            Saved {saved.length}
          </Link>
        </div>
      </div>
    </nav>
  );
}