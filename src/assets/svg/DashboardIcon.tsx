import * as React from "react"
import { SVGProps } from "react"

const DashboardIcon = (props: SVGProps<SVGSVGElement> | any) => (
    <svg
        width={32}
        height={32}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M11.333 4H6a2 2 0 0 0-2 2v5.333a2 2 0 0 0 2 2h5.333a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM26 4h-5.334a2 2 0 0 0-2 2v5.333a2 2 0 0 0 2 2H26a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM26 18.667h-5.334a2 2 0 0 0-2 2V26a2 2 0 0 0 2 2H26a2 2 0 0 0 2-2v-5.333a2 2 0 0 0-2-2ZM11.333 18.667H6a2 2 0 0 0-2 2V26a2 2 0 0 0 2 2h5.333a2 2 0 0 0 2-2v-5.333a2 2 0 0 0-2-2Z"
            stroke="#fff"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={props.index && "#fff"}
        />
    </svg>
)

export default DashboardIcon
