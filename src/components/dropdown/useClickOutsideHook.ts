import { useEffect, useRef } from "react";
import { UseClickOutsideHookProps } from "./types";

export function useClickOutsideHook({ callbackFn }: UseClickOutsideHookProps) {
  let domNodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let handler = (event: MouseEvent) => {
      if (
        domNodeRef.current &&
        !domNodeRef.current.contains(event.target as Node)
      ) {
        callbackFn();
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return domNodeRef;
}
