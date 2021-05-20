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

let idCounter = 0;

function MyCanvas(props: { handleContext(ctx: CanvasRenderingContext2D): void }) {
    const canvasRef: React.RefObject<HTMLCanvasElement> = React.useRef(null);
    React.useEffect(() => {
        props.handleContext(canvasRef.current!.getContext('2d')!);
    })
    return <canvas id={`canvas-${idCounter}`} className="canvas" ref={canvasRef} />
}

export interface MyChartProps {
    label: string,
    labels: string[],
    data: number[],
}

export function SingleBarChart(props: MyChartProps) {
    return <MyCanvas handleContext={ctx => {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: props.labels,
                datasets: [{
                    label: props.label,
                    data: props.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                }
            }
        });
    }}/>
}

