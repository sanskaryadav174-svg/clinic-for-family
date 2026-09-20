import React from 'react';

interface ArogyamLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export const ArogyamLogo: React.FC<ArogyamLogoProps> = ({
  className = '',
  size = 64,
  showText = true,
  textColor = 'text-[#2C322E]',
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon matching the uploaded signboard logo */}
      <div
        className="relative flex items-center justify-center shrink-0 rounded-2xl bg-[#FFFDF9] p-1.5 shadow-xs border border-[#EBE3D5]"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Curved path for Devanagari text "आरोग्यम्" */}
            <path
              id="arogyam-text-arc"
              d="M 32 82 A 75 75 0 0 1 168 82"
              fill="none"
            />
            {/* Soft gradient for the protective bottom arc */}
            <linearGradient id="cradleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E65100" />
              <stop offset="50%" stopColor="#EF6C00" />
              <stop offset="100%" stopColor="#E65100" />
            </linearGradient>
          </defs>

          {/* Curved Text: आरोग्यम् matching the sign */}
          <text
            className="font-devanagari font-black"
            fill="#DF5024"
            fontSize="27"
            letterSpacing="2.5"
            style={{ fontWeight: 900 }}
          >
            <textPath
              href="#arogyam-text-arc"
              startOffset="50%"
              textAnchor="middle"
            >
              आरोग्यम्
            </textPath>
          </text>

          {/* Protective / Caring crescent bottom cradle */}
          <path
            d="M 46 138 C 62 172 138 172 154 138 C 144 156 112 165 100 165 C 88 165 56 156 46 138 Z"
            fill="url(#cradleGrad)"
          />

          {/* Left Figure: Mother / Adult in Magenta / Purple */}
          <g fill="#99225D">
            {/* Head */}
            <circle cx="82" cy="98" r="8.5" />
            {/* Body & Sheltering Arm reaching upward-right to center */}
            <path
              d="M 82 109 
                 C 74 113, 67 122, 67 136 
                 C 70 148, 77 158, 80 162 
                 L 85 162 
                 C 83 154, 82 144, 83 138 
                 C 86 145, 88 155, 90 162 
                 L 94 162 
                 C 92 153, 90 138, 90 128
                 L 98 120 
                 L 100 102 
                 L 95 104 
                 L 88 116 
                 C 85 112, 83 110, 82 109 Z"
            />
            {/* Raised sheltering arm specifically creating the arch over child */}
            <path
              d="M 87 113 
                 Q 96 100 106 97 
                 Q 104 94 100 93 
                 Q 89 97 83 109 Z"
            />
          </g>

          {/* Right Figure: Father / Adult in Royal Blue */}
          <g fill="#1D70B8">
            {/* Head */}
            <circle cx="125" cy="95" r="9" />
            {/* Body & Sheltering Arm reaching upward-left to meet mother's hand */}
            <path
              d="M 125 107 
                 C 134 111, 142 120, 142 135 
                 C 139 148, 131 158, 128 162 
                 L 123 162 
                 C 125 154, 126 144, 125 138 
                 C 122 145, 120 155, 117 162 
                 L 113 162 
                 C 116 153, 118 138, 118 128
                 L 109 119 
                 L 108 102 
                 L 113 104 
                 L 120 115 
                 C 122 111, 124 108, 125 107 Z"
            />
            {/* Raised sheltering arm meeting the other */}
            <path
              d="M 120 111 
                 Q 111 99 101 96 
                 Q 103 93 107 92 
                 Q 118 96 124 107 Z"
            />
          </g>

          {/* Center Figure: Joyful Child in Fresh Green */}
          <g fill="#388E3C">
            {/* Head */}
            <circle cx="103" cy="120" r="5.5" />
            {/* Small body with raised arms */}
            <path
              d="M 103 127 
                 C 98 128 95 133 94 139 
                 L 96 140 
                 L 98 133 
                 L 101 133 
                 L 99 156 
                 L 102 156 
                 L 103 143 
                 L 105 156 
                 L 108 156 
                 L 106 133 
                 L 109 133 
                 L 111 140 
                 L 113 139 
                 C 112 133 109 128 103 127 Z"
            />
            {/* Child arms raised joyfully */}
            <path
              d="M 97 129 L 93 123 L 95 122 L 99 128 Z"
            />
            <path
              d="M 109 129 L 114 123 L 112 122 L 107 128 Z"
            />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1E2421]">
              Arogyam
            </span>
            <span className="font-devanagari text-sm sm:text-base font-bold text-[#DF5024]">
              आरोग्यम्
            </span>
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#5A635B]">
            Family Clinic • Wagholi
          </span>
        </div>
      )}
    </div>
  );
};
