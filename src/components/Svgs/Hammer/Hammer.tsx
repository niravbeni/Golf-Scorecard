import { FC } from "react";
import { IHammer } from "./Hammer.types";

export const Hammer: FC<IHammer> = ({
  isFilled,
  width = "20px",
  height = "20px",
  color = "black",
}) => {
  return (
    <svg
      fill={isFilled ? color : "none"}
      width={width}
      height={height}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
    >
      <rect
        id="Icons"
        x="-768"
        y="-192"
        width="1280"
        height="800"
        style={{ fill: "none" }}
      />
      <g id="Icons1">
        <path
          id="hammer"
          d="M30.651,23.538l25.24,24.346l-6.577,6.577l-23.969,-25.617l5.306,-5.306Zm-7.208,3.403l5.306,-5.305c0,0 -2.695,-2.056 -2.447,-3.34c0.248,-1.285 0.809,-3.1 4.711,-4.711c3.903,-1.611 7.543,-1.757 7.543,-1.757l0.131,-1.758c0,0 -8.969,-1.356 -13.707,0.327c-4.738,1.684 -10.097,8.02 -10.097,8.02c0,0 0.935,3.064 -0.667,4.666c-1.601,1.601 -3.754,-0.245 -3.754,-0.245l-2.456,3.118l6.197,6.197l3.112,-2.461c0,0 -1.472,-2.207 -0.017,-3.528c3.132,-2.842 6.145,0.777 6.145,0.777Z"
          stroke={isFilled ? color : "none"}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
};

export default Hammer;
