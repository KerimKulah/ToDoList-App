import React from 'react'
import Todo from './Todo';

function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {

    return (
        <div className="list-group">
            {
                todos && todos.map((todo) =>
                    <Todo todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />)
            }
        </div>
    )
}


export default TodoList