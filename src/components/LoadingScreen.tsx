import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
  minDuration?: number;
}

const LETTERS = [
  { char: 'M', color: 'text-[#38bdf8]', glow: 'rgba(56,189,248,0.7)' },
  { char: 'I', color: 'text-[#38bdf8]', glow: 'rgba(56,189,248,0.7)' },
  { char: 'Q', color: 'text-[#38bdf8]', glow: 'rgba(56,189,248,0.7)' },
  { char: 'D', color: 'text-[#22d3ee]', glow: 'rgba(34,211,238,0.7)' },
  { char: 'A', color: 'text-[#22d3ee]', glow: 'rgba(34,211,238,0.7)' },
  { char: 'D', color: 'text-[#22d3ee]', glow: 'rgba(34,211,238,0.7)' },
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  minDuration = 2400,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      const removeTimer = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 700); // fade out duration
      return () => clearTimeout(removeTimer);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onComplete]);

  if (!isVisible) return null;

  return (
    <div
      id="loading-screen"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070b14]/94 backdrop-blur-md transition-opacity duration-700 ease-out select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <style>{`
        @keyframes letterSequentialReveal {
          0% {
            opacity: 0;
            transform: translateY(14px) scale(0.7);
            filter: blur(6px);
          }
          18% {
            opacity: 1;
            transform: translateY(-3px) scale(1.18);
            filter: blur(0px);
          }
          28% {
            transform: translateY(0) scale(1);
          }
          82% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
          95%, 100% {
            opacity: 0;
            transform: translateY(-6px) scale(0.85);
            filter: blur(4px);
          }
        }

        .animate-letter-reveal {
          animation: letterSequentialReveal 2.3s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
        }
      `}</style>

      <div className="flex flex-col items-center justify-center gap-6">
        {/* Glowing Circular Ring Spinner */}
        <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24">
          {/* Subtle background track */}
          <div className="absolute inset-1 rounded-full border-[3.5px] border-slate-800/50" />

          {/* Glowing Animated Ring */}
          <svg
            className="w-full h-full animate-spin drop-shadow-[0_0_18px_rgba(56,189,248,0.85)]"
            viewBox="0 0 100 100"
            style={{ animationDuration: '1.25s' }}
          >
            <defs>
              <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0369a1" stopOpacity="0.05" />
                <stop offset="35%" stopColor="#0284c7" stopOpacity="0.35" />
                <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#loadingGradient)"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeDasharray="210"
              strokeDashoffset="50"
            />
          </svg>
        </div>

        {/* Brand Text: Sequential Animated MIQDAD */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 font-extrabold text-2xl sm:text-3xl uppercase font-sans">
          {LETTERS.map((item, index) => (
            <span
              key={index}
              className={`inline-block animate-letter-reveal ${item.color}`}
              style={{
                animationDelay: `${index * 140}ms`,
                textShadow: `0 0 14px ${item.glow}`,
              }}
            >
              {item.char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
