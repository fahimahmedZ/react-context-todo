import React, {useContext} from 'react';
import TodoInput from './TodoInput';
import Todo from './Todo'
import { TodoContext } from '../context/TodoProvider'

const Todos = (props) => {
    const todoContext = useContext(TodoContext);
    const { todos } = todoContext;
    console.log(todos);

    return (
        <div className="todo">
            <TodoInput />
            <ul className="todo-body">
                {
                    todos.map((todo) => 
                        <Todo todo={todo} key={todo.id} />
                    )
                }
            </ul>
        </div>
    )
}

export default Todos
