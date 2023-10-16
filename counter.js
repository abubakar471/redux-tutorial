import { createStore } from "redux";

// defining action type names
const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// state
const initialCounterState = {
  count: 0,
};

// action-object with type and payload

// increment action creator
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

// decrement action creator
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const resetCounter = () => {
  return {
    type: RESET,
  };
};

// create reducer for counter
// reducer is a pure function, a pure function is a function , that takes input and definitely returns output
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, // copying the complete state and updating only the count key value
        count: state.count + 1,
      };

    case INCREMENT_BY_VALUE:
      return {
        ...state, // copying the complete state and updating only the count key value
        count: state.count + action.payload,
      };

    case DECREMENT:
      return {
        ...state, // copying the complete state and updating only the count key value
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state, // copying the complete state and updating only the count key value
        count: 0,
      };

    default:
      return state;
  }
};

// store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log("updated State => ", store.getState());
});

// dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(resetCounter());
store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(5));

