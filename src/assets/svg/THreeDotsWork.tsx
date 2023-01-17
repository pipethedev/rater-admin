import * as React from "react"
import { SVGProps } from "react"

const ThreeDotsWorker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={14} cy={14} r={14} fill="#F5F8FF" />
    <path
      d="M13.783 14.666a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333ZM18.45 14.666a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333ZM9.117 14.666a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333Z"
      stroke="#000"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ThreeDotsWorker
