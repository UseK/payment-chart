import parse from "csv-parse/lib/sync";
import { data } from "./data";

export interface Payment {
    date: Date,
    name: string,
    value: number,
}

export const PAYMENTS: Payment[] = parse(data, {
    columns: ["date", "name", "value", "", "", "", ""],
    skip_empty_lines: true,
});

export function PaymentsTable(props: { payments: Payment[], start: number, end: number }) {
    return <table>
        <thead>
        <tr>
            <th>number</th>
            { Object.keys(props.payments[0]).map(k => <th key={ `head-${k}`}> {k} </th>)}
        </tr>
        </thead>
        <tbody>
        { range(props.start, props.end).map(i => <tr key={`tr-${i}`}>
            <td key={`td-number-${i}`}>{i}</td>
            <td key={`td-date-${i}`}> { props.payments[i].date }</td>
            <td key={`td-name-${i}`}> { props.payments[i].name }</td>
            <td key={`td-value-${i}`}> { props.payments[i].value }</td>
        </tr> )}
        </tbody>
    </table>
}

const range = (start: number, end: number) => (
    [...Array(end - start)].map((_, i) => (start + i))
);

export function* groupBy<T>(arr: T[], keyF: (item: T) => unknown) {
    let currentKey = keyF(arr[0]);
    let currentStack: T[] = [];
    for (const item of arr) {
        const newKey = keyF(item);
        if (currentKey === newKey) {
            currentStack.push(item);
        } else {
            yield currentStack
            currentKey = newKey;
            currentStack = [];
        }
    }
}