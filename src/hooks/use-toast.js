"use client";
import { useCallback } from "react";

export function useToast() {
  const toast = useCallback(({ title, description }) => {
    // For simplicity, just show a browser alert
    alert(`${title}\n${description || ""}`);
  }, []);

  return { toast };
}
