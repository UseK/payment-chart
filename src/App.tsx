import React from 'react';
import './App.css';
import {PaymentsTable, PAYMENTS} from "./Payment";
import {MyCanvas} from "./MyChart";

function App() {
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(20);
  return (
      <div className="container">
          <MyCanvas/>
          <PaymentsTable payments={ PAYMENTS } start={ start } end={ end }/>
      </div>
  );
}

export default App;
