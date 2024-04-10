import { useState } from "react";
import { addTodo } from "../store/actions/actions";
import {useDispatch} from "react-redux";


export const Form = () => {
    const dispatch = useDispatch();
    const [todoValue, setTodoValue] = useState("");
    console.log(todoValue)

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = new Date();
        const todo = {
            id,
            title: todoValue,
            completed: false
        };
        dispatch(addTodo(todo));
        setTodoValue("");
        console.log(todo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Add your todo-item</label>
            <div>
                <input 
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setTodoValue(e.target.value)}
                />
                <button type="submit" className="btn">
                    Add
                </button>
            </div>
        </form>
    )
}