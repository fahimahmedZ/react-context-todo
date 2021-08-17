import React, {useContext} from 'react';
import { TodoContext } from '../context/TodoProvider';

const Todo = (props) => {
    const todoContext = useContext(TodoContext);
    const { deleteTodo, setTodo, completedTodo } = todoContext
    return (
        <li>
            {
            props.todo.completed ? (<span></span>) :<span className="material-icons" onClick={() => setTodo(props.todo)}>edit</span>
            }
            <span 
            onClick={() => completedTodo(props.todo.id)}
            className={`${props.todo.completed ? `completed` : null}`}>{props.todo.title}</span>
            <span className="material-icons" onClick={() => deleteTodo(props.todo.id)}>delete_outline</span>
        </li>
    )
}

export default Todo
