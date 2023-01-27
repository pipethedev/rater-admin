import * as React from "react"
import { SVGProps } from "react"

const AssignPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={34}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse cx={17.037} cy={17.357} rx={16.822} ry={17.357} fill="#F0F4FE" />
    <path
      d="M17 19.25c-2.378 0-4.492 1.148-5.838 2.93-.29.383-.435.575-.43.834.004.2.13.452.287.576.204.16.486.16 1.051.16h9.86c.564 0 .847 0 1.05-.16a.836.836 0 0 0 .288-.576c.005-.26-.14-.451-.43-.834-1.346-1.782-3.46-2.93-5.838-2.93ZM17 17a3.375 3.375 0 1 0 0-6.75A3.375 3.375 0 0 0 17 17Z"
      stroke="#3B71F7"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default AssignPerson
