import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../services/actions/couterActions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <div>
      <h2>count : {count}</h2>

      <div>
        <button onClick={() => handleIncrement()}>Increment Count</button>
        <button onClick={() => handleDecrement()}>Decrement Count</button>
        <button onClick={() => handleReset()}>Reset Count</button>
      </div>
    </div>
  );
};

export default Counter;
