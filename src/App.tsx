import React from 'react';
import './App.css';
import {PaymentsTable, PAYMENTS} from "./Payment";
import {SingleBarChart} from "./MyChart";


function App() {
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(20);
  return (
      <div className="container">
          <div>
              <SingleBarChart label={ '# of Votes' }
                              labels={ ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'] }
                              data={ [12, 19, 3, 5, 2, 3] }/>
          </div>
          <PaymentsTable payments={ PAYMENTS } start={ start } end={ end }/>
      </div>
  );
}

export default App;
