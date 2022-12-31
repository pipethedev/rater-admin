import * as React from "react"
import { SVGProps } from "react"

const UserRaterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={32} cy={32} r={32} fill="#FFF6E0" />
    <path
      d="M29.813 18.732c.688-2.119 3.686-2.119 4.374 0l1.787 5.498a2.3 2.3 0 0 0 2.187 1.59h5.782c2.227 0 3.154 2.85 1.351 4.16l-4.677 3.399a2.3 2.3 0 0 0-.835 2.57l1.786 5.5c.689 2.118-1.736 3.88-3.54 2.57l-4.676-3.398a2.3 2.3 0 0 0-2.704 0l-4.677 3.399c-1.802 1.31-4.228-.453-3.54-2.572l1.787-5.498a2.3 2.3 0 0 0-.835-2.572l-4.677-3.398c-1.803-1.31-.877-4.16 1.352-4.16h5.78a2.3 2.3 0 0 0 2.188-1.59l1.787-5.498Z"
      fill="#FFC94C"
    />
  </svg>
)

export default UserRaterIcon
