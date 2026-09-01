import { useCallback, useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Subtle magnetic pull toward the pointer. Returns props to spread onto the
 * target element. No-ops on touch devices and under reduced-motion.
 */
export function useMagnetic({ strength = 0.3, max = 6 } = {}) {
  const ref = useRef(null);
  const frame = useRef(null);
  const prefersReduced = usePrefersReducedMotion();

  const enabled =
    !prefersReduced &&
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const reset = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "";
  }, []);

  const onMouseMove = useCallback(
    (e) => {
      if (!enabled || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        if (!ref.current) return;
        const tx = Math.max(-max, Math.min(max, x * strength));
        const ty = Math.max(-max, Math.min(max, y * strength));
        ref.current.style.transform = `translate(${tx}px, ${ty}px)`;
      });
    },
    [enabled, strength, max]
  );

  const onMouseLeave = useCallback(() => {
    if (frame.current) cancelAnimationFrame(frame.current);
    reset();
  }, [reset]);

  useEffect(() => {
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return enabled ? { ref, onMouseMove, onMouseLeave } : { ref };
}
