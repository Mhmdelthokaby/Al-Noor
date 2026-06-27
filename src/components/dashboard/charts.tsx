"use client";

import { cn } from "@/lib/utils";

interface BarChartProps {
  data: { month: string; revenue: number; target?: number }[];
  height?: number;
}

export function RevenueChart({ data, height = 200 }: BarChartProps) {
  const max = Math.max(...data.map((d) => Math.max(d.revenue, d.target || 0)));
  const barWidth = Math.max(20, Math.min(40, 600 / data.length - 8));

  return (
    <div className="relative" style={{ height }}>
      <div className="flex items-end justify-between gap-2 h-full">
        {data.map((d) => (
          <div key={d.month} className="flex flex-col items-center justify-end flex-1 h-full">
            {d.target && (
              <div
                className="w-full rounded-t-sm bg-warning/20 border-t-2 border-warning/40"
                style={{ height: `${(d.target / max) * 100}%`, maxWidth: barWidth }}
              />
            )}
            <div
              className="w-full rounded-t-sm bg-gradient-to-t from-primary to-primary-light transition-all duration-500 hover:opacity-80"
              style={{ height: `${(d.revenue / max) * 100}%`, maxWidth: barWidth }}
            />
            <span className="text-[10px] text-muted-foreground mt-1.5">{d.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LineChart({ data, height = 200 }: { data: { month: string; students: number }[]; height?: number }) {
  const max = Math.max(...data.map((d) => d.students));
  const min = Math.min(...data.map((d) => d.students));
  const range = max - min || 1;
  const width = 100;
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((d.students - min) / range) * (height - 20) - 10;
    return `${x},${y}`;
  });
  const linePath = `M${points.join(" L")}`;

  return (
    <div className="relative" style={{ height }}>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
        <path d={linePath} fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {data.map((d, i) => {
          const x = (i / (data.length - 1)) * width;
          const y = height - ((d.students - min) / range) * (height - 20) - 10;
          return (
            <g key={d.month}>
              <circle cx={x} cy={y} r="3" fill="#0f766e" className="hover:r-5 transition-all" />
              <text x={x} y={height - 3} textAnchor="middle" className="fill-muted-foreground" fontSize="3">
                {d.month}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
