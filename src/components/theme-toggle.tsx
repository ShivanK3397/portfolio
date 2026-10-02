"use client";

import { useSyncExternalStore } from "react";

const storageKey = "portfolio-theme";
let sessionPreference: string | null = null;

function subscribe(notify: () => void) {
  const sync = () => {
    let preference = sessionPreference;
    try { preference = localStorage.getItem(storageKey) ?? preference; } catch { /* Storage may be disabled. */ }
    document.documentElement.dataset.theme = preference === "light" ? "light" : "dark";
    notify();
  };
  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) { sessionPreference = null; sync(); }
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener("theme-change", notify);
  sync();
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("theme-change", notify);
  };
}

const getSnapshot = () => document.documentElement.dataset.theme === "dark";
const getServerSnapshot = () => true;

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const theme = getSnapshot() ? "light" : "dark";
    sessionPreference = theme;
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(storageKey, theme); } catch { /* Keep the toggle working without persistence. */ }
    window.dispatchEvent(new Event("theme-change"));
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Dark mode" aria-pressed={dark} title={dark ? "Switch to light mode" : "Switch to dark mode"}>
      <svg className="theme-icon theme-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
      <svg className="theme-icon theme-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.8 13.1A9 9 0 0 1 10.9 3.2a9 9 0 1 0 9.9 9.9Z" /></svg>
    </button>
  );
}
