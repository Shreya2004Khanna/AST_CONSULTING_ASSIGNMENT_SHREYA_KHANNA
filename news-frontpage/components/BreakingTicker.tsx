"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  headlines: string[];
};

export default function BreakingTicker({ headlines }: Props) {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((p) => (p + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <div className="breaking-ticker bg-red-700 text-white text-sm font-bold flex items-center px-4 py-2 border-b-4 border-red-900 select-none">
      <span className="mr-4 animate-pulse">🔴 ब्रेकिंग न्यूज़</span>
      <div className="overflow-hidden flex-1">
        <div
          ref={ref}
          className="ticker-text whitespace-nowrap transition-transform duration-700"
          key={index}
        >
          {headlines[index]}
        </div>
      </div>
    </div>
  );
}
