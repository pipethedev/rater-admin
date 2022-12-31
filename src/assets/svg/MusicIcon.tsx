import * as React from "react"
import { SVGProps } from "react"

const MusicIcon = (props: SVGProps<SVGSVGElement> | any) => (
    <svg
        width={18}
        height={25}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M9 20V3.452c0-1.143 0-1.715.24-2.06.21-.3.536-.5.899-.554.415-.061.926.194 1.948.705L17 4M9 20a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
            stroke="#fff"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={props.index && "#fff"}
        />
    </svg>
)

export default MusicIcon
