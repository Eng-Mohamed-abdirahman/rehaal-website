"use client";

import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Props = {
  minDuration?: number; // milliseconds
};

export default function RoutePreloader({ minDuration = 2000 }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [visible, setVisible] = useState(true); // show on initial load
  const timerRef = useRef<number | null>(null);
  const lastKeyRef = useRef<string | null>(null);

  const keyFrom = (p: string | null, s: URLSearchParams | null) =>
    `${p ?? ""}?${s ? s.toString() : ""}`;

  // Initial load + every route (path or query) change
  useEffect(() => {
    const nextKey = keyFrom(pathname, searchParams);

    if (lastKeyRef.current === null || lastKeyRef.current !== nextKey) {
      lastKeyRef.current = nextKey;

      setVisible(true);
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setVisible(false), minDuration);
    }

    // no cleanup here; we clear timers before starting a new one and on unmount
  }, [pathname, searchParams, minDuration]);

  // Clear timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  // Disable scroll while preloader is visible
  useEffect(() => {
    const root = document.documentElement;
    if (visible) root.style.overflow = "hidden";
    else root.style.overflow = "";
    return () => {
      root.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-medium">
        <Image
          src="/rehaab.png"
          alt="rehaab  loading"
          fill
          priority
          sizes="(max-width: 640px) 10rem, 13rem"
          className="object-cover"
        />
      </div>
    </div>
  );
}