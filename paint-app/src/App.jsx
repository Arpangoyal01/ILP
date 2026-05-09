import { useState, useRef, useEffect } from "react";
import "./index.css";

export default function App() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const isDrawingRef = useRef(false);

  const [brushColor, setBrushColor] = useState("#000");
  const [brushWidth, setBrushWidth] = useState(5);
  const [opacity, setOpacity] = useState(1);

  // canvas ref
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Canvas setup
    canvas.width = 900;
    canvas.height = 600;

    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = brushColor;
    context.lineWidth = brushWidth;
    context.globalAlpha = opacity;

    contextRef.current = context;
  }, []);

  // context ref

  useEffect(() => {
    if (!contextRef.current) return;
    contextRef.current.strokeStyle = brushColor;
    contextRef.current.lineWidth = brushWidth;
    contextRef.current.globalAlpha = opacity;
  }, [brushColor, brushWidth, opacity]);

  // get mouse coordinates on canvas

  const getPosition = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  // when user start drawing

  const startDrawing = (event) => {
    const context = contextRef.current;
    const { x, y } = getPosition(event);

    context.beginPath();
    context.moveTo(x, y);
    isDrawingRef.current = true;
  };

  // check dwraing s or n

  const draw = (event) => {
    if (!isDrawingRef.current) return;

    const context = contextRef.current;
    const { x, y } = getPosition(event);

    context.lineTo(x, y);
    context.stroke();
  };

  // user stops drawing
  const stopDrawing = () => (isDrawingRef.current = false);

  // clear canvas btn

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="app">
      <div className="toolbar">
        <h2>Paint App</h2>

        <label>
          Brush color
          <input
            type="color"
            value={brushColor}
            onChange={(e) => setBrushColor(e.target.value)}
          />
        </label>

        <label>
          Brush Width
          <input
            type="range"
            min="1"
            max="30"
            value={brushWidth}
            onChange={(e) => setBrushWidth(Number(e.target.value))}
          />
          <span>{brushWidth}</span>
        </label>

        <label>
          Opacity
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
          />
          <span>{opacity}</span>
        </label>

        <button onClick={clearCanvas}>Clear Canvas</button>
      </div>

      <div className="canvas-area">
        <canvas
          ref={canvasRef}
          className="canvas"
          onPointerDown={startDrawing}
          onPointerMove={draw}
          onPointerUp={stopDrawing}
          onPointerLeave={stopDrawing}
        />
      </div>
    </div>
  );
}
