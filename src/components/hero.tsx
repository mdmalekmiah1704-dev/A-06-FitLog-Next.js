import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#111111] text-white px-6 md:px-12 lg:px-24 py-16 lg:py-28 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 w-full">
        <div className="max-w-xl text-left">
          <p className="text-[#c7f000] font-bold text-xs sm:text-sm uppercase tracking-widest mb-4">
            WORKOUT LIBRARY
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.1] tracking-tight uppercase">
  TRAIN WITH INTENT. LOG <br /> EVERY SET.
</h1>
<p className="mt-5 text-gray-400 text-sm sm:text-base max-w-md font-medium leading-relaxed">
  FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
</p>
          <div className="mt-8">
            <button className="bg-[#c7f000] text-black font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-none hover:bg-[#d4ff19] transition-all duration-200">
              BROWSE WORKOUTS
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end items-center w-full">
          <div className="w-full max-w-sm lg:max-w-md">
            <img
              src="/banner.png" alt="FitLog Training Hero"className="w-full h-auto object-contain"git status/>
          </div>
        </div>
      </div>
    </section>
  );
}
