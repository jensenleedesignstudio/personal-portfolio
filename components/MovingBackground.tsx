"use client";

import { useEffect, useRef } from "react";

export default function MovingBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const target = { x: 0, y: 0 };
    const position = { x: 0, y: 0 };
    let frameId: number;

    function handlePointerMove(event: PointerEvent) {
      target.x = (event.clientX / window.innerWidth) * 2 - 1;
      target.y = (event.clientY / window.innerHeight) * 2 - 1;
    }

    function animate() {
      position.x += (target.x - position.x) * 0.06;
      position.y += (target.y - position.y) * 0.06;

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `
          translate3d(${-position.x * 30}px, ${-position.y * 30}px, 0)
          rotateX(${-position.y * 4}deg)
          rotateY(${position.x * 4}deg)
          scale(1.2)
        `;
      }

      frameId = requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", handlePointerMove);
    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      aria-hidden = "true"
      className = "pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black"
      style = {{ perspective: "1200px" }}
    >
      <div
        ref = {backgroundRef}
        className = "absolute inset-0 bg-cover bg-center"
        style = {{
          backgroundImage: "url('/background.jpg')",
          transform: "scale(1.2)",
        }}
      />
      <div className = "absolute inset-0 bg-black/40" />
    </div>
  );
}