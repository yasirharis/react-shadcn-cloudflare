// src/hooks/use-mobile.ts
import { useEffect, useState } from "react";

/**
 * Returns `true` if the current viewport width is less than the provided breakpoint (default: 768px).
 * Updates automatically on window resize.
 */
export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(
    () => window.innerWidth < breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Set initial value in case window is not defined (SSR)
    if (typeof window !== "undefined") {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}