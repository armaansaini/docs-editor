import { PAGE_SIZE, RULER_MARKER_SPACING } from "@/constants/pageConstants";
import { useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const markers = Array.from({ length: 83 }, (_, i) => i);

interface MarkerProps {
  position: number;
  isDragging: boolean;
  isLeft: boolean;
  onMouseDown: () => void;
  onDoubleClick: () => void;
}
const Marker = ({
  position,
  isLeft,
  isDragging,
  onDoubleClick,
  onMouseDown,
}: MarkerProps) => {
  return (
    <div
      className="absolute -ml-2 top-0 w-4 h-full z-[5] cursor-ew-resize group"
      style={{
        [isLeft ? "left" : "right"]: `${position}px`,
      }}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
    >
      <FaCaretDown className="absolute left-1/2 top-0 h-full fill-blue-500 transform -translate-x-1/2" />
      <div
        className="absolute h-[100vh] top-4 w-[1px] border border-dashed border-blue-300 transform ml-2"
        style={{ display: isDragging ? "block" : "none" }}
      />
    </div>
  );
};

export default function Ruler() {
  const [leftMargin, setLeftMargin] = useState(56);
  const [rightMargin, setRightMargin] = useState(56);

  const [isDraggingLeft, setIsDraggingLeft] = useState(false);
  const [isDraggingRight, setIsDraggingRight] = useState(false);
  const rulerRef = useRef<HTMLDivElement>(null);

  const handleLeftDragging = () => setIsDraggingLeft(true);
  const handleRightDragging = () => setIsDraggingRight(true);

  const handleMouseMove = (e: React.MouseEvent) => {
    if ((isDraggingLeft || isDraggingRight) && rulerRef.current) {
      const container = rulerRef.current.querySelector("#ruler-container");
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const relativeX = e.clientX - containerRect.left;
        const rawPosition = Math.max(0, Math.min(PAGE_SIZE, relativeX));

        if (isDraggingLeft) {
          const maxLeftPosition =
            PAGE_SIZE - rightMargin - RULER_MARKER_SPACING;
          const newLeftPosition = Math.min(maxLeftPosition, rawPosition);
          setLeftMargin(newLeftPosition);
        } else if (isDraggingRight) {
          const maxRightPosition =
            PAGE_SIZE - (leftMargin + RULER_MARKER_SPACING);
          const newRightPosition = Math.max(0, PAGE_SIZE - rawPosition);
          const constrainedRightPosition = Math.min(
            newRightPosition,
            maxRightPosition
          );
          setRightMargin(constrainedRightPosition);
        }
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggingLeft(false);
    setIsDraggingRight(false);
  };

  const handleLeftDoubleClick = () => setLeftMargin(56);
  const handleRightDoubleClick = () => setRightMargin(56);

  return (
    <div
      ref={rulerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      className="h-6 border-b border-gray-300 flex items-end relative select-none print:hidden "
    >
      <div
        id="ruler-container"
        className="max-w-[816px] mx-auto w-full h-full relative"
      >
        <Marker
          position={leftMargin}
          isLeft={true}
          isDragging={isDraggingLeft}
          onDoubleClick={handleLeftDoubleClick}
          onMouseDown={handleLeftDragging}
        />
        <Marker
          position={rightMargin}
          isLeft={false}
          isDragging={isDraggingRight}
          onDoubleClick={handleRightDoubleClick}
          onMouseDown={handleRightDragging}
        />
        <div className="absolute inset-x-0 bottom-0 h-full">
          <div className="h-full relative w-[816px]">
            {markers.map((marker) => {
              const position = (marker * 816) / 82;

              return (
                <div
                  className="absolute bottom-0"
                  key={marker}
                  style={{ left: `${position}px` }}
                >
                  {marker % 10 === 0 ? (
                    <>
                      <div className="h-2 w-[1px] bg-neutral-500 absolute bottom-0" />
                      <span className="text-xs text-neutral-500 transform -translate-x-1/2 bottom-2 absolute">
                        {marker / 10 + 1}
                      </span>
                    </>
                  ) : null}
                  {marker % 5 === 0 && marker % 10 !== 0 ? (
                    <div className="h-1.5 w-[1px] bg-neutral-500 absolute bottom-0" />
                  ) : null}
                  {marker % 5 !== 0 ? (
                    <div className="h-1 w-[1px] bg-neutral-500 absolute bottom-0" />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
