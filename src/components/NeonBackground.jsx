import React, { useEffect, useRef } from 'react';

// Animated neon gradient + subtle particles using canvas
export default function NeonBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.8 + 0.4,
      a: Math.random() * Math.PI * 2,
    }));

    const draw = (t) => {
      // animated background gradient
      const g = ctx.createLinearGradient(0, 0, w, h);
      const c1 = 180 + Math.sin(t * 0.0005) * 50;
      const c2 = 260 + Math.cos(t * 0.0007) * 50;
      g.addColorStop(0, `hsla(${c1}, 90%, 10%, 1)`);
      g.addColorStop(1, `hsla(${c2}, 90%, 12%, 1)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // soft vignette
      const rad = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, Math.max(w,h)/1.2);
      rad.addColorStop(0, 'rgba(0,0,0,0)');
      rad.addColorStop(1, 'rgba(0,0,0,0.3)');
      ctx.fillStyle = rad;
      ctx.fillRect(0, 0, w, h);

      // particles
      ctx.save();
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.a += 0.002;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(130, 255, 255, 0.35)';
        ctx.fill();
      });
      ctx.restore();

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-0" />;
}
