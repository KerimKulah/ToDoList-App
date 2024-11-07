import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { useState } from 'react'


function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const removeTodo = () => {
        onRemoveTodo(todo.id)
    }

    const [editable, setEditable] = useState(false)

    const [editedTodo, setEditedTodo] = useState(todo.text)

    const updateTodo = () => {
        if (!editedTodo) return;
        const request = {
            id: todo.id,
            text: editedTodo
        }
        onUpdateTodo(request)
        setEditable(false)
    }

    return (
        <div className='list-group-item d-flex justify-content-between align-items-center p-3 mb-2 bg-white shadow-sm rounded '>
            <div>
                {
                    editable ? <input value={editedTodo} onChange={(e) => setEditedTodo(e.target.value)} type="text" className='form-control' defaultValue={todo.text} /> : todo.text
                }
            </div>
            <div className='d-flex'>
                < CiCircleRemove onClick={removeTodo} className='text-danger  me-2' size={24} />
                {
                    editable ? <CiCircleCheck size={24} onClick={updateTodo} /> : <CiEdit className='text-primary' size={24} onClick={() => setEditable(true)} />
                }
            </div>
        </div>
    )
}

export default Todo