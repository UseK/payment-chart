import React from 'react';
import './App.css';
import {PaymentsTable, PAYMENTS, groupBy, Payment} from "./Payment";
import {SingleBarChart} from "./MyChart";


function sumsInYear(payments: Payment[]): { years: string[]; sums: number[] } {
    const grouped = groupBy(payments, p => p.date.getFullYear());
    const groups = Array.from(grouped);
    let labels = [];
    let data = [];
    for (const [year, paymentsInYear] of groups) {
        labels.push(`${year}`);
        const sum = paymentsInYear.map(p => p.value).reduce((acc, p) => acc + p);
        data.push(sum);
    }
    return {years: labels, sums: data};
}

function sumsInMonth(payments: Payment[], year: number) {
    const grouped =  groupBy(
        payments.filter(p => p.date.getFullYear() === year),
        p => p.date.getMonth());
    const groups = Array.from(grouped);
    const labels = [];
    const data = [];
    for (const [month, paymentsInYear] of groups) {
        labels.push(`${month}`);
        const sum = paymentsInYear.map(p => p.value).reduce((acc, p) => acc + p);
        data.push(sum);
    }
    return {months: labels, sums: data};
}

function TotalAmountInYear(props: { year: number }) {
    const {months, sums} = sumsInMonth(PAYMENTS, props.year);
    return <div>
        <SingleBarChart label={ `Total Amount in ${props.year}` }
                        labels={ months }
                        data={ sums }/>
    </div>


}
function App() {
    const [start, setStart] = React.useState(0);
    const [end, setEnd] = React.useState(20);
    const {years, sums} = sumsInYear(PAYMENTS);
    return (
        <div>
            <div>
                <SingleBarChart label={ 'Total Amount each Year' }
                                labels={ years }
                                data={ sums }/>
            </div>
            { years.map(year => <TotalAmountInYear year={parseInt(year)}/>)}
            <PaymentsTable payments={ PAYMENTS } start={ start } end={ end }/>
        </div>
    );
}

export default App;
