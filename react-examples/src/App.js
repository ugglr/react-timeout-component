import React from "react";
import { TimeoutComponent } from "react-timeout-component";

const MyComponent = (props) => {
  return (
    <div>
      <h1>Custom Counter</h1>
      <h2>{props.counter}</h2>
    </div>
  );
};

function App() {
  return (
    <div>
      <TimeoutComponent CustomComponent={MyComponent} timeToWait={5}>
        <h1>Hello React</h1>
      </TimeoutComponent>
    </div>
  );
}

export default App;
