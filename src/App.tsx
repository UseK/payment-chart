import React from 'react';
import './App.css';
import {PaymentsTable, records} from "./Payment";

function App() {
  return (
      <PaymentsTable records={ records }/>
  );
}

export default App;
