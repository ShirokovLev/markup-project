import * as React from "react"

const SvgCross = ({fill, width, height}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 6 6"
  >
    <path d="M5.75353 0.953529C5.94879 0.758267 5.94879 0.441684 5.75353 0.246422C5.55827 0.05116 5.24168 0.05116 5.04642 0.246422L5.75353 0.953529ZM0.246422 5.04642C0.05116 5.24168 0.05116 5.55827 0.246422 5.75353C0.441684 5.94879 0.758267 5.94879 0.953529 5.75353L0.246422 5.04642ZM0.953529 0.246422C0.758267 0.05116 0.441684 0.05116 0.246422 0.246422C0.05116 0.441684 0.05116 0.758267 0.246422 0.953529L0.953529 0.246422ZM5.04642 5.75353C5.24168 5.94879 5.55827 5.94879 5.75353 5.75353C5.94879 5.55827 5.94879 5.24168 5.75353 5.04642L5.04642 5.75353ZM5.04642 0.246422L0.246422 5.04642L0.953529 5.75353L5.75353 0.953529L5.04642 0.246422ZM0.246422 0.953529L5.04642 5.75353L5.75353 5.04642L0.953529 0.246422L0.246422 0.953529Z" fill={fill}/>

  </svg>
)

export default SvgCross