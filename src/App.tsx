import { useState } from "react";

interface IPoint {
  xScale: number;
  yScale: number;
}

function App() {
  const [points, setPoints] = useState<IPoint[]>([]);
  const [undoPoints, setUndoPoints] = useState<IPoint[]>([]);
  function addPoints(event: React.MouseEvent) {
    console.log(event);
    setPoints([
      ...points,
      {
        xScale: event?.clientX,
        yScale: event?.clientY,
      },
    ]);
  }

  function handleUndo() {
    const tempPoints = [...points];
    const poppedDot = tempPoints.pop();
    if (poppedDot) setUndoPoints([...undoPoints, poppedDot]);
    setPoints([...tempPoints]);
  }
  function handleRedo() {
    const poppedPoint = undoPoints.pop();
    if (poppedPoint) {
      setPoints([...points, poppedPoint]);
      setUndoPoints([...undoPoints]);
    }
  }
  return (
    <div
      className="bg-[black] h-[100vh] box-border"
      onClick={(event: React.MouseEvent) => {
        addPoints(event);
      }}
    >
      <div className="flex justify-center space-x-5">
        <button
          className="border border-white text-white"
          onClick={(event) => {
            handleUndo();
            event.stopPropagation();
          }}
        >
          Undo
        </button>
        <button
          className="border border-white text-white"
          onClick={(event) => {
            handleRedo();
            event.stopPropagation();
          }}
        >
          Redo
        </button>
      </div>

      {points?.map((point) => {
        return (
          <div
            key={point.yScale}
            className={`w-[10px]  inline-block absolute h-[10px] bg-[white] rounded-[50%]`}
            style={{
              left: point.xScale - 6 + "px",
              top: point.yScale - 8 + "px",
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
