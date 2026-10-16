import React from 'react';

export const FlowerBudsLogo = ({
  className = "w-8 h-8",
  variant = "colored", // 'colored' (with dark sage bg), 'monochrome' (plain stroke), 'white'
  showText = false,
  textSize = "text-xl",
  textColor = "text-[#1E2320]"
}) => {
  // Exact vector representation of Flower Buds brand logo
  const logoEmblem = (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Outer Flower Bud Cup */}
      <path
        d="M 110 100 
           C 160 125, 205 135, 235 155
           L 235 325 
           M 390 100 
           C 340 125, 295 135, 265 155
           L 265 325
           M 110 100 
           L 110 260 
           C 110 395, 390 395, 390 260 
           L 390 100"
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Central Pointed Bud & Loops */}
      <path
        d="M 250 110 
           C 220 160, 175 220, 175 270 
           C 175 315, 215 325, 235 325
           C 250 325, 280 280, 285 220
           C 287 180, 270 135, 250 110 Z"
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 250 110 
           C 280 160, 325 220, 325 270 
           C 325 315, 285 325, 265 325
           C 250 325, 220 280, 215 220
           C 213 180, 230 135, 250 110 Z"
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (variant === 'colored') {
    return (
      <div className="flex items-center gap-3">
        <div className={`aspect-square rounded-xl bg-[#43524b] text-white p-1.5 flex items-center justify-center shadow-xs overflow-hidden shrink-0 ${className}`}>
          {logoEmblem}
        </div>
        {showText && (
          <div className="flex flex-col">
            <span className={`font-serif font-bold tracking-tight leading-none ${textSize} ${textColor}`}>
              Flower Buds
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#7C6354] font-medium mt-0.5">
              Kurunegala · Homagama
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className={`aspect-square text-current shrink-0 ${className}`}>
        {logoEmblem}
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-serif font-bold tracking-tight leading-none ${textSize} ${textColor}`}>
            Flower Buds
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#7C6354] font-medium mt-0.5">
            Kurunegala · Homagama
          </span>
        </div>
      )}
    </div>
  );
};
