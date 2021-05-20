import React from 'react';
import './App.css';
import {PaymentsTable, PAYMENTS, groupBy} from "./Payment";
import {SingleBarChart} from "./MyChart";


function App() {
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(20);
    const grouped = groupBy(PAYMENTS, p => p.date.getFullYear());
    const groups = Array.from(grouped);
    let years = [];
    let sums = [];
    for (const [year, paymentsInYear] of groups) {
        years.push(`${year}`);
        const sum  = paymentsInYear.map(p => p.value).reduce((acc, p) => acc + p);
        sums.push(sum);
    }
  return (
      <div className="container">
          <div>
              <SingleBarChart label={ '# of Votes' }
                              labels={ years }
                              data={ sums }/>
          </div>
          <div>
              <SingleBarChart label={ '# of Votes' }
                              labels={ years }
                              data={ sums }/>
          </div>
          <PaymentsTable payments={ PAYMENTS } start={ start } end={ end }/>
      </div>
  );
}

export default App;
