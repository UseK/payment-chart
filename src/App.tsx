import React from 'react';
import './App.css';
import {PaymentsTable, PAYMENTS} from "./Payment";
import {MyChart} from "./MyChart";

function App() {
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(20);
  return (
      <div className="container">
          <div>
              <MyChart/>
          </div>
          <PaymentsTable payments={ PAYMENTS } start={ start } end={ end }/>
      </div>
  );
}

export default App;
