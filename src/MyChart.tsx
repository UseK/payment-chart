import { Chart } from "chart.js";
import React from "react";


export function MyCanvas() {
    const canvasRef = React.useRef(null);

    const getContext = (): CanvasRenderingContext2D => {
        const canvas: any = canvasRef.current;

        return canvas.getContext('2d');
    };

    React.useEffect(() => {
        const ctx: CanvasRenderingContext2D = getContext();
        ctx.fillRect(0,0, 100, 100);
        ctx.save();
    })

    return (
        <div>
            <canvas className="canvas" ref={canvasRef} />
        </div>
    );
}
