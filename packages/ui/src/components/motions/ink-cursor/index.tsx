"use client"

import React, { useRef, useEffect, ReactElement } from "react";

// Define types for trail points
interface TrailPoint {
  x: number;
  y: number;
  dx: number;
  dy: number;
}

// Define type for pointer position
interface PointerPosition {
  x: number | null;
  y: number | null;
}

// Define type for effect parameters
interface CursorParams {
  pointsNumber: number;
  widthFactor: number;
  mouseThreshold: number;
  spring: number;
  friction: number;
}

export const useInkCursor = (): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const pointerRef = useRef<PointerPosition>({
    x: null,
    y: null,
  });
  const trailRef = useRef<TrailPoint[]>([]);
  const paramsRef = useRef<CursorParams>({
    pointsNumber: 40,
    widthFactor: 0.3,
    mouseThreshold: 0.6,
    spring: 0.4,
    friction: 0.5,
  });

  useEffect(() => {
    pointerRef.current = {
      x: 0.5 * window.innerWidth,
      y: 0.5 * window.innerHeight,
    };

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    ctxRef.current = ctx;

    // Initialize trail array
    const trail: TrailPoint[] = new Array(paramsRef.current.pointsNumber)
      .fill(null)
      .map(() => ({
        x: pointerRef.current.x as number,
        y: pointerRef.current.y as number,
        dx: 0,
        dy: 0,
      }));

    trailRef.current = trail;

    const updateMousePosition = (x: number, y: number): void => {
      pointerRef.current.x = x;
      pointerRef.current.y = y;
    };

    const handleMouseMove = (e: MouseEvent): void => {
      updateMousePosition(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent): void => {
      updateMousePosition(Number(e.targetTouches[0]?.clientX), Number(e.targetTouches[0]?.clientY));
    };

    const setupCanvas = (): void => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const update = (t: number): void => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#833ab4");
      gradient.addColorStop(1, "#fd1d1d");
      ctx.strokeStyle = gradient;

      trailRef.current.forEach((p, pIdx) => {
        const prev = pIdx === 0 
          ? pointerRef.current as { x: number, y: number } 
          : trailRef.current[pIdx - 1];
          
        const spring = pIdx === 0 
          ? 0.4 * paramsRef.current.spring 
          : paramsRef.current.spring;
          
        p.dx += ((prev?.x as number) - p.x) * spring;
        p.dy += ((prev?.y as number) - p.y) * spring;
        p.dx *= paramsRef.current.friction;
        p.dy *= paramsRef.current.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(Number(trailRef.current[0]?.x), Number(trailRef.current[0]?.y));

      for (let i = 1; i < trailRef.current.length - 1; i++) {
        const xc = 0.5 * (Number(trailRef.current[i]?.x) + Number(trailRef.current[i + 1]?.x));
        const yc = 0.5 * (Number(trailRef.current[i]?.y) + Number(trailRef.current[i + 1]?.y));
        ctx.quadraticCurveTo(
          Number(trailRef.current[i]?.x), 
          Number(trailRef.current[i]?.y), 
          xc, 
          yc
        );
        ctx.lineWidth = paramsRef.current.widthFactor * (paramsRef.current.pointsNumber - i);
        ctx.stroke();
      }

      ctx.lineTo(
        Number(trailRef.current[trailRef.current.length - 1]?.x), 
        Number(trailRef.current[trailRef.current.length - 1]?.y)
      );
      ctx.stroke();

      window.requestAnimationFrame(update);
    };

    setupCanvas();
    update(0);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove as EventListener);
    window.addEventListener("resize", setupCanvas);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove as EventListener);
      window.removeEventListener("resize", setupCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-screen w-screen"
    />
  );
};

export default useInkCursor;