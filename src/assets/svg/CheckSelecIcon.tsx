import * as React from "react"
import { SVGProps } from "react"

const CheckSelecIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={14} cy={14} r={13.4} stroke="#3B71F7" strokeWidth={1.2} />
    <path
      d="M19.333 10 12 17.333 8.667 14"
      stroke="#3B71F7"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CheckSelecIcon
