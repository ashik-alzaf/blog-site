import type React from "react"
export default function SvgAnimate() {
  return (
    <div className="w-full flex justify-center">
      <svg
        className="wiremap max-w-full h-auto"
        viewBox="0 0 1200 560"
        preserveAspectRatio="none"
        style={
          {
            "--wire": "#4ECDC4",
          } as React.CSSProperties
        }
      >
        <defs>
          <marker id="arrow-left" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
            <path d="M10,4 L0,0 L0,8 Z" fill="var(--wire)" />
          </marker>
          <marker id="arrow-right" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
            <path d="M10,4 L0,0 L0,8 Z" fill="var(--wire)" />
          </marker>
        </defs>

        <path
          id="L1"
          className="wire"
          markerStart="none"
          markerEnd="url(#arrow-left)"
          d="M600,280
         C560,280 520,250 520,210
         S520,140 440,130
         S300,120 190,110"
          stroke="#4ECDC4"
          strokeWidth="2"
          fill="none"
        />
        <path
          id="L2"
          className="wire"
          markerEnd="url(#arrow-left)"
          d="M600,280
         C560,280 520,270 520,240
         S520,210 460,205
         S320,200 190,210"
          stroke="#4ECDC4"
          strokeWidth="2"
          fill="none"
        />
        <path
          id="L3"
          className="wire"
          markerEnd="url(#arrow-left)"
          d="M600,280
         C560,280 520,300 520,325
         S520,360 460,365
         S320,370 190,350"
          stroke="#4ECDC4"
          strokeWidth="2"
          fill="none"
        />
        <path
          id="L4"
          className="wire"
          markerEnd="url(#arrow-left)"
          d="M600,280
         C560,300 520,340 520,390
         S520,460 440,465
         S300,470 190,470"
          stroke="#4ECDC4"
          strokeWidth="2"
          fill="none"
        />

        <path
          id="R1"
          className="wire"
          markerEnd="url(#arrow-right)"
          d="M600,280
         C640,280 680,250 680,210
         S680,140 760,130
         S900,120 1010,110"
          stroke="#4ECDC4"
          strokeWidth="2"
          fill="none"
        />
        <path
          id="R2"
          className="wire"
          markerEnd="url(#arrow-right)"
          d="M600,280
         C640,280 680,270 680,240
         S680,210 740,205
         S880,200 1010,210"
          stroke="#4ECDC4"
          strokeWidth="2"
          fill="none"
        />
        <path
          id="R3"
          className="wire"
          markerEnd="url(#arrow-right)"
          d="M600,280
         C640,280 680,300 680,325
         S680,360 740,365
         S880,370 1010,350"
          stroke="#4ECDC4"
          strokeWidth="2"
          fill="none"
        />
        <path
          id="R4"
          className="wire"
          markerEnd="url(#arrow-right)"
          d="M600,280
         C640,300 680,340 680,390
         S680,460 760,465
         S900,470 1010,470"
          stroke="#4ECDC4"
          strokeWidth="2"
          fill="none"
        />

        <circle r="6" fill="#FF6B35" opacity="0.9">
          <animateMotion dur="4.2s" repeatCount="indefinite">
            <mpath href="#L1" />
          </animateMotion>
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle r="6" fill="#F7931E" opacity="0.9">
          <animateMotion dur="4.4s" begin=".3s" repeatCount="indefinite">
            <mpath href="#L2" />
          </animateMotion>
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle r="6" fill="#FFD23F" opacity="0.9">
          <animateMotion dur="4.6s" begin=".6s" repeatCount="indefinite">
            <mpath href="#L3" />
          </animateMotion>
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle r="6" fill="#06FFA5" opacity="0.9">
          <animateMotion dur="4.8s" begin=".9s" repeatCount="indefinite">
            <mpath href="#L4" />
          </animateMotion>
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.6s" repeatCount="indefinite" />
        </circle>

        <circle r="6" fill="#4ECDC4" opacity="0.9">
          <animateMotion dur="4.2s" repeatCount="indefinite">
            <mpath href="#R1" />
          </animateMotion>
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle r="6" fill="#45B7D1" opacity="0.9">
          <animateMotion dur="4.4s" begin=".3s" repeatCount="indefinite">
            <mpath href="#R2" />
          </animateMotion>
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle r="6" fill="#96CEB4" opacity="0.9">
          <animateMotion dur="4.6s" begin=".6s" repeatCount="indefinite">
            <mpath href="#R3" />
          </animateMotion>
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle r="6" fill="#FFEAA7" opacity="0.9">
          <animateMotion dur="4.8s" begin=".9s" repeatCount="indefinite">
            <mpath href="#R4" />
          </animateMotion>
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.6s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}
