import * as React from "react"
import { SVGProps } from "react"

const Arrowlong = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M56.495 6.495a.7.7 0 0 0 0-.99L52.04 1.05a.7.7 0 1 0-.99.99L55.01 6l-3.96 3.96a.7.7 0 1 0 .99.99l4.455-4.455ZM0 6.7h28V5.3H0v1.4Zm28 0h28V5.3H28v1.4Z"
      fill="#3B71F7"
    />
  </svg>
)

export default Arrowlong
