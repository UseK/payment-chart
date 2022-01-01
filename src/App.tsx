import React from 'react';
import './App.css';
import { PaymentsTable, PAYMENTS, groupBy, Payment } from "./Payment";
import { PieChart, SingleBarChart } from "./MyChart";
import { CATEGORY_MAP, EXCLUDE_CATEGORIES } from './config';


function sumsInYear(payments: Payment[]): { labels: string[]; data: number[] } {
    const grouped = groupBy(payments, p => p.date.getFullYear());
    return aggregate(grouped);
}

function sumsInMonth(payments: Payment[], year: number): { labels: string[]; data: number[] } {
    const grouped = groupBy(payments.filter(p => p.date.getFullYear() === year), p => p.date.getMonth() + 1);
    return aggregate(grouped);
}

function sumsInAllMonth(payments: Payment[]): { labels: string[]; data: number[] } {
    return aggregate(groupByYearMonth(payments));
}

function groupByYearMonth(payments: Payment[]): Generator<[number, Payment[]], void, unknown> {
    return groupBy(payments, p => getYearMonth(p));
}


function cate(name: string): string {
    if (!CATEGORY_MAP[name]) {
        console.log(name);
    }
    return CATEGORY_MAP[name] || "その他";
}

export function cagegorySumsInYearMonth(payments: Payment[], yearMohth: number, excludeCategories: string[]) {
    const categorySorted = payments.filter(p => getYearMonth(p) === yearMohth).sort((a, b) => {
        if (cate(a.name) < cate(b.name)) {
            return -1;
        }
        if (cate(a.name) > cate(b.name)) {
            return 1;
        }
        return 0;
    });
    const labels = [];
    const data = [];
    for (const [category, ps] of groupBy(categorySorted, p => CATEGORY_MAP[p.name] || "その他")) {
        if (excludeCategories.includes(category)) {
            continue;
        }
        labels.push(category);
        const sum = ps.map(p => p.value).reduce((acc, p) => acc + p);
        data.push(sum);
    }
    console.log(labels, data)
    return { labels, data };
}


function getYearMonth(p: Payment): number {
    return p.date.getFullYear() * 100 + p.date.getMonth() + 1;
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
    return { labels, data };
}


function TotalAmountInYear(props: { year: number }) {
    const { labels, data } = sumsInMonth(PAYMENTS, props.year);
    return <div>
        <SingleBarChart label={`Total Amount in ${props.year}`}
            labels={labels}
            data={data} />
    </div>
}

function App() {
    const [start, setStart] = React.useState(0);
    const [end, setEnd] = React.useState(20);
    const { labels, data } = sumsInYear(PAYMENTS);
    const { labels: months, data: sums } = sumsInAllMonth(PAYMENTS);
    const categorized = cagegorySumsInYearMonth(PAYMENTS, 202111, EXCLUDE_CATEGORIES);
    return (
        <div>
            <div>
                <SingleBarChart label={'Total Amount each Year'}
                    labels={labels}
                    data={data} />
                <SingleBarChart label={'Total Amount each Month'}
                    labels={months}
                    data={sums} />
                {

                }
                <PieChart label={'Rate in 2021-11 caregory'}
                    labels={categorized.labels}
                    data={categorized.data} />
            </div>
            {labels.map(year => <TotalAmountInYear year={parseInt(year)} />)}
            <PaymentsTable payments={PAYMENTS} start={start} end={end} />
        </div>
    );
}

export default App;
