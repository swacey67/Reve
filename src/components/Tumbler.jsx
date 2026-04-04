import React from 'react';
import { isColorDark } from '../utils';

export default function Tumbler({ color, topColor, bottomColor, handleColor, headColor, lidBaseColor, patternId, isDark, delay, isStatic = false, isExploded = false, activePart = null, onPartClick = null }) {
  const containerClass = isStatic ? "relative drop-shadow-xl flex justify-center w-full" : "relative group perspective-1000";
  const innerClass = isStatic ? "transform scale-100 transition-transform duration-500 hover:scale-105" : "transform rotate-[18deg] group-hover:rotate-[12deg] group-hover:-translate-y-6 transition-all duration-500 ease-out cursor-pointer drop-shadow-2xl animate-fade-in-up";
  const fillTop = patternId ? `url(#${patternId})` : (topColor || color);
  const fillBottom = patternId ? `url(#${patternId})` : (bottomColor || color);
  const fillHandle = handleColor || color;
  const fillHead = headColor || (typeof isDark === 'boolean' && isDark ? "#111111" : "#9CA3AF");

  const topDark = typeof isDark === 'boolean' ? isDark : isColorDark(fillTop);
  const bottomDark = typeof isDark === 'boolean' ? isDark : isColorDark(fillBottom);
  const headDark = typeof isDark === 'boolean' ? isDark : isColorDark(fillHead);

  return (
    <div className={containerClass} style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}>
      <div className={innerClass}>
        <svg width="240" height="360" viewBox="-50 -50 240 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
          <defs>
            <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#9ca3af" /><stop offset="20%" stopColor="#f3f4f6" /><stop offset="75%" stopColor="#d1d5db" /><stop offset="100%" stopColor="#6b7280" />
            </linearGradient>
            <pattern id="collabPattern" width="180" height="360" patternUnits="userSpaceOnUse"><image href="/images/chainsaw.jpg" width="180" height="360" preserveAspectRatio="xMidYMid slice" /></pattern>
            <pattern id="jjkPattern" width="180" height="360" patternUnits="userSpaceOnUse"><image href="/images/jjk.jpg" width="180" height="360" preserveAspectRatio="xMidYMid slice" /></pattern>
            <pattern id="vagabondPattern" width="180" height="360" patternUnits="userSpaceOnUse"><image href="/images/vagabond.jpg" width="180" height="360" preserveAspectRatio="xMidYMid slice" /></pattern>
          </defs>

          <g style={{ transform: isExploded ? 'translateX(40px)' : 'translateX(0)', transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }} onClick={(e) => { e.stopPropagation(); onPartClick && onPartClick('handle'); }} className={onPartClick ? "cursor-pointer hover:brightness-110 transition-all" : ""}>
            {activePart === 'handle' && <path d="M 88 85 L 115 85 C 122 85 125 90 125 95 L 125 155 C 125 160 122 165 115 165 L 82 165" stroke="white" strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round" className="opacity-80" strokeDasharray="6 6" pointerEvents="none" />}
            <path d="M 88 85 L 115 85 C 122 85 125 90 125 95 L 125 155 C 125 160 122 165 115 165 L 82 165" stroke={fillHandle} strokeWidth="11" fill="none" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-md" />
          </g>

          <g style={{ transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }} onClick={(e) => { e.stopPropagation(); onPartClick && onPartClick('top'); }} className={onPartClick ? "cursor-pointer hover:brightness-110 transition-all" : ""}>
            <path d="M 15 50 L 105 50 L 92 180 L 28 180 Z" fill={fillTop} />
            <path d="M 25 50 L 38 50 L 38 180 L 30 180 Z" fill="#ffffff" fillOpacity={topDark ? "0.15" : "0.5"} />
            <path d="M 38 50 L 45 50 L 45 180 L 38 180 Z" fill="#ffffff" fillOpacity={topDark ? "0.05" : "0.2"} />
            <path d="M 85 50 L 95 50 L 88 180 L 80 180 Z" fill="#000000" fillOpacity={topDark ? "0.4" : "0.15"} />
            {activePart === 'top' && <path d="M 15 50 L 105 50 L 92 180 L 28 180 Z" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" className="opacity-70" pointerEvents="none" />}
          </g>

          <g style={{ transform: isExploded ? 'translateY(45px)' : 'translateY(0)', transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }} onClick={(e) => { e.stopPropagation(); onPartClick && onPartClick('bottom'); }} className={onPartClick ? "cursor-pointer hover:brightness-110 transition-all" : ""}>
            <path d="M 28 180 L 92 180 L 85 245 C 84 252 80 255 75 255 L 45 255 C 40 255 36 252 35 245 L 28 180 Z" fill={fillBottom} />
            <path d="M 28 180 L 92 180 L 90 184 L 30 184 Z" fill="#000000" fillOpacity="0.12" />
            <path d="M 30 180 L 38 180 L 35 245 L 30 245 Z" fill="#ffffff" fillOpacity={bottomDark ? "0.15" : "0.5"} />
            <path d="M 80 180 L 88 180 L 83 245 L 75 245 Z" fill="#000000" fillOpacity={bottomDark ? "0.4" : "0.15"} />
            <path d="M 35 245 C 45 260 75 260 85 245 C 75 252 45 252 35 245 Z" fill="#000000" fillOpacity="0.25" />
            {activePart === 'bottom' && <path d="M 28 180 L 92 180 L 85 245 C 84 252 80 255 75 255 L 45 255 C 40 255 36 252 35 245 L 28 180 Z" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" className="opacity-70" pointerEvents="none" />}
          </g>

          <g style={{ transform: isExploded ? 'translateY(-40px)' : 'translateY(0)', transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }} onClick={(e) => { e.stopPropagation(); onPartClick && onPartClick('head'); }} className={onPartClick ? "cursor-pointer hover:brightness-110 transition-all" : ""}>
            <path d="M 13 40 L 107 40 L 105 50 L 15 50 Z" fill="url(#metalGrad)" />
            <path d="M 17 25 L 103 25 L 107 40 L 13 40 Z" fill="#ffffff" fillOpacity="0.5" />
            <path d="M 22 15 L 98 15 L 103 25 L 17 25 Z" fill="#ffffff" fillOpacity="0.75" />
            <rect x="42" y="10" width="36" height="6" rx="3" fill={lidBaseColor || (headDark ? "#2A2A2A" : "#E5E7EB")} />
            <rect x="55" y="5" width="10" height="6" rx="2" fill={fillHead} />
            {activePart === 'head' && <rect x="52" y="2" width="16" height="12" rx="3" fill="none" stroke="white" strokeWidth="2" strokeDasharray="2 2" className="opacity-80" pointerEvents="none" />}
          </g>
        </svg>
      </div>
    </div>
  );
}