import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos } from "../services/actions/todosAction";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      {isLoading && <h3>loading...</h3>}
      {error && <h3>{error.message}</h3>}

      <section>
        {todos &&
          todos.map((todo) => (
            <div>
              <h1>{todo.title}</h1>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Todos;
