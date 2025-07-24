import React from "react"

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export default function Logo({ className, width = 24, height = 24 }: LogoProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        {/* PDF Document Shape */}
        <rect
          x="6"
          y="4"
          width="16"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Document Lines */}
        <line
          x1="10"
          y1="9"
          x2="18"
          y2="9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="12"
          x2="18"
          y2="12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="15"
          x2="15"
          y2="15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Chat Bubble */}
        <circle
          cx="22"
          cy="20"
          r="6"
          fill="currentColor"
          className="text-primary"
        />
        
        {/* Chat Dots */}
        <circle cx="20" cy="20" r="1" fill="white" />
        <circle cx="22" cy="20" r="1" fill="white" />
        <circle cx="24" cy="20" r="1" fill="white" />
      </svg>
      
      <span className="font-bold text-lg">PDF Chat</span>
    </div>
  )
}