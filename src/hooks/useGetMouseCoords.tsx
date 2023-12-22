import { useEffect, useState } from "react";

interface IMouseCoords {
  x: number;
  y: number;
  maxX: number;
  maxY: number;
}

// interval between event listener triggers
const THROTTLE_INTERVAL = 10;

// throttle function
const throttle = (function () {
  let timeout: NodeJS.Timeout | undefined = undefined;
  return function throttle(callback: () => void) {
    if (timeout === undefined) {
      callback();
      timeout = setTimeout(() => {
        // allow another call to be throttled
        timeout = undefined;
      }, THROTTLE_INTERVAL);
    }
  };
})();

// throttle wrapper
function throttlify(callback: (e: any) => void) {
  return function throttlified(e: any) {
    throttle(() => {
      callback(e);
    });
  };
}

export default function useGetMouseCoords(ref: HTMLElement | null) {
  const [coords, setCoords] = useState<IMouseCoords>({
    x: 0,
    y: 0,
    maxX: 0,
    maxY: 0,
  });

  useEffect(() => {
    if (!ref) return;

    const getMouseCoords = throttlify((e: MouseEvent) => {
      // calculating coordinates inside the container object
      // e.pageX/Y coordinates for the page
      // ref.offsetLeft/Top - offset of the container object
      setCoords({
        x: e.pageX - ref.offsetLeft,
        y: e.pageY - ref.offsetTop,
        maxX: ref.clientWidth,
        maxY: ref.clientHeight,
      });
    });

    ref.addEventListener("mousemove", (e: MouseEvent) => getMouseCoords(e));

    return () => ref.removeEventListener("mousemove", getMouseCoords);
  }, [ref]);

  return coords;
}
