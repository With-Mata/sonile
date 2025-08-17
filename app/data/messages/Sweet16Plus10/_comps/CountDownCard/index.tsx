import { cn } from "@/app/cn";
import Counter from "./Counter";
import { useMemo } from "react";

interface CountDownCardProps extends React.HTMLAttributes<HTMLDivElement> {
  releaseTime: Date;
  onRelease?: () => void;
}

const CountDownCard = ({
  className,
  children,
  releaseTime,
  onRelease,
  ...props
}: CountDownCardProps) => {
  const isUnlocked = useMemo(
    () => Date.now() >= releaseTime.getTime(),
    [releaseTime]
  );
  const overlayHidden = isUnlocked;

  return (
    <div {...props} className={cn("relative")}>
      <div className={cn("relative", !isUnlocked && "py-8 px-3", className)}>
        {children}
      </div>

      {!overlayHidden && (
        <div
          className={cn(
            "absolute inset-0 z-10",
            "flex items-center justify-center"
          )}
        >
          <div
            className={cn(
              "absolute inset-0",
              "backdrop-blur-md border-2 border-gray-200 bg-white/30",
              "rounded-md"
            )}
          />

          <Counter
            releaseTime={releaseTime}
            onComplete={() => onRelease?.()}
            className="relative z-20"
          />
        </div>
      )}
    </div>
  );
};

export default CountDownCard;
