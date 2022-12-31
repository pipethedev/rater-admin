import * as React from "react"
import { SVGProps } from "react"

const UserIcon = (props: SVGProps<SVGSVGElement> | any) => (
    <svg
        width={32}
        height={32}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M24 21.116c1.941.975 3.605 2.54 4.82 4.497.24.387.361.581.402.85.085.545-.288 1.215-.796 1.43-.25.107-.53.107-1.093.107m-6-12.624A6 6 0 0 0 24.666 10a6 6 0 0 0-3.333-5.376M18.666 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM3.412 25.251C5.538 22.06 8.892 20 12.666 20c3.775 0 7.13 2.06 9.255 5.251.466.7.698 1.049.672 1.496-.021.347-.25.773-.527.983-.357.27-.848.27-1.83.27H5.097c-.981 0-1.472 0-1.829-.27a1.478 1.478 0 0 1-.527-.983c-.026-.447.206-.797.672-1.496Z"
            stroke="#fff"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={props.index && "#fff"}

        />
    </svg>
)

export default UserIcon
