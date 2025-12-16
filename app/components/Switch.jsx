"use client";

import React, { useEffect, useState } from "react";

import { useTheme } from "next-themes";

const Switch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    
      <label className="switch">
        <input
          id="input"
          type="checkbox"
          checked={isDark}
          onChange={() => setTheme(isDark ? "light" : "dark")}
        />
        <div className="slider round">
          <div className="sun-moon">
            {/* MOON DOTS */}
            <svg className="moon-dot" id="moon-dot-1" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg className="moon-dot" id="moon-dot-2" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg className="moon-dot" id="moon-dot-3" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>

            {/* LIGHT RAYS */}
            <svg className="light-ray" id="light-ray-1" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg className="light-ray" id="light-ray-2" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg className="light-ray" id="light-ray-3" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>

            {/* CLOUDS */}
            <svg className="cloud-dark" id="cloud-1" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg className="cloud-dark" id="cloud-2" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg className="cloud-dark" id="cloud-3" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>

            <svg className="cloud-light" id="cloud-4" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg className="cloud-light" id="cloud-5" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg className="cloud-light" id="cloud-6" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
          </div>

          {/* STARS */}
          <div className="stars">
            <svg className="star" id="star-1" viewBox="0 0 20 20">
              <path d="M0 10 L10 0 L20 10 L10 20 Z" />
            </svg>
            <svg className="star" id="star-2" viewBox="0 0 20 20">
              <path d="M0 10 L10 0 L20 10 L10 20 Z" />
            </svg>
            <svg className="star" id="star-3" viewBox="0 0 20 20">
              <path d="M0 10 L10 0 L20 10 L10 20 Z" />
            </svg>
            <svg className="star" id="star-4" viewBox="0 0 20 20">
              <path d="M0 10 L10 0 L20 10 L10 20 Z" />
            </svg>
          </div>
        </div>
      </label>
    
  );
};

export default Switch;
