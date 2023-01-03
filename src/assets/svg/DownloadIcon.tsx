import * as React from "react"
import { SVGProps } from "react"

const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={14} cy={14} r={14} fill="#F5F8FF" />
    <path
      d="M18.5 15.5v2a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-2M11.5 13l2.5 2.5 2.5-2.5M14 15.5v-6"
      stroke="#7378DE"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default DownloadIcon
