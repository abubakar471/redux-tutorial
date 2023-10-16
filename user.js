const { createStore } = require("redux");

const ADD_USER = "ADD_USER";

const initialState = {
  users: [],
  count: 0,
};

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      console.log(action.payload);
      return {
        ...state,
        users: [...state.users, action.payload],
        count: state.count + 1,
      };
  }
};

const store = createStore(userReducer);

store.subscribe(() => {
  console.log("updating state => ", store.getState());
});

store.dispatch(addUser({ name: "ab devs", email: "abubakar.devs@gmail.com" }));
store.dispatch(addUser({ name: "mehraz", email: "mehraz.devs@gmail.com" }));
