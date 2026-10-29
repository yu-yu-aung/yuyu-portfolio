
"use client";

import React from "react";

const SquareDivider = ({ className = "", squareCount = 5 }) => {
  return (
    <div
      aria-hidden="true"
      className={`flex w-full items-center justify-center gap-4 py-6 sm:gap-5 sm:py-8 ${className}`}
    >
      {/* Left line */}
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand/40 to-brand/70" />

      {/* Rotating squares */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        {Array.from({ length: squareCount }, (_, index) => (
          <span
            key={index}
            className={`square-divider-block ${
              index === Math.floor(squareCount / 2)
                ? "square-divider-center"
                : ""
            }`}
            style={{ animationDelay: `${index * 180}ms` }}
          />
        ))}
      </div>

      {/* Right line */}
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-brand/40 to-brand/70" />

      <style>{`
        .square-divider-block {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 1px;
          background-color: var(--brand, currentColor);
          opacity: 0.45;
          animation: square-rotate 3s ease-in-out infinite;
        }

        .square-divider-center {
          opacity: 1;
          animation-duration: 2.5s;
        }

        @keyframes square-rotate {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(90deg) scale(1.15);
          }
        }

        @media (max-width: 639px) {
          .square-divider-block:nth-child(n + 4) {
            display: none;
          }

          .square-divider-block {
            width: 6px;
            height: 6px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .square-divider-block {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default SquareDivider;
