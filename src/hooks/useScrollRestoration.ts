"use client";

import { useEffect } from "react";

const STORAGE_KEY = "scrollPosition";

export const useScrollRestoration = () => {
  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      window.scrollTo({ top: parseInt(saved, 10) });
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const saveScrollPosition = () => {
    sessionStorage.setItem(STORAGE_KEY, window.scrollY.toString());
  };

  return { saveScrollPosition };
};
