import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroObit = ({
  children,
  size,
  rotation,
  obit = false,
  spin = false,
  obitDuration,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  obit?: boolean;
  spin?: boolean;
  obitDuration?: string;
  spinDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(obit === true && "animate-spin")}
        style={{ animationDuration: obitDuration }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          <div
            className={twMerge(spin === true && "animate-spin")}
            style={{ animationDuration: spinDuration }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroObit;
