import parse from "csv-parse/lib/sync";
import { data } from "./data";

interface Payment {
    date: string,
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