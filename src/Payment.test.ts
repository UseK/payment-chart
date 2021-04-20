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
    ];
    const expected = [
        [
            2015,
            [
                {
                    "date": new Date("2015-03-31T15:00:00.000Z"),
                    "name": "出費1",
                    "value": 100
                },
                {
                    "date": new Date("2015-04-30T15:00:00.000Z"),
                    "name": "出費2",
                    "value": 200
                }
            ]
        ],
        [
            2016,
            [
                {
                    "date": new Date("2016-03-31T15:00:00.000Z"),
                    "name": "出費1",
                    "value": 300
                }
            ]
        ],
        [
            2017,
            [
                {
                    "date": new Date("2017-03-31T15:00:00.000Z"),
                    "name": "出費2027",
                    "value": 400
                },
                {
                    "date": new Date("2017-04-01T15:00:00.000Z"),
                    "name": "出費2",
                    "value": 9909
                }
            ]
        ]
    ];
    const grouped = groupBy(payments, p => p.date.getFullYear());
    const groups = Array.from(grouped);
    expect(groups).toStrictEqual(expected);
})
