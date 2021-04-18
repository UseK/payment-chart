import React from 'react';
import './App.css';
import {PaymentsTable, PAYMENTS} from "./Payment";
import {MyChart, MyChartProps} from "./MyChart";

const myData: MyChartProps = {
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
    }
}


function App() {
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(20);
  return (
      <div className="container">
          <div>
              <MyChart data={ myData.data }/>
          </div>
          <PaymentsTable payments={ PAYMENTS } start={ start } end={ end }/>
      </div>
  );
}

export default App;
