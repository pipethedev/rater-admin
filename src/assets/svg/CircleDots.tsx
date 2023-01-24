import * as React from "react"
import { SVGProps } from "react"

const CircleDots = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={16} cy={16} r={16} fill="#DDE6FE" />
    <path
      d="M16 16.667a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333ZM20.667 16.666a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333ZM11.334 16.667a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333Z"
      stroke="#3B71F7"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CircleDots
