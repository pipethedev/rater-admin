import * as React from "react"
import { SVGProps } from "react"

const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={24} cy={24} r={24} fill="#F5F8FF" fillOpacity={0.12} />
    <path
      d="M27 31a3 3 0 1 1-6 0m4.796-12.761a2.5 2.5 0 1 0-3.593 0M30 23.2c0-1.38-.632-2.702-1.758-3.677C27.117 18.548 25.591 18 24 18c-1.592 0-3.118.548-4.243 1.523C18.632 20.498 18 21.821 18 23.2c0 2.282-.566 3.95-1.272 5.145-.805 1.36-1.207 2.041-1.191 2.204.018.186.051.244.202.355.132.096.794.096 2.119.096h12.284c1.324 0 1.987 0 2.118-.096.151-.11.185-.17.203-.355.016-.163-.387-.843-1.191-2.204C30.566 27.15 30 25.482 30 23.2Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default NotificationIcon
