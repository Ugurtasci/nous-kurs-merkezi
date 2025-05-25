import { useEffect, useState } from 'react';

const CountdownCircle = ({ label, value, max }) => {
  const percent = (value / max) * 100;

  return (
    <div className="flex flex-col items-center mx-2">
      <div className="relative w-20 h-20">
        <svg className="w-full h-full">
          <circle
            className="text-gray-200"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="40"
            cy="40"
          />
          <circle
            className="text-pink-500"
            strokeWidth="8"
            strokeDasharray="188"
            strokeDashoffset={188 - (188 * percent) / 100}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="40"
            cy="40"
            transform="rotate(-90 40 40)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
          {value}
        </div>
      </div>
      <span className="mt-2 text-sm">{label}</span>
    </div>
  );
};

export default CountdownCircle;
