import * as React from "react"

const SvgArrow = ({fill, width, height, className}) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 6"
  >
    <path
      d="m5 5-.566.566a.8.8 0 0 0 1.132 0L5 5Zm4.566-3.434A.8.8 0 0 0 8.434.434l1.132 1.132Zm-8-1.132A.8.8 0 0 0 .434 1.566L1.566.434Zm6.868 0-4 4 1.132 1.132 4-4L8.434.434Zm-2.868 4-4-4L.434 1.566l4 4 1.132-1.132Z"
      fill={fill}
    />
  </svg>
)

export default SvgArrow