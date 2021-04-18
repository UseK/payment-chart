import parse from "csv-parse/lib/sync";
import { data } from "./data";

export const records = parse(data, {
    columns: ["date", "name", "value", "", "", "", ""],
    skip_empty_lines: true,
});

export function PaymentsTable(props: { records: {[key: string]: string}[] }) {
    return <table>
        <thead>
            <tr>
                { Object.keys(props.records[0]).map(k => <th key={ `head-${k}`}> {k} </th>)}
            </tr>
        </thead>
        { props.records.map((record, ind) => <tr>
            <td key={`td-date-${ind}`}> { record.date }</td>
            <td key={`td-name-${ind}`}> { record.name }</td>
            <td key={`td-value-${ind}`}> { record.value }</td>
        </tr>) }
    </table>
}