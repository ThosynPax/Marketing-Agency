import React from 'react';

interface CurvedArrowProps {
  className?: string;
}

export function CurvedArrow({ className = "w-3.5 h-3.5" }: CurvedArrowProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 7h9a5 5 0 0 1 5 5v7" />
      <path d="M13 14l5 5 5-5" />
    </svg>
  );
}

export function CurvedCornerArrow({ className = "w-3.5 h-3.5" }: CurvedArrowProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Downward curve that hooks to the right */}
      <path d="M6 6v6a4 4 0 0 0 4 4h8" />
      <path d="M14 12l4 4-4 4" />
    </svg>
  );
}
