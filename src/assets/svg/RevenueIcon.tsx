import * as React from "react"
import { SVGProps } from "react"

const RevenueIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={32} cy={32} r={32} fill="#E0FFF6" />
    <path
      d="M32 47c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15Z"
      fill="#00C288"
    />
    <path
      d="M26.75 36a3.5 3.5 0 0 0 3.5 3.5h3.25a3.75 3.75 0 1 0 0-7.5h-3a3.75 3.75 0 1 1 0-7.5h3.25a3.5 3.5 0 0 1 3.5 3.5M32 22.25v2.25m0 15v2.25M47 32c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15Z"
      stroke="#E0FFF6"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default RevenueIcon
