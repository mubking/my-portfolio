"use client";
import { useState, useCallback } from "react";

let toastHandler = null;

export function useToast() {
  const toast = useCallback(({ title, description }) => {
    if (toastHandler) {
      toastHandler({ title, description });
    }
  }, []);

  return { toast };
}

export function useToastState() {
  const [toasts, setToasts] = useState([]);

  toastHandler = ({ title, description }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  return toasts;
}