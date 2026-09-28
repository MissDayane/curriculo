import React, { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
  color: string;
  size: number;
}

export const DoodleCursorTrail: React.FC<{ enabled: boolean }> = ({ enabled }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const isEnabledRef = useRef(enabled);
  isEnabledRef.current = enabled;

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const colors = ['#111111', '#3157D5', '#FF6B5F', '#F4C542', '#55B98C'];

    const handleMouseMove = (e: MouseEvent) => {
      if (!isEnabledRef.current) return;
      const color = colors[Math.floor(Math.random() * colors.length)];
      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
        color,
        size: Math.random() * 2.5 + 1.5,
      });

      if (pointsRef.current.length > 25) {
        pointsRef.current.shift();
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isEnabledRef.current && pointsRef.current.length > 1) {
        for (let i = 0; i < pointsRef.current.length; i++) {
          const pt = pointsRef.current[i];
          pt.age += 1;
          const alpha = Math.max(0, 1 - pt.age / 24);

          ctx.save();
          ctx.globalAlpha = alpha * 0.55;
          ctx.fillStyle = pt.color;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
          ctx.fill();

          // Connect with hand-drawn organic line segment to previous point
          if (i > 0) {
            const prev = pointsRef.current[i - 1];
            ctx.beginPath();
            ctx.strokeStyle = pt.color;
            ctx.lineWidth = pt.size * 0.8;
            ctx.lineCap = 'round';
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(pt.x, pt.y);
            ctx.stroke();
          }

          ctx.restore();
        }

        pointsRef.current = pointsRef.current.filter((p) => p.age < 24);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};
