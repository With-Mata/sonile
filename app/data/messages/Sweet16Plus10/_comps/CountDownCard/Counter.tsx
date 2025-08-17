"use client";

import { cn } from "@/app/cn";
import { useEffect, useMemo, useRef, useState } from "react";

interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  releaseTime: Date;
  onComplete?: () => void;
}

const SECOND_MS = 1000;

function getRemainingMs(target: Date): number {
  const now = Date.now();
  const diff = target.getTime() - now;
  return Math.max(0, diff);
}

function formatDuration(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const two = (n: number) => n.toString().padStart(2, "0");

  return {
    days,
    hours,
    minutes,
    seconds,
    compact:
      days > 0
        ? `${days}d ${two(hours)}h ${two(minutes)}m ${two(seconds)}s`
        : `${two(hours)}:${two(minutes)}:${two(seconds)}`,
  };
}

const Counter = ({
  className,
  releaseTime,
  onComplete,
  ...props
}: CounterProps) => {
  const [remainingMs, setRemainingMs] = useState<number>(() =>
    getRemainingMs(releaseTime)
  );

  useEffect(() => {
    setRemainingMs(getRemainingMs(releaseTime));

    const intervalId = setInterval(() => {
      const next = getRemainingMs(releaseTime);
      setRemainingMs(next);
      if (next <= 0) {
        clearInterval(intervalId);
        onComplete?.();
      }
    }, SECOND_MS);

    return () => clearInterval(intervalId);
  }, [releaseTime, onComplete]);

  const formatted = useMemo(() => formatDuration(remainingMs), [remainingMs]);

  return (
    <div
      {...props}
      className={cn(
        className,
        "flex flex-row items-center justify-center text-gray-900"
      )}
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        className={cn(
          "px-4 py-2 rounded-full bg-gray-300 backdrop-blur-md",
          "shadow-sm",
          "flex items-baseline gap-2 text-sm font-medium"
        )}
      >
        {formatted.days > 0 && (
          <span className="tabular-nums">{formatted.days}d</span>
        )}
        <span className="tabular-nums">
          {formatted.hours.toString().padStart(2, "0")}h{" "}
        </span>
        <span className="tabular-nums">
          {formatted.minutes.toString().padStart(2, "0")}m{" "}
        </span>
        <span className="tabular-nums">
          {formatted.seconds.toString().padStart(2, "0")}s
        </span>
      </div>
    </div>
  );
};

export default Counter;
