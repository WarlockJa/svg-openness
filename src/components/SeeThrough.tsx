import "./seethrough.css";
import useGetMouseCoords from "../hooks/useGetMouseCoords";
import SVG_Openness from "./SVG/SVG_Openness";
import { useEffect, useRef, useState } from "react";

export interface ISVGSeeThroughProps {
  x: number;
  y: number;
  r: number;
  maxX: number;
  maxY: number;
}

export default function SeeThrough() {
  const [hover, setHover] = useState<boolean>(true);
  const seeThroughRef = useRef(null);
  const { x, maxX } = useGetMouseCoords(seeThroughRef.current);

  // rerendering component in order to reinitiate
  // useGetMouseCoords hook with non-null seeThroughRef
  //   TODO is there really no better way to do it?
  useEffect(() => {
    setHover(false);
  }, []);

  return (
    <div
      className="seeThrough"
      ref={seeThroughRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <SVG_Openness number={x} maxNumber={maxX} hover={hover} />
    </div>
  );
}
