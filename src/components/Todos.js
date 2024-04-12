import { useDispatch, useSelector } from "react-redux";
import {
  deleteAll,
  handleCheckbox,
  removeTodo,
} from "../store/actions/actions";

export const Todos = () => {
  const todos = useSelector((state) => state.operationsReducer);

  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {todos.map((todo) => {
            <>
          <li>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={()=>dispatch(handleCheckbox(todo.id))}
            />
            <span>{todo.title}</span>

            <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
          </li>;

          <button onClick={()=>dispatch(deleteAll())}>delete all</button>;
          </>
        })}

      </ul>
    </div>
  );
};
