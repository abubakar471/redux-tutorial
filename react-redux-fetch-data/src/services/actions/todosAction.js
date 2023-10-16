import axios from "axios";
import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../constants/todosConstants";

export const getAllTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });

  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch({ type: GET_TODOS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_TODOS_FAILED, payload: err.message });
  }
};
