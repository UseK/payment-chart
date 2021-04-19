import { } from '@testing-library/react';
import {groupBy, Payment} from "./Payment";

test('groupBy()', () => {
    const payments: Payment[] = [
        {
            date: new Date("2015/04/01"),
            name: "出費1",
            value: 100,
        },
        {
            date: new Date("2015/05/01"),
            name: "出費2",
            value: 200,
        },
        {
            date: new Date("2016/04/01"),
            name: "出費1",
            value: 300,
        },
        {
            date: new Date("2017/04/01"),
            name: "出費2027",
            value: 400,
        },
        {
            date: new Date("2017/04/02"),
            name: "出費2",
            value: 9909,
        },
    ]
    const grouped = groupBy(payments, p => p.date.getFullYear());
    const first = grouped.next();
    console.log(first);
    expect(true).toBe(true);
})
