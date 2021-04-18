import { Chart } from "chart.js";
import React from "react";

function MyChart() {
    const useCanvas = (callback) => {
        const canvasRef = React.useRef(null);

        React.useEffect(() => {
            const canvas = canvasRef.current;
            const ctx: CanvasRenderingContext2D = canvas!.getContext('2d');
            callback([canvas, ctx]);
        }, []);

        return canvasRef;
    }

}