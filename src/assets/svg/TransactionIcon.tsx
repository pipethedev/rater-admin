import * as React from "react"
import { SVGProps } from "react"

const TransactionIcon = (props: SVGProps<SVGSVGElement> | any) => (
    <svg
        width={32}
        height={32}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M11.333 19.555a3.111 3.111 0 0 0 3.111 3.111h2.89a3.333 3.333 0 0 0 0-6.666h-2.668a3.333 3.333 0 1 1 0-6.667h2.89a3.111 3.111 0 0 1 3.11 3.111M16 7.334v2m0 13.332v2M29.333 16c0 7.364-5.97 13.333-13.333 13.333-7.364 0-13.334-5.97-13.334-13.333C2.666 8.636 8.636 2.666 16 2.666S29.333 8.636 29.333 16Z"
            stroke="#fff"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={props.index && "#fff"}

        />
    </svg>
)

export default TransactionIcon
