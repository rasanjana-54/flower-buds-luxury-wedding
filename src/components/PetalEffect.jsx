import React, { useEffect, useState } from 'react';

export const PetalEffect = ({ enabled }) => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    if (!enabled) {
      setPetals([]);
      return;
    }

    // Generate 16 gentle ambient petals
    const newPetals = Array.from({ length: 16 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 12 + Math.random() * 10,
      animationDelay: Math.random() * 8,
      size: 14 + Math.random() * 16,
      opacity: 0.35 + Math.random() * 0.4,
      rotation: Math.random() * 360
    }));

    setPetals(newPetals);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal-particle"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.animationDelay}s`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            opacity: petal.opacity,
            transform: `rotate(${petal.rotation}deg)`
          }}
        >
          <svg
            viewBox="0 0 30 40"
            fill="none"
            className="w-full h-full drop-shadow-sm"
          >
            <path
              d="M15 0 C25 10, 30 25, 20 35 C15 40, 5 38, 2 28 C-1 18, 5 5, 15 0 Z"
              fill="url(#petalGradient)"
            />
            <defs>
              <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE2E4" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#F8B4B9" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#E29578" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
};
