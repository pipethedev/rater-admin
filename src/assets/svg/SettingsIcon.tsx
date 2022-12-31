import * as React from "react"
import { SVGProps } from "react"

const SettingsIcon = (props: SVGProps<SVGSVGElement> | any) => (
    <svg
        width={26}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M13 19a4 4 0 1 0 .001-8 4 4 0 0 0 0 8Z"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={props.index && "#fff"}

        />
        <path
            d="m9.386 24.828.78 1.753a2.95 2.95 0 0 0 5.392 0l.78-1.753a3.234 3.234 0 0 1 3.293-1.898l1.906.203a2.95 2.95 0 0 0 2.697-4.67l-1.13-1.55A3.238 3.238 0 0 1 22.492 15c0-.685.217-1.352.62-1.905l1.129-1.552a2.948 2.948 0 0 0-1.048-4.364 2.95 2.95 0 0 0-1.649-.305l-1.906.203a3.244 3.244 0 0 1-1.96-.416 3.234 3.234 0 0 1-1.334-1.49l-.785-1.752a2.95 2.95 0 0 0-5.393 0l-.779 1.753A3.234 3.234 0 0 1 8.053 6.66a3.244 3.244 0 0 1-1.96.416L4.18 6.874a2.95 2.95 0 0 0-2.696 4.67l1.129 1.55a3.238 3.238 0 0 1 0 3.811l-1.129 1.551a2.948 2.948 0 0 0 1.048 4.364 2.954 2.954 0 0 0 1.648.306l1.907-.203a3.244 3.244 0 0 1 3.3 1.905Z"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={props.index && "#fff"}

        />
    </svg>
)

export default SettingsIcon
