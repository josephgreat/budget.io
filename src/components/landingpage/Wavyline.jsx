import React from "react";

function Wavyline() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 330 800 80">
      <defs>
        <linearGradient
          id="sssquiggly-grad"
          x1="50%" 
          x2="50%"
          y1="0%"
          y2="100%"
          gradientTransform="rotate(270)"
        >
          <stop offset="0%" stopColor="#290028"></stop>
          <stop offset="100%" stopColor="#ccb200"></stop>
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke="url(#sssquiggly-grad)"
        strokeLinecap="round"
        strokeWidth="4.5"
        transform="translate(-5 361.576)"
      >
        <path d="M10 10c31.25 5.833 85.417 33.625 150 28s93.333-52.5 160-55 93.333 44.667 160 43c66.667-1.667 93.333-54.333 160-51 66.667 3.333 126.667 53.042 160 67"></path>
      </g>
    </svg>
  );
}

export default Wavyline;