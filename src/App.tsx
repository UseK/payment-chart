import React from 'react';
import './App.css';
import {PaymentsTable, PAYMENTS, groupBy, Payment} from "./Payment";
import {SingleBarChart} from "./MyChart";


function sumsInYear(payments: Payment[]): { labels: string[]; data: number[] } {
    const grouped = groupBy(payments, p => p.date.getFullYear());
    return aggregate(grouped);
}

function sumsInMonth(payments: Payment[], year: number): { labels: string[]; data: number[] } {
    const grouped =  groupBy( payments.filter(p => p.date.getFullYear() === year), p => p.date.getMonth() + 1);
    return aggregate(grouped);
}

function sumsInAllMonth(payments: Payment[]): { labels: string[]; data: number[] } {
    const grouped =  groupBy( payments, p => p.date.getFullYear() * 100 + p.date.getMonth() + 1);
    return aggregate(grouped);
}

function aggregate<T>(grouped: Generator<[T, Payment[]], void, unknown>) {
    const groups = Array.from(grouped);
    const labels = [];
    const data = [];
    for (const [key, paymentsInYear] of groups) {
        labels.push(`${key}`);
        const sum = paymentsInYear.map(p => p.value).reduce((acc, p) => acc + p);
        data.push(sum);
    }
    return {labels, data};
}


function TotalAmountInYear(props: { year: number }) {
    const {labels, data} = sumsInMonth(PAYMENTS, props.year);
    return <div>
        <SingleBarChart label={ `Total Amount in ${props.year}` }
                        labels={ labels }
                        data={ data }/>
    </div>
}

function App() {
    const [start, setStart] = React.useState(0);
    const [end, setEnd] = React.useState(20);
    const {labels, data} = sumsInYear(PAYMENTS);
    const {labels: months, data: sums} = sumsInAllMonth(PAYMENTS);
    return (
        <div>
            <div>
                <SingleBarChart label={ 'Total Amount each Year' }
                                labels={ labels }
                                data={ data }/>
                <SingleBarChart label={ 'Total Amount each Month' }
                                labels={ months }
                                data={ sums }/>
            </div>
            { labels.map(year => <TotalAmountInYear year={parseInt(year)}/>)}
            <PaymentsTable payments={ PAYMENTS } start={ start } end={ end }/>
        </div>
    );
}

export default App;
