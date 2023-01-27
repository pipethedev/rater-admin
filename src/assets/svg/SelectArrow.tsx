import * as React from "react"
import { SVGProps } from "react"

const SelectArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={34}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse cx={17.037} cy={17.357} rx={16.822} ry={17.357} fill="#F0F4FE" />
    <path
      d="m23.75 17-5.25-5.25v3h-7.65c-.21 0-.315 0-.395.04a.374.374 0 0 0-.164.165c-.041.08-.041.185-.041.395v3.3c0 .21 0 .315.04.395.037.07.094.128.165.164.08.041.185.041.395.041h7.65v3L23.75 17Z"
      stroke="#3B71F7"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SelectArrow
