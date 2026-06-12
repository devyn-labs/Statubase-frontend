"use client";

import React, { useState, useRef } from "react";
import { chartSeries } from "@/data/listings";

export const InteractiveChart: React.FC = () => {
  const [activeSeries, setActiveSeries] = useState<"arr" | "margin">("arr");
  const [activeIndex, setActiveIndex] = useState<number>(4);
  const containerRef = useRef<HTMLDivElement>(null);

  const series = chartSeries[activeSeries];
  const width = 360;
  const height = 130;
  const padding = { x: 22, top: 14, bottom: 16 };

  // Calculate coordinates for SVG paths
  const getPoint = (value: number, index: number, total: number) => {
    const x = padding.x + index * ((width - padding.x * 2) / (total - 1));
    const y = height - padding.bottom - (value / 100) * (height - padding.top - padding.bottom);
    return { x, y };
  };

  const points = series.values.map((val, idx) => getPoint(val, idx, series.values.length));

  // Compute spline path (Cubic Bezier)
  let curvePath = "";
  if (points.length > 0) {
    curvePath = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const midX = (prev.x + curr.x) / 2;
      curvePath += ` C ${midX} ${prev.y}, ${midX} ${curr.y}, ${curr.x} ${curr.y}`;
    }
  }

  // Compute closed area path for filling gradient
  const areaPath = points.length > 0
    ? `${curvePath} L ${points[points.length - 1].x} ${height - padding.bottom} L ${points[0].x} ${height - padding.bottom} Z`
    : "";

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const index = Math.round(ratio * (series.values.length - 1));
    setActiveIndex(index);
  };

  const activePoint = points[activeIndex] || points[points.length - 1];
  const activeTooltipText = series.tooltip[activeIndex] || "";

  // Grid lines y positions
  const gridLines = [28, 58, 88, 118];

  return (
    <div className="flex flex-col bg-card-bg/60 border border-card-border p-6 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300">
      {/* Metrics Headers */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => {
            setActiveSeries("arr");
            setActiveIndex(4);
          }}
          className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
            activeSeries === "arr"
              ? "bg-accent-primary/10 border-accent-primary text-text-primary"
              : "bg-transparent border-border-color/40 text-text-secondary hover:border-border-color"
          }`}
        >
          <span className="text-xs uppercase tracking-wider text-text-tertiary">ARR</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-xl font-bold font-display">$1.25M</span>
            <span className="text-xs text-[#081B2B] font-semibold">+32%</span>
          </div>
        </button>

        <button
          onClick={() => {
            setActiveSeries("margin");
            setActiveIndex(4);
          }}
          className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
            activeSeries === "margin"
              ? "bg-accent-primary/10 border-accent-primary text-text-primary"
              : "bg-transparent border-border-color/40 text-text-secondary hover:border-border-color"
          }`}
        >
          <span className="text-xs uppercase tracking-wider text-text-tertiary">Net Margin</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-xl font-bold font-display">44%</span>
            <span className="text-xs px-1.5 py-0.5 rounded-full bg-accent-primary/20 text-accent-primary font-medium text-[10px]">
              High
            </span>
          </div>
        </button>
      </div>

      {/* Chart Section */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
            {series.label}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent-primary/10 text-accent-primary text-[10px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
            Live model
          </span>
        </div>

        {/* SVG Container */}
        <div
          ref={containerRef}
          onPointerMove={handlePointerMove}
          className="relative w-full h-[130px] select-none cursor-crosshair"
        >
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0" />
              </linearGradient>
              <filter id="chartGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Grid lines */}
            <g className="opacity-15 dark:opacity-20">
              {gridLines.map((yVal, idx) => (
                <line
                  key={idx}
                  x1="12"
                  x2="348"
                  y1={yVal}
                  y2={yVal}
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="text-text-primary"
                />
              ))}
            </g>

            {/* Area under curve */}
            {areaPath && <path d={areaPath} fill="url(#chartGrad)" />}

            {/* Main spline line */}
            {curvePath && (
              <path
                d={curvePath}
                fill="none"
                stroke="var(--accent-primary)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="url(#chartGlow)"
              />
            )}

            {/* Vertical Cursor Line */}
            {activePoint && (
              <line
                x1={activePoint.x}
                x2={activePoint.x}
                y1="12"
                y2="116"
                stroke="var(--accent-primary)"
                strokeWidth="1.5"
                strokeDasharray="2 2"
                className="opacity-40"
              />
            )}

            {/* Interactive Points */}
            <g>
              {points.map((pt, idx) => (
                <circle
                  key={idx}
                  cx={pt.x}
                  cy={pt.y}
                  r={idx === activeIndex ? 7 : 4.5}
                  className={`transition-all duration-150 ${
                    idx === activeIndex
                      ? "fill-accent-primary stroke-bg-primary stroke-2"
                      : "fill-bg-primary stroke-accent-primary stroke-[1.5] opacity-80"
                  }`}
                />
              ))}
            </g>
          </svg>

          {/* Floating Tooltip */}
          {activePoint && (
            <div
              style={{
                left: `${(activePoint.x / width) * 100}%`,
                top: `${Math.max(8, activePoint.y - 38)}px`,
              }}
              className="absolute -translate-x-1/2 whitespace-nowrap bg-bg-primary text-text-primary border border-accent-primary/30 px-2.5 py-1 rounded-md text-[10px] font-bold font-mono shadow-md z-10 pointer-events-none transition-all duration-100"
            >
              {activeTooltipText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
