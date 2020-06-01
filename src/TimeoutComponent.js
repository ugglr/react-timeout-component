import React, { useState, useEffect } from "react";

function TimeoutComponent(props) {
  const { timeToWait, CustomComponent } = props;
  const [counter, setCounter] = useState(timeToWait || 60);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  if (CustomComponent && counter > 0)
    return <CustomComponent counter={counter} />;

  if (counter > 0) return <>{counter}</>;

  return <>{props.children}</>;
}

export default TimeoutComponent;
