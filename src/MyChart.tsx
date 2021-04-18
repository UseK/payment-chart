import React from "react";
import { Chart, ChartData } from "chart.js";

import {
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Filler,
    Legend,
    Title,
    Tooltip
} from 'chart.js';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Filler,
    Legend,
    Title,
    Tooltip
);

function MyCanvas(props: { handleContext(ctx: CanvasRenderingContext2D): void }) {
    const canvasRef: React.RefObject<HTMLCanvasElement> = React.useRef(null);
    React.useEffect(() => {
        props.handleContext(canvasRef.current!.getContext('2d')!);
    })
    return <canvas className="canvas" ref={canvasRef} />
}

export interface MyChartProps {
    data: ChartData<"bar", number[], unknown>,
}

export function MyChart(props: MyChartProps) {
    return <MyCanvas handleContext={ctx => {
        new Chart(ctx, {
            type: 'bar',
            data: props.data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }}/>
}

