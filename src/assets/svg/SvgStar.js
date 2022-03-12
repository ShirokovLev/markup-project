import * as React from "react"

const SvgStar = ({fill, width, height}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 11"
  >
    <path
    d="m6 0 2.04 3.375 3.96.827-2.7 2.912L9.708 11 6 9.425 2.292 11 2.7 7.114 0 4.202l3.96-.827L6 0Z"
    fill={fill}
  />



  </svg>
)

export default SvgStar