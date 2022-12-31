import * as React from "react"
import { SVGProps } from "react"

const SongRaterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={32} cy={32} r={32} fill="#EBF1FE" />
    <g clipPath="url(#a)">
      <path
        d="M41.288 36.351c.994-1.664 1.654-3.769 1.782-5.852.081-1.336-.217-2.74-.861-4.06-1.012-2.072-2.75-3.236-4.43-4.361-1.252-.84-2.436-1.632-3.273-2.765l-.15-.202c-.495-.664-1.054-1.418-1.143-2.05a1.245 1.245 0 0 0-1.305-1.059 1.227 1.227 0 0 0-1.144 1.226v21.934a7.121 7.121 0 0 0-3.693-1.009c-3.392 0-6.154 2.208-6.154 4.924 0 2.715 2.762 4.923 6.154 4.923s6.154-2.208 6.154-4.923V28.729c1.85.707 4.875 2.506 5.707 6.709-.155.229-.303.475-.475.672-.45.51-.401 1.287.11 1.735a1.226 1.226 0 0 0 1.736-.11c.33-.375.623-.813.904-1.27a.774.774 0 0 0 .08-.114Z"
        fill="#3B71F7"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(16 16)" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SongRaterIcon
