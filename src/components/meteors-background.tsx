"use client";

import { Meteors } from "./ui/meteors";

export function MeteorsBackground() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <Meteors 
          number={50}
          className="text-slate-500/10"
          minDuration={5}
          maxDuration={10}
          minDelay={0.1}
          maxDelay={0.5}
        />
      </div>
    </div>
  );
}