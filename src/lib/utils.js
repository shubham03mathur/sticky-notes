import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const determinePostion = () => {
  const positionX = window.innerWidth - 250;
  const positionY = window.innerHeight - 250;

  return {
      x: Math.floor(Math.random() * positionX),
      y: Math.floor(Math.random() * positionY),
  };
};