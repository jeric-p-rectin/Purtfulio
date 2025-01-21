import React from 'react';

function SvgComponent({ svgColor }: { svgColor: string }) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      viewBox="0 0 1280.000000 982.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,982.000000) scale(0.100000,-0.100000)"
        fill={svgColor} // Dynamic fill color
        stroke={svgColor} // Dynamic stroke color
      >
        <path
          d="M12699 9767 c-220 -139 -660 -457 -1742 -1259 -4009 -2974 -8999 -6733 -9712 -7317 l-100 -82 -38 43 c-73 81 -192 233 -276 352 -47 66 -103 138 -125 160 -22 23 -47 61 -55 86 -35 99 -62 57 -116 -176 -132 -574 -192 -750 -431 -1259 -82 -176 -98 -218 -99 -260 l0 -50 42 2 c45 2 53 4 298 93 460 167 734 234 1205 295 286 37 340 50 340 80 0 13 -53 44 -102 59 -11 3 -15 12 -11 24 6 26 -45 74 -202 187 -173 125 -355 276 -355 294 0 4 22 20 49 35 89 48 460 298 781 526 881 625 1931 1404 5135 3805 3926 2943 4905 3704 5468 4255 179 174 189 197 46 107z m-11939 -8577 c119 -237 331 -453 552 -564 l87 -43 -107 -7 c-339 -23 -748 -147 -994 -302 -21 -13 -38 -20 -38 -15 0 6 5 13 11 17 19 12 124 178 176 280 115 222 185 445 219 691 l18 124 21 -58 c12 -32 37 -87 55 -123z"
          stroke={svgColor}
        />
      </g>
      <text
        style={{
          fontFamily: "Lato", // Use double quotes for font-family
          fontSize: '34.3821px',
          letterSpacing: '1.9px',
          lineHeight: '55.0113px',
          wordSpacing: '11.7px',
          whiteSpace: 'pre',
          transformBox: 'fill-box',
          transformOrigin: '77.0209px 16.8063px',
        }}
        transform="matrix(2.404341, -1.8118, 2.273523, 3.017066, 240.834705, 64.358979)"
        x="205.852"
        y="405.325"
        fill={svgColor} // Dynamic color for text
      >
        Click to Visit
      </text>
      <defs>
        <style>
          @import url(&apos;https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap&apos;);
        </style>
      </defs>
    </svg>
  );
}

export default SvgComponent;
