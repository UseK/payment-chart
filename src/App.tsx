import React from 'react';
import './App.css';
import {PaymentsTable, PAYMENTS} from "./Payment";

function App() {
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(20);
  return (
      <PaymentsTable payments={ PAYMENTS } start={ start } end={ end }/>
  );
}

export default App;
