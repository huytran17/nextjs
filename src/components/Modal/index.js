"use client";

import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }) {
  const overlay = useRef();
  const wrapper = useRef();
  const router = useRouter();

  const onClose = useCallback(() => {
    router.back();
  }, [router]);

  const onClickOverlay = useCallback(
    (e) => {
      const should_close = e.target === overlay.current;

      should_close && onClose && onClose();
    },
    [onClose, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      const is_esc = e.key === "Escape";
      is_esc && onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-10 top-0 right-0 left-0 bottom-0 mx-auto bg-black/60"
      onClick={onClickOverlay}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/12 p-6 bg-black/60 z-20 text-white"
      >
        {children}
      </div>
    </div>
  );
}
