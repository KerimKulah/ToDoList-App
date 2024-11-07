import React from 'react'
import { useState } from 'react'

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState("");

    const clearInput = () => {
        setNewTodo("");
    }

    const createTodo = () => {
        if (!newTodo)
            return;
        const todo = {
            id: Math.floor(Math.random() * 1000),
            text: newTodo
        }
        onCreateTodo(todo);
        clearInput();
    }

    return (
        <div className='d-flex'>
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className="form-control p-2 rounded-start" type="text" placeholder='Yapacağınız görevi giriniz' />
            <button type="button" onClick={createTodo} className="btn btn-primary rounded-end ms-2">Ekle</button>
        </div>
    )
}

export default TodoCreate