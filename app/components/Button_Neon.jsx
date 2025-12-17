'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function Button_Neon({ icon, text, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'relative inline-flex items-center rounded-full p-[2px]',
        className
      )}
    >
      {/* Gradient Stroke (TOP GLOW) */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-b from-violet-500/80 to-transparent" />

      {/* Inner Button */}
      <span className="relative inline-flex items-center gap-3 rounded-full bg-black/90 px-6 py-3 backdrop-blur-xl">
        
        {/* Icon */}
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600">
          {icon}
        </span>

        {/* Text */}
        <span className="text-white text-base font-medium whitespace-nowrap">
          {text}
        </span>
      </span>
    </button>
  );
}
