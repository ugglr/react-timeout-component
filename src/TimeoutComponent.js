import React, { useState, useEffect } from "react";

export function MinuteTimer(props) {
  const { timeToWait } = props;
  const [counter, setCounter] = useState(timeToWait || 60);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  if (counter > 0) return <>{counter}</>;

  return <>{props.children}</>;
}
