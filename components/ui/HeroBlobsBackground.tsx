"use client";
import React, { useRef, useEffect, useLayoutEffect } from "react";

export default function HeroBlobsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function setCanvasSize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    setCanvasSize();
    const resizeObserver = new window.ResizeObserver(setCanvasSize);
    resizeObserver.observe(canvas);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    // Desactivar animación en móviles
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configuración de blobs sutiles
    const BLOB_COUNT = 8;
    const BLOBS = Array.from({ length: BLOB_COUNT }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      r: 28 + Math.random() * 22, // radios pequeños
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.25,
      alpha: 0.16 + Math.random() * 0.13
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#f3f4f6";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      BLOBS.forEach(blob => {
        blob.x += blob.dx;
        blob.y += blob.dy;
        if (blob.x < 0 || blob.x > 1) blob.dx *= -1;
        if (blob.y < 0 || blob.y > 1) blob.dy *= -1;
        const cx = blob.x * canvas.width;
        const cy = blob.y * canvas.height;
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, blob.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 140, 0, ${blob.alpha})`;
        ctx.shadowColor = "#ff8000";
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.restore();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden="true"
      style={{ background: '#f3f4f6' }}
    />
  );
}

