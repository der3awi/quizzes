import React from 'react';

interface RadarChartProps {
  categories: string[];
  scores: number[]; // 0 to 100 per category
  counts: number[]; // total questions answered in each category
  totalPerCategory: number[]; // total questions available in each category
  size?: number;
}

export const RadarChart: React.FC<RadarChartProps> = ({
  categories,
  scores,
  counts,
  totalPerCategory,
  size = 320,
}) => {
  const center = size / 2;
  const radius = (size / 2) - 48; // padding for labels
  const numAxes = categories.length;

  // Grid levels (25%, 50%, 75%, 100%)
  const levels = [0.25, 0.5, 0.75, 1.0];

  const getCoordinates = (index: number, valueRatio: number) => {
    // Angle in radians; start from top (-PI/2)
    const angle = (Math.PI * 2 * index) / numAxes - Math.PI / 2;
    const x = center + radius * valueRatio * Math.cos(angle);
    const y = center + radius * valueRatio * Math.sin(angle);
    return { x, y };
  };

  // Build the polygon points for user scores
  const scorePolygonPoints = scores
    .map((score, index) => {
      const ratio = Math.max(0.05, Math.min(1.0, score / 100));
      const { x, y } = getCoordinates(index, ratio);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="overflow-visible select-none"
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Background Concentric Grid Polygons */}
          {levels.map((lvl) => {
            const levelPoints = Array.from({ length: numAxes })
              .map((_, i) => {
                const { x, y } = getCoordinates(i, lvl);
                return `${x},${y}`;
              })
              .join(' ');

            return (
              <g key={lvl}>
                <polygon
                  points={levelPoints}
                  fill={lvl === 1.0 ? 'rgba(15, 23, 42, 0.4)' : 'none'}
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1"
                  strokeDasharray={lvl < 1.0 ? '3,3' : undefined}
                />
                {/* Level marker label along top axis */}
                <text
                  x={center + 4}
                  y={center - radius * lvl}
                  fill="rgba(148, 163, 184, 0.5)"
                  fontSize="9"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {Math.round(lvl * 100)}%
                </text>
              </g>
            );
          })}

          {/* Radial Spokes from Center */}
          {Array.from({ length: numAxes }).map((_, i) => {
            const { x, y } = getCoordinates(i, 1.0);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="1"
              />
            );
          })}

          {/* User Performance Filled Polygon */}
          <polygon
            points={scorePolygonPoints}
            fill="rgba(244, 63, 94, 0.25)"
            stroke="#f43f5e"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Vertices Dots */}
          {scores.map((score, index) => {
            const ratio = Math.max(0.05, Math.min(1.0, score / 100));
            const { x, y } = getCoordinates(index, ratio);
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="4.5"
                fill="#fb7185"
                stroke="#0f172a"
                strokeWidth="2"
                className="transition-all duration-300"
              />
            );
          })}

          {/* Axis Labels */}
          {categories.map((cat, i) => {
            const angle = (Math.PI * 2 * i) / numAxes - Math.PI / 2;
            const labelDist = radius + 22;
            const x = center + labelDist * Math.cos(angle);
            const y = center + labelDist * Math.sin(angle);

            // Alignment helper
            let textAnchor: 'middle' | 'start' | 'end' = 'middle';
            if (Math.cos(angle) > 0.3) textAnchor = 'start';
            else if (Math.cos(angle) < -0.3) textAnchor = 'end';

            return (
              <g key={i}>
                <text
                  x={x}
                  y={y}
                  textAnchor={textAnchor}
                  fill="#cbd5e1"
                  fontSize="11"
                  fontWeight="600"
                  className="tracking-tight"
                >
                  {cat.length > 20 ? `${cat.substring(0, 18)}...` : cat}
                </text>
                <text
                  x={x}
                  y={y + 13}
                  textAnchor={textAnchor}
                  fill="#f43f5e"
                  fontSize="10"
                  fontWeight="700"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {scores[i]}% ({counts[i]}/{totalPerCategory[i]})
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Mastery Grid Breakdown */}
      <div className="grid grid-cols-2 gap-2 w-full mt-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-slate-900/60 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between"
          >
            <div className="text-xs font-semibold text-slate-300 truncate" title={cat}>
              {cat}
            </div>
            <div className="flex items-center justify-between mt-1.5">
              <span className="text-[11px] font-mono text-slate-400">
                {counts[i]} / {totalPerCategory[i]} answered
              </span>
              <span
                className={`text-xs font-mono font-bold ${
                  scores[i] >= 80
                    ? 'text-emerald-400'
                    : scores[i] >= 60
                    ? 'text-amber-400'
                    : 'text-rose-400'
                }`}
              >
                {scores[i]}%
              </span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-slate-800 h-1 rounded-full mt-1.5 overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  scores[i] >= 80
                    ? 'bg-emerald-500'
                    : scores[i] >= 60
                    ? 'bg-amber-500'
                    : 'bg-rose-500'
                }`}
                style={{ width: `${scores[i]}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
